const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.aBuffer = function (ip, buff, offset) {
  offset = ~~offset;

  let resultado;

  if (this.esV4Formato(ip)) {
    resultado = buff || Buffer.alloc(offset + 4);
    ip.split(/\./g).map((byte) => {
      resultado[offset++] = parseInt(byte, 10) & 0xff;
    });
  } else if (this.esV6Formato(ip)) {
    const secciones = ip.split(':', 8);

    let i;
    for (i = 0; i < secciones.length; i++) {
      const esV4 = this.esV4Formato(secciones[i]);
      let v4Buffer;

      if (esV4) {
        v4Buffer = this.aBuffer(secciones[i]);
        secciones[i] = v4Buffer.slice(0, 2).toString('hex');
      }

      if (v4Buffer && ++i < 8) {
        secciones.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
      }
    }

    if (secciones[0] === '') {
      while (secciones.length < 8) secciones.unshift('0');
    } else if (secciones[secciones.length - 1] === '') {
      while (secciones.length < 8) secciones.push('0');
    } else if (secciones.length < 8) {
      for (i = 0; i < secciones.length && secciones[i] !== ''; i++);
      const argv = [i, 1];
      for (i = 9 - secciones.length; i > 0; i--) {
        argv.push('0');
      }
      secciones.splice(...argv);
    }

    resultado = buff || Buffer.alloc(offset + 16);
    for (i = 0; i < secciones.length; i++) {
      const palabra = parseInt(secciones[i], 16);
      resultado[offset++] = (palabra >> 8) & 0xff;
      resultado[offset++] = palabra & 0xff;
    }
  }

  if (!resultado) {
    throw Error(`Dirección IP inválida: ${ip}`);
  }

  return resultado;
};

