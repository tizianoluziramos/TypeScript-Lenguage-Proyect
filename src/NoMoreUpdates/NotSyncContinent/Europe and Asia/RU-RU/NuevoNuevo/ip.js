const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.вБуфер = function (ip, buff, offset) {
  offset = ~~offset;

  let результат;

  if (this.вФорматеV4(ip)) {
    результат = buff || Buffer.alloc(offset + 4);
    ip.split(/\./g).map((байт) => {
      результат[offset++] = parseInt(байт, 10) & 0xff;
    });
  } else if (this.вФорматеV6(ip)) {
    const секции = ip.split(':', 8);

    let i;
    for (i = 0; i < секции.length; i++) {
      const этоV4 = this.вФорматеV4(секции[i]);
      let v4Buffer;

      if (этоV4) {
        v4Buffer = this.вБуфер(секции[i]);
        секции[i] = v4Buffer.slice(0, 2).toString('hex');
      }

      if (v4Buffer && ++i < 8) {
        секции.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
      }
    }

    if (секции[0] === '') {
      while (секции.length < 8) секции.unshift('0');
    } else if (секции[секции.length - 1] === '') {
      while (секции.length < 8) секции.push('0');
    } else if (секции.length < 8) {
      for (i = 0; i < секции.length && секции[i] !== ''; i++);
      const argv = [i, 1];
      for (i = 9 - секции.length; i > 0; i--) {
        argv.push('0');
      }
      секции.splice(...argv);
    }

    результат = buff || Buffer.alloc(offset + 16);
    for (i = 0; i < секции.length; i++) {
      const слово = parseInt(секции[i], 16);
      результат[offset++] = (слово >> 8) & 0xff;
      результат[offset++] = слово & 0xff;
    }
  }

  if (!результат) {
    throw Error(`Неверный IP-адрес: ${ip}`);
  }

  return результат;
};

ip.вСтроку = function (buff, offset, длина) {
  offset = ~~offset;
  длина = длина || (buff.length - offset);

  let результат = [];
  if (длина === 4) {
    // IPv4
    for (let i = 0; i < длина; i++) {
      результат.push(buff[offset + i]);
    }
    результат = результат.join('.');
  } else if (длина === 16) {
    // IPv6
    for (let i = 0; i < длина; i += 2) {
      результат.push(buff.readUInt16BE(offset + i).toString(16));
    }
    результат = результат.join(':');
    результат = результат.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    результат = результат.replace(/:{3,4}/, '::');
  }

  return результат;
};

const ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.вФорматеV4 = function (ip) {
  return ipv4Regex.test(ip);
};

ip.вФорматеV6 = function (ip) {
  return ipv6Regex.test(ip);
};

function _нормализоватьСемейство(семейство) {
  if (семейство === 4) {
    return 'ipv4';
  }
  if (семейство === 6) {
    return 'ipv6';
  }
  return семейство ? семейство.toLowerCase() : 'ipv4';
}

ip.отДлиныПрефикса = function (длинаПрефикса, семейство) {
  if (длинаПрефикса > 32) {
    семейство = 'ipv6';
  } else {
    семейство = _нормализоватьСемейство(семейство);
  }

  let длина = 4;
  if (семейство === 'ipv6') {
    длина = 16;
  }
  const buff = Buffer.alloc(длина);

  for (let i = 0, n = buff.length; i < n; ++i) {
    let биты = 8;
    if (длинаПрефикса < 8) {
      биты = длинаПрефикса;
    }
    длинаПрефикса -= биты;

    buff[i] = ~(0xff >> биты) & 0xff;
  }

  return ip.вСтроку(buff);
};

ip.маска = function (адрес, маска) {
  адрес = ip.вБуфер(адрес);
  маска = ip.вБуфер(маска);

  const результат = Buffer.alloc(Math.max(адрес.length, маска.length));

  // Один и тот же протокол - делать побитовую операцию AND
  let i;
  if (адрес.length === маска.length) {
    for (i = 0; i < адрес.length; i++) {
      результат[i] = адрес[i] & маска[i];
    }
  } else if (маска.length === 4) {
    // IPv6-адрес и IPv4-маска
    for (i = 0; i < маска.length; i++) {
      результат[i] = адрес[адрес.length - 4 + i] & маска[i];
    }
  } else {
    // IPv4-адрес и IPv6-маска
    for (i = 0; i < результат.length - 6; i++) {
      результат[i] = 0;
    }

    // ::ffff:ipv4
    результат[10] = 0xff;
    результат[11] = 0xff;
    for (i = 0; i < адрес.length; i++) {
      результат[i + 12] = адрес[i] & маска[i + 12];
    }
    i += 12;
  }
  for (; i < результат.length; i++) {
    результат[i] = 0;
  }

  return ip.вСтроку(результат);
};

ip.cidr = function (строкаCIDR) {
  const частиCIDR = строкаCIDR.split('/');

  const адрес = частиCIDR[0];
  if (частиCIDR.length !== 2) {
    throw new Error(`Неверная CIDR подсеть: ${адрес}`);
  }

  const маска = ip.отДлиныПрефикса(parseInt(частиCIDR[1], 10));

  return ip.маска(адрес, маска);
};

