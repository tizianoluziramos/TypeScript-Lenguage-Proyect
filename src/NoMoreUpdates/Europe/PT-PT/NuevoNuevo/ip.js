const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.aBuffer = function (ip, buff, offset) {
  offset = ~~offset;

  let resultado;

  if (this.ehV4Formato(ip)) {
    resultado = buff || Buffer.alloc(offset + 4);
    ip.split(/\./g).map((byte) => {
      resultado[offset++] = parseInt(byte, 10) & 0xff;
    });
  } else if (this.ehV6Formato(ip)) {
    const secoes = ip.split(':', 8);

    let i;
    for (i = 0; i < secoes.length; i++) {
      const ehV4 = this.ehV4Formato(secoes[i]);
      let v4Buffer;

      if (ehV4) {
        v4Buffer = this.aBuffer(secoes[i]);
        secoes[i] = v4Buffer.slice(0, 2).toString('hex');
      }

      if (v4Buffer && ++i < 8) {
        secoes.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
      }
    }

    if (secoes[0] === '') {
      while (secoes.length < 8) secoes.unshift('0');
    } else if (secoes[secoes.length - 1] === '') {
      while (secoes.length < 8) secoes.push('0');
    } else if (secoes.length < 8) {
      for (i = 0; i < secoes.length && secoes[i] !== ''; i++);
      const argv = [i, 1];
      for (i = 9 - secoes.length; i > 0; i--) {
        argv.push('0');
      }
      secoes.splice(...argv);
    }

    resultado = buff || Buffer.alloc(offset + 16);
    for (i = 0; i < secoes.length; i++) {
      const palavra = parseInt(secoes[i], 16);
      resultado[offset++] = (palavra >> 8) & 0xff;
      resultado[offset++] = palavra & 0xff;
    }
  }

  if (!resultado) {
    throw Error(`Endereço IP inválido: ${ip}`);
  }

  return resultado;
};

ip.aCadena = function (buff, offset, comprimento) {
  offset = ~~offset;
  comprimento = comprimento || (buff.length - offset);

  let resultado = [];
  if (comprimento === 4) {
    // IPv4
    for (let i = 0; i < comprimento; i++) {
      resultado.push(buff[offset + i]);
    }
    resultado = resultado.join('.');
  } else if (comprimento === 16) {
    // IPv6
    for (let i = 0; i < comprimento; i += 2) {
      resultado.push(buff.readUInt16BE(offset + i).toString(16));
    }
    resultado = resultado.join(':');
    resultado = resultado.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    resultado = resultado.replace(/:{3,4}/, '::');
  }

  return resultado;
};

const ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.ehV4Formato = function (ip) {
  return ipv4Regex.test(ip);
};

ip.ehV6Formato = function (ip) {
  return ipv6Regex.test(ip);
};

function _normalizarFamilia(familia) {
  if (familia === 4) {
    return 'ipv4';
  }
  if (familia === 6) {
    return 'ipv6';
  }
  return familia ? familia.toLowerCase() : 'ipv4';
}