ip.aCadena = function (buff, offset, longitud) {
  offset = ~~offset;
  longitud = longitud || (buff.length - offset);

  let resultado = [];
  if (longitud === 4) {
    // IPv4
    for (let i = 0; i < longitud; i++) {
      resultado.push(buff[offset + i]);
    }
    resultado = resultado.join('.');
  } else if (longitud === 16) {
    // IPv6
    for (let i = 0; i < longitud; i += 2) {
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

ip.esV4Formato = function (ip) {
  return ipv4Regex.test(ip);
};

ip.esV6Formato = function (ip) {
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

ip.desdeLongitudPrefijo = function (longitudPrefijo, familia) {
  if (longitudPrefijo > 32) {
    familia = 'ipv6';
  } else {
    familia = _normalizarFamilia(familia);
  }

  let longitud = 4;
  if (familia === 'ipv6') {
    longitud = 16;
  }
  const buff = Buffer.alloc(longitud);

  for (let i = 0, n = buff.length; i < n; ++i) {
    let bits = 8;
    if (longitudPrefijo < 8) {
      bits = longitudPrefijo;
    }
    longitudPrefijo -= bits;

    buff[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.aCadena(buff);
};

ip.mascara = function (direccion, mascara) {
  direccion = ip.aBuffer(direccion);
  mascara = ip.aBuffer(mascara);

  const resultado = Buffer.alloc(Math.max(direccion.length, mascara.length));

  // Mismo protocolo - hacer AND bit a bit
  let i;
  if (direccion.length === mascara.length) {
    for (i = 0; i < direccion.length; i++) {
      resultado[i] = direccion[i] & mascara[i];
    }
  } else if (mascara.length === 4) {
    // Dirección IPv6 y máscara IPv4
    for (i = 0; i < mascara.length; i++) {
      resultado[i] = direccion[direccion.length - 4 + i] & mascara[i];
    }
  } else {
    // Máscara IPv6 y dirección IPv4
    for (i = 0; i < resultado.length - 6; i++) {
      resultado[i] = 0;
    }

    // ::ffff:ipv4
    resultado[10] = 0xff;
    resultado[11] = 0xff;
    for (i = 0; i < direccion.length; i++) {
      resultado[i + 12] = direccion[i] & mascara[i + 12];
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

  const direccion = partesCIDR[0];
  if (partesCIDR.length !== 2) {
    throw new Error(`subred CIDR inválida: ${direccion}`);
  }

  const mascara = ip.desdeLongitudPrefijo(parseInt(partesCIDR[1], 10));

  return ip.mascara(direccion, mascara);
};

ip.subred = function (direccion, mascara) {
  const direccionDeRed = ip.desdeLongitud(ip.mascara(direccion, mascara));

  // Calcular la longitud de la máscara.
  const bufferMascara = ip.aBuffer(mascara);
  let longitudMascara = 0;

  for (let i = 0; i < bufferMascara.length; i++) {
    if (bufferMascara[i] === 0xff) {
      longitudMascara += 8;
    } else {
      let octeto = bufferMascara[i] & 0xff;
      while (octeto) {
        octeto = (octeto << 1) & 0xff;
        longitudMascara++;
      }
    }
  }

  const numeroDeDirecciones = 2 ** (32 - longitudMascara);

  return {
    direccionDeRed: ip.desdeLongitud(direccionDeRed),
    primeraDireccion: numeroDeDirecciones <= 2
      ? ip.desdeLongitud(direccionDeRed)
      : ip.desdeLongitud(direccionDeRed + 1),
    ultimaDireccion: numeroDeDirecciones <= 2
      ? ip.desdeLongitud(direccionDeRed + numeroDeDirecciones - 1)
      : ip.desdeLongitud(direccionDeRed + numeroDeDirecciones - 2),
    direccionDeDifusion: ip.desdeLongitud(direccionDeRed + numeroDeDirecciones - 1),
    mascaraDeSubred: mascara,
    longitudMascara: longitudMascara,
    numHosts: numeroDeDirecciones <= 2
      ? numeroDeDirecciones : numeroDeDirecciones - 2,
    longitud: numeroDeDirecciones,
    contiene(otro) {
      return direccionDeRed === ip.desdeLongitud(ip.mascara(otro, mascara));
    },
  };
};

ip.cidrSubred = function (cadenaCIDR) {
  const partesCIDR = cadenaCIDR.split('/');

  const direccion = partesCIDR[0];
  if (partesCIDR.length !== 2) {
    throw new Error(`subred CIDR inválida: ${direccion}`);
  }

  const mascara = ip.desdeLongitudPrefijo(parseInt(partesCIDR[1], 10));

  return ip.subred(direccion, mascara);
};

ip.no = function (direccion) {
  const buff = ip.aBuffer(direccion);
  for (let i = 0; i < buff.length; i++) {
    buff[i] = 0xff ^ buff[i];
  }
  return ip.aCadena(buff);
};

ip.o = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // mismo protocolo
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.aCadena(a);

    // protocolos mixtos
  }
  let buff = a;
  let otro = b;
  if (b.length > a.length) {
    buff = b;
    otro = a;
  }

  const desplazamiento = buff.length - otro.length;
  for (let i = desplazamiento; i < buff.length; ++i) {
    buff[i] |= otro[i - desplazamiento];
  }

  return ip.aCadena(buff);
};

ip.esIgual = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // Mismo protocolo
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Intercambiar
  if (b.length === 4) {
    const t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const palabra = b.readUInt16BE(10);
  if (palabra !== 0 && palabra !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.esPrivada = function (direccion) {
  // Comprobar direcciones de loopback primero
  if (ip.esLoopback(direccion)) {
    return true;
  }

  // Asegurarse de que la dirección ipv4 sea válida
  if (!ip.esV6Formato(direccion)) {
    const ipl = ip.normalizarALargo(direccion);
    if (ipl < 0) {
      throw new Error('dirección ipv4 inválida');
    }
    // Normalizar la dirección para las comprobaciones de rango privado
    direccion = ip.desdeLongitud(ipl);
  }

  // Comprobar rangos privados
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(direccion)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(direccion)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(direccion)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(direccion)
    || /^f[cd][0-9a-f]{2}:/i.test(direccion)
    || /^fe80:/i.test(direccion)
    || /^::1$/.test(direccion)
    || /^::$/.test(direccion);
};

ip.esPublica = function (direccion) {
  return !ip.esPrivada(direccion);
};

ip.esLoopback = function (direccion) {
  // Si la dirección es una dirección IPv4 en forma de número largo (sin puntos y sin dos puntos), convertirla
  if (!/\./.test(direccion) && !/:/.test(direccion)) {
    direccion = ip.desdeLongitud(Number(direccion));
  }

  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(direccion)
    || /^0177\./.test(direccion)
    || /^0x7f\./i.test(direccion)
    || /^fe80::1$/i.test(direccion)
    || /^::1$/.test(direccion)
    || /^::$/.test(direccion);
};

ip.loopback = function (familia) {
  familia = _normalizarFamilia(familia);

  if (familia !== 'ipv4' && familia !== 'ipv6') {
    throw new Error('la familia debe ser ipv4 o ipv6');
  }

  return familia === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

ip.direccion = function (nombre, familia) {
  const interfaces = os.networkInterfaces();

  familia = _normalizarFamilia(familia);

  if (nombre && nombre !== 'privada' && nombre !== 'publica') {
    const res = interfaces[nombre].filter((detalles) => {
      const familiaItem = _normalizarFamilia(detalles.family);
      return familiaItem === familia;
    });
    if (res.length === 0) {
      return undefined;
    }
    return res[0].address;
  }

  const todos = Object.keys(interfaces).map((nic) => {
    const direcciones = interfaces[nic].filter((detalles) => {
      detalles.family = _normalizarFamilia(detalles.family);
      if (detalles.family !== familia || ip.esLoopback(detalles.address)) {
        return false;
      } if (!nombre) {
        return true;
      }

      return nombre === 'publica' ? ip.esPrivada(detalles.address)
        : ip.esPublica(detalles.address);
    });

    return direcciones.length ? direcciones[0].address : undefined;
  }).filter(Boolean);

  return !todos.length ? ip.loopback(familia) : todos[0];
};

ip.desdeLongitud = function (ip) {
  let ipl = 0;
  const partes = ip.split('.');

  for (let i = 0; i < 4; i++) {
    ipl |= parseInt(partes[i], 10) << ((3 - i) * 8);
  }
  return ipl;
};

module.exports = ip