ip.сеть = function (адрес, маска) {
  const адресСети = ip.отДлины(ip.маска(адрес, маска));

  // Рассчитать длину маски.
  const буферМаски = ip.вБуфер(маска);
  let длинаМаски = 0;

  for (let i = 0; i < буферМаски.length; i++) {
    if (буферМаски[i] === 0xff) {
      длинаМаски += 8;
    } else {
      let октет = буферМаски[i] & 0xff;
      while (октет) {
        октет = (октет << 1) & 0xff;
        длинаМаски++;
      }
    }
  }

  const количествоАдресов = 2 ** (32 - длинаМаски);

  return {
    адресСети: ip.отДлины(адресСети),
    первыйАдрес: количествоАдресов <= 2
      ? ip.отДлины(адресСети)
      : ip.отДлины(адресСети + 1),
    последнийАдрес: количествоАдресов <= 2
      ? ip.отДлины(адресСети + количествоАдресов - 1)
      : ip.отДлины(адресСети + количествоАдресов - 2),
    адресТрансляции: ip.отДлины(адресСети + количествоАдресов - 1),
    маскаПодсети: маска,
    длинаМаски: длинаМаски,
    количествоХостов: количествоАдресов <= 2
      ? количествоАдресов : количествоАдресов - 2,
    длина: количествоАдресов,
    содержит(другой) {
      return адресСети === ip.отДлины(ip.маска(другой, маска));
    },
  };
};

ip.cidrСеть = function (строкаCIDR) {
  const частиCIDR = строкаCIDR.split('/');

  const адрес = частиCIDR[0];
  if (частиCIDR.length !== 2) {
    throw new Error(`Неверная CIDR подсеть: ${адрес}`);
  }

  const маска = ip.отДлиныПрефикса(parseInt(частиCIDR[1], 10));

  return ip.сеть(адрес, маска);
};

ip.не = function (адрес) {
  const buff = ip.вБуфер(адрес);
  for (let i = 0; i < buff.length; i++) {
    buff[i] = 0xff ^ buff[i];
  }
  return ip.вСтроку(buff);
};

ip.или = function (a, b) {
  a = ip.вБуфер(a);
  b = ip.вБуфер(b);

  // тот же протокол
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.вСтроку(a);

    // смешанные протоколы
  }
  let buff = a;
  let другое = b;
  if (b.length > a.length) {
    buff = b;
    другое = a;
  }

  const смещение = buff.length - другое.length;
  for (let i = смещение; i < buff.length; ++i) {
    buff[i] |= другое[i - смещение];
  }

  return ip.вСтроку(buff);
};

ip.равны = function (a, b) {
  a = ip.вБуфер(a);
  b = ip.вБуфер(b);

  // тот же протокол
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // обмен
  if (b.length === 4) {
    const t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const слово = b.readUInt16BE(10);
  if (слово !== 0 && слово !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.частный = function (адрес) {
  // Сначала проверяем адреса loopback
  if (ip.вLoopback(адрес)) {
    return true;
  }

  // Убедитесь, что адрес ipv4 действителен
  if (!ip.вФорматеV6(адрес)) {
    const ipl = ip.нормализоватьВДлину(адрес);
    if (ipl < 0) {
      throw new Error('неверный ipv4 адрес');
    }
    // Нормализуем адрес для проверки частных диапазонов
    адрес = ip.отДлины(ipl);
  }

  // Проверяем частные диапазоны
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(адрес)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(адрес)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(адрес)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(адрес)
    || /^f[cd][0-9a-f]{2}:/i.test(адрес)
    || /^fe80:/i.test(адрес)
    || /^::1$/.test(адрес)
    || /^::$/.test(адрес);
};

ip.публичный = function (адрес) {
  return !ip.частный(адрес);
};

ip.вLoopback = function (адрес) {
  // Если адрес IPv4 в виде числа (без точек и двоеточий), конвертируем
  if (!/\./.test(адрес) && !/:/.test(адрес)) {
    адрес = ip.отДлины(Number(адрес));
  }

  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(адрес)
    || /^0177\./.test(адрес)
    || /^0x7f\./i.test(адрес)
    || /^fe80::1$/i.test(адрес)
    || /^::1$/.test(адрес)
    || /^::$/.test(адрес);
};

ip.loopback = function (семейство) {
  семейство = _нормализоватьСемейство(семейство);

  if (семейство !== 'ipv4' && семейство !== 'ipv6') {
    throw new Error('семейство должно быть ipv4 или ipv6');
  }

  return семейство === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

ip.адрес = function (имя, семейство) {
  const интерфейсы = os.networkInterfaces();

  семейство = _нормализоватьСемейство(семейство);

  if (имя && имя !== 'приватный' && имя !== 'публичный') {
    const res = интерфейсы[имя].filter((детали) => {
      const семействоItem = _нормализоватьСемейство(детали.family);
      return семействоItem === семейство;
    });
    if (res.length === 0) {
      return undefined;
    }
    return res[0].address;
  }

  const все = Object.keys(интерфейсы).map((nic) => {
    const адреса = интерфейсы[nic].filter((детали) => {
      детали.family = _нормализоватьСемейство(детали.family);
      if (детали.family !== семейство || ip.вLoopback(детали.address)) {
        return false;
      } if (!имя) {
        return true;
      }

      return имя === 'публичный' ? ip.частный(детали.address)
        : ip.публичный(детали.address);
    });

    return адреса.length ? адреса[0].address : undefined;
  }).filter(Boolean);

  return !все.length ? ip.loopback(семейство) : все[0];
};

ip.отДлины = function (ip) {
  let ipl = 0;
  const части = ip.split('.');

  for (let i = 0; i < 4; i++) {
    ipl |= parseInt(части[i], 10) << ((3 - i) * 8);
  }
  return ipl;
};