ip.desdeLongurPrefixo = function (longurPrefixo, familia) {
  if (longurPrefixo > 32) {
    familia = 'ipv6';
  } else {
    familia = _normalizarFamilia(familia);
  }

  let comprimento = 4;
  if (familia === 'ipv6') {
    comprimento = 16;
  }
  const buff = Buffer.alloc(comprimento);

  for (let i = 0, n = buff.length; i < n; ++i) {
    let bits = 8;
    if (longurPrefixo < 8) {
      bits = longurPrefixo;
    }
    longurPrefixo -= bits;

    buff[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.aCadena(buff);
};

ip.mascara = function (endereco, mascara) {
  endereco = ip.aBuffer(endereco);
  mascara = ip.aBuffer(mascara);

  const resultado = Buffer.alloc(Math.max(endereco.length, mascara.length));

  // Mesmo protocolo - fazer AND bit a bit
  let i;
  if (endereco.length === mascara.length) {
    for (i = 0; i < endereco.length; i++) {
      resultado[i] = endereco[i] & mascara[i];
    }
  } else if (mascara.length === 4) {
    // Endereço IPv6 e máscara IPv4
    for (i = 0; i < mascara.length; i++) {
      resultado[i] = endereco[endereco.length - 4 + i] & mascara[i];
    }
  } else {
    // Máscara IPv6 e endereço IPv4
    for (i = 0; i < resultado.length - 6; i++) {
      resultado[i] = 0;
    }

    // ::ffff:ipv4
    resultado[10] = 0xff;
    resultado[11] = 0xff;
    for (i = 0; i < endereco.length; i++) {
      resultado[i + 12] = endereco[i] & mascara[i + 12];
    }
    i += 12;
  }
  for (; i < resultado.length; i++) {
    resultado[i] = 0;
  }

  return ip.aCadena(resultado);
};

ip.cidr = function (cadenaCIDR) {
  const partesCIDR = cadenaCIDR.split('/');

  const endereco = partesCIDR[0];
  if (partesCIDR.length !== 2) {
    throw new Error(`subrede CIDR inválida: ${endereco}`);
  }

  const mascara = ip.desdeLongurPrefixo(parseInt(partesCIDR[1], 10));

  return ip.mascara(endereco, mascara);
};

ip.subrede = function (endereco, mascara) {
  const enderecoDeRede = ip.desdeLongur(ip.mascara(endereco, mascara));

  // Calcular o comprimento da máscara.
  const bufferMascara = ip.aBuffer(mascara);
  let comprimentoMascara = 0;

  for (let i = 0; i < bufferMascara.length; i++) {
    if (bufferMascara[i] === 0xff) {
      comprimentoMascara += 8;
    } else {
      let octeto = bufferMascara[i] & 0xff;
      while (octeto) {
        octeto = (octeto << 1) & 0xff;
        comprimentoMascara++;
      }
    }
  }

  const numeroDeEnderecos = 2 ** (32 - comprimentoMascara);

  return {
    enderecoDeRede: ip.desdeLongur(enderecoDeRede),
    primeiraEndereco: numeroDeEnderecos <= 2
      ? ip.desdeLongur(enderecoDeRede)
      : ip.desdeLongur(enderecoDeRede + 1),
    ultimaEndereco: numeroDeEnderecos <= 2
      ? ip.desdeLongur(enderecoDeRede + numeroDeEnderecos - 1)
      : ip.desdeLongur(enderecoDeRede + numeroDeEnderecos - 2),
    enderecoDeDifusao: ip.desdeLongur(enderecoDeRede + numeroDeEnderecos - 1),
    mascaraDeSubrede: mascara,
    comprimentoMascara: comprimentoMascara,
    numHosts: numeroDeEnderecos <= 2
      ? numeroDeEnderecos : numeroDeEnderecos - 2,
    comprimento: numeroDeEnderecos,
    contem(Outro) {
      return enderecoDeRede === ip.desdeLongur(ip.mascara(Outro, mascara));
    },
  };
};

ip.cidrSubrede = function (cadenaCIDR) {
  const partesCIDR = cadenaCIDR.split('/');

  const endereco = partesCIDR[0];
  if (partesCIDR.length !== 2) {
    throw new Error(`subrede CIDR inválida: ${endereco}`);
  }

  const mascara = ip.desdeLongurPrefixo(parseInt(partesCIDR[1], 10));

  return ip.subrede(endereco, mascara);
};

ip.nao = function (endereco) {
  const buff = ip.aBuffer(endereco);
  for (let i = 0; i < buff.length; i++) {
    buff[i] = 0xff ^ buff[i];
  }
  return ip.aCadena(buff);
};

ip.ou = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // mesmo protocolo
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.aCadena(a);

    // protocolos mistos
  }
  let buff = a;
  let outro = b;
  if (b.length > a.length) {
    buff = b;
    outro = a;
  }

  const deslocamento = buff.length - outro.length;
  for (let i = deslocamento; i < buff.length; ++i) {
    buff[i] |= outro[i - deslocamento];
  }

  return ip.aCadena(buff);
};

ip.ehIgual = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // Mesmo protocolo
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Trocar
  if (b.length === 4) {
    const t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const palavra = b.readUInt16BE(10);
  if (palavra !== 0 && palavra !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.ehPrivada = function (endereco) {
  // Verificar endereços de loopback primeiro
  if (ip.ehLoopback(endereco)) {
    return true;
  }

  // Certificar-se de que o endereço ipv4 seja válido
  if (!ip.ehV6Formato(endereco)) {
    const ipl = ip.normalizarALongo(endereco);
    if (ipl < 0) {
      throw new Error('endereço ipv4 inválido');
    }
    // Normalizar o endereço para verificações de intervalo privado
    endereco = ip.desdeLongur(ipl);
  }

  // Verificar intervalos privados
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(endereco)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(endereco)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(endereco)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(endereco)
    || /^f[cd][0-9a-f]/.test(endereco);
};

ip.ehPublica = function (endereco) {
  return !ip.ehPrivada(endereco);
};

ip.ehLoopback = function (endereco) {
  return /^127\./.test(endereco) || /::1/.test(endereco);
};

ip.loopback = function (familia) {
  if (familia === 'ipv4') return '127.0.0.1';
  return '::1';
};

ip.endereco = function (nome, familia) {
  familia = _normalizarFamilia(familia);
  let endereco;
  if (familia === 'ipv4') {
    endereco = os.networkInterfaces()[nome].find(function (resulted) {
      return resulted.family === 'IPv4';
    });
  }
  if (familia === 'ipv6') {
    endereco = os.networkInterfaces()[nome].find(function (resulted) {
      return resulted.family === 'IPv6';
    });
  }

  return endereco ? endereco.address : undefined;
};

ip.desdeLongur = function (ip) {
  ip = ip.split('.').reverse().join('.');
  return ip;
};

module.exports = ip