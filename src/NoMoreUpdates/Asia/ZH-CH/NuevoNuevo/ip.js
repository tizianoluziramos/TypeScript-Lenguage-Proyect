const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.aBuffer = function (ip地址, 缓冲区, 偏移量) {
  偏移量 = ~~偏移量;

  let 结果;

  if (this.是V4格式(ip地址)) {
    结果 = 缓冲区 || Buffer.alloc(偏移量 + 4);
    ip地址.split(/\./g).map((字节) => {
      结果[偏移量++] = parseInt(字节, 10) & 0xff;
    });
  } else if (this.是V6格式(ip地址)) {
    const 部分 = ip地址.split(':', 8);

    let i;
    for (i = 0; i < 部分.length; i++) {
      const 是V4 = this.是V4格式(部分[i]);
      let v4缓冲区;

      if (是V4) {
        v4缓冲区 = this.aBuffer(部分[i]);
        部分[i] = v4缓冲区.slice(0, 2).toString('hex');
      }

      if (v4缓冲区 && ++i < 8) {
        部分.splice(i, 0, v4缓冲区.slice(2, 4).toString('hex'));
      }
    }

    if (部分[0] === '') {
      while (部分.length < 8) 部分.unshift('0');
    } else if (部分[部分.length - 1] === '') {
      while (部分.length < 8) 部分.push('0');
    } else if (部分.length < 8) {
      for (i = 0; i < 部分.length && 部分[i] !== ''; i++);
      const argv = [i, 1];
      for (i = 9 - 部分.length; i > 0; i--) {
        argv.push('0');
      }
      部分.splice(...argv);
    }

    结果 = 缓冲区 || Buffer.alloc(偏移量 + 16);
    for (i = 0; i < 部分.length; i++) {
      const 单词 = parseInt(部分[i], 16);
      结果[偏移量++] = (单词 >> 8) & 0xff;
      结果[偏移量++] = 单词 & 0xff;
    }
  }

  if (!结果) {
    throw Error(`无效的IP地址: ${ip地址}`);
  }

  return 结果;
};

ip.aCadena = function (缓冲区, 偏移量, 长度) {
  偏移量 = ~~偏移量;
  长度 = 长度 || (缓冲区.length - 偏移量);

  let 结果 = [];
  if (长度 === 4) {
    // IPv4
    for (let i = 0; i < 长度; i++) {
      结果.push(缓冲区[偏移量 + i]);
    }
    结果 = 结果.join('.');
  } else if (长度 === 16) {
    // IPv6
    for (let i = 0; i < 长度; i += 2) {
      结果.push(缓冲区.readUInt16BE(偏移量 + i).toString(16));
    }
    结果 = 结果.join(':');
    结果 = 结果.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    结果 = 结果.replace(/:{3,4}/, '::');
  }

  return 结果;
};

const ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.是V4格式 = function (ip地址) {
  return ipv4Regex.test(ip地址);
};

ip.是V6格式 = function (ip地址) {
  return ipv6Regex.test(ip地址);
};

function _规范化家庭(家庭) {
  if (家庭 === 4) {
    return 'ipv4';
  }
  if (家庭 === 6) {
    return 'ipv6';
  }
  return 家庭 ? 家庭.toLowerCase() : 'ipv4';
}

ip.从前缀长度 = function (前缀长度, 家庭) {
  if (前缀长度 > 32) {
    家庭 = 'ipv6';
  } else {
    家庭 = _规范化家庭(家庭);
  }

  let 长度 = 4;
  if (家庭 === 'ipv6') {
    长度 = 16;
  }
  const 缓冲区 = Buffer.alloc(长度);

  for (let i = 0, n = 缓冲区.length; i < n; ++i) {
    let 位 = 8;
    if (前缀长度 < 8) {
      位 = 前缀长度;
    }
    前缀长度 -= 位;

    缓冲区[i] = ~(0xff >> 位) & 0xff;
  }

  return ip.aCadena(缓冲区);
};

ip.子网掩码 = function (地址, 掩码) {
  地址 = ip.aBuffer(地址);
  掩码 = ip.aBuffer(掩码);

  const 结果 = Buffer.alloc(Math.max(地址.length, 掩码.length));

  // 同一协议 - 按位与
  let i;
  if (地址.length === 掩码.length) {
    for (i = 0; i < 地址.length; i++) {
      结果[i] = 地址[i] & 掩码[i];
    }
  } else if (掩码.length === 4) {
    // IPv6地址和IPv4掩码
    for (i = 0; i < 掩码.length; i++) {
      结果[i] = 地址[地址.length - 4 + i] & 掩码[i];
    }
  } else {
    // IPv6掩码和IPv4地址
    for (i = 0; i < 结果.length - 6; i++) {
      结果[i] = 0;
    }

    // ::ffff:ipv4
    结果[10] = 0xff;
    结果[11] = 0xff;
    for (i = 0; i < 地址.length; i++) {
      结果[i + 12] = 地址[i] & 掩码[i + 12];
    }
    i += 12;
  }
  for (; i < 结果.length; i++) {
    结果[i] = 0;
  }

  return ip.aCadena(结果);
};

// El resto del código sigue de la misma manera con funciones traducidas
ip.cidr = function (CIDR字符串) {
  const CIDR部分 = CIDR字符串.split('/');

  const 地址 = CIDR部分[0];
  if (CIDR部分.length !== 2) {
    throw new Error(`无效的CIDR子网: ${地址}`);
  }

  const 掩码 = ip.从前缀长度(parseInt(CIDR部分[1], 10));

  return ip.子网掩码(地址, 掩码);
};

ip.子网 = function (地址, 掩码) {
  const 网络地址 = ip.从长度(ip.子网掩码(地址, 掩码));

  // 计算掩码长度。
  const 掩码缓冲区 = ip.aBuffer(掩码);
  let 掩码长度 = 0;

  for (let i = 0; i < 掩码缓冲区.length; i++) {
    if (掩码缓冲区[i] === 0xff) {
      掩码长度 += 8;
    } else {
      let 八位字节 = 掩码缓冲区[i] & 0xff;
      while (八位字节) {
        八位字节 = (八位字节 << 1) & 0xff;
        掩码长度++;
      }
    }
  }

  const 地址数量 = 2 ** (32 - 掩码长度);

  return {
    网络地址: ip.从长度(网络地址),
    第一个地址: 地址数量 <= 2
      ? ip.从长度(网络地址)
      : ip.从长度(网络地址 + 1),
    最后一个地址: 地址数量 <= 2
      ? ip.从长度(网络地址 + 地址数量 - 1)
      : ip.从长度(网络地址 + 地址数量 - 2),
    广播地址: ip.从长度(网络地址 + 地址数量 - 1),
    子网掩码: 掩码,
    掩码长度: 掩码长度,
    主机数量: 地址数量 <= 2
      ? 地址数量 : 地址数量 - 2,
    长度: 地址数量,
    包含(另一个地址) {
      return 网络地址 === ip.从长度(ip.子网掩码(另一个地址, 掩码));
    },
  };
};

ip.cidr子网 = function (CIDR字符串) {
  const CIDR部分 = CIDR字符串.split('/');

  const 地址 = CIDR部分[0];
  if (CIDR部分.length !== 2) {
    throw new Error(`无效的CIDR子网: ${地址}`);
  }

  const 掩码 = ip.从前缀长度(parseInt(CIDR部分[1], 10));

  return ip.子网(地址, 掩码);
};

ip.非 = function (地址) {
  const 缓冲区 = ip.aBuffer(地址);
  for (let i = 0; i < 缓冲区.length; i++) {
    缓冲区[i] = 0xff ^ 缓冲区[i];
  }
  return ip.aCadena(缓冲区);
};

ip.或 = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // 同一协议
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.aCadena(a);

    // 混合协议
  }
  let 缓冲区 = a;
  let 另一个 = b;
  if (b.length > a.length) {
    缓冲区 = b;
    另一个 = a;
  }

  const 偏移量 = 缓冲区.length - 另一个.length;
  for (let i = 偏移量; i < 缓冲区.length; ++i) {
    缓冲区[i] |= 另一个[i - 偏移量];
  }

  return ip.aCadena(缓冲区);
};

ip.相等 = function (a, b) {
  a = ip.aBuffer(a);
  b = ip.aBuffer(b);

  // 同一协议
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // 交换
  if (b.length === 4) {
    const 临时 = b;
    b = a;
    a = 临时;
  }

  // a - IPv4，b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const 单词 = b.readUInt16BE(10);
  if (单词 !== 0 && 单词 !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.私有 = function (地址) {
  // 首先检查回环地址
  if (ip.是回环(地址)) {
    return true;
  }

  // 确保IPv4地址有效
  if (!ip.是V6格式(地址)) {
    const 地址长度 = ip.规范化为长格式(地址);
    if (地址长度 < 0) {
      throw new Error('无效的IPv4地址');
    }
    // 规范化地址用于私有范围检查
    地址 = ip.从长度(地址长度);
  }

  // 检查私有范围
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(地址)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(地址)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(地址)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(地址)
    || /^f[cd][0-9a-f]{2}:/i.test(地址)
    || /^fe80:/i.test(地址)
    || /^::1$/.test(地址)
    || /^::$/.test(地址);
};

ip.公共 = function (地址) {
  return !ip.私有(地址);
};

ip.回环 = function (地址) {
  // 如果地址是IPv4形式的长数字（没有点和冒号），则转换
  if (!/\./.test(地址) && !/:/.test(地址)) {
    地址 = ip.从长度(Number(地址));
  }

  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(地址)
    || /^0177\./.test(地址)
    || /^0x7f\./i.test(地址)
    || /^fe80::1$/i.test(地址)
    || /^::1$/.test(地址)
    || /^::$/.test(地址);
};

ip.回环地址 = function (家庭) {
  家庭 = _规范化家庭(家庭);

  if (家庭 !== 'ipv4' && 家庭 !== 'ipv6') {
    throw new Error('家庭必须是ipv4或ipv6');
  }

  return 家庭 === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

ip.地址 = function (名称, 家庭) {
  const 接口 = os.networkInterfaces();

  家庭 = _规范化家庭(家庭);

  if (名称 && 名称 !== '私有' && 名称 !== '公共') {
    const 结果 = 接口[名称].filter((详细信息) => {
      const 接口家庭 = _规范化家庭(详细信息.family);
      return 接口家庭 === 家庭;
    });
    if (结果.length === 0) {
      return undefined;
    }
    return 结果[0].address;
  }

  const 所有 = Object.keys(接口).map((nic) => {
    const 地址 = 接口[nic].filter((详细信息) => {
      详细信息.family = _规范化家庭(详细信息.family);
      if (详细信息.family !== 家庭 || ip.回环(详细信息.address)) {
        return false;
      } if (!名称) {
        return true;
      }

      return 名称 === '公共' ? ip.私有(详细信息.address)
        : ip.公共(详细信息.address);
    });

    return 地址.length ? 地址[0].address : undefined;
  }).filter(Boolean);

  return !所有.length ? ip.回环地址(家庭) : 所有[0];
};

ip.从长度 = function (ip地址) {
  let 地址长度 = 0;
  const 部分 = ip地址.split('.');

  for (let i = 0; i < 4; i++) {
    地址长度 |= parseInt(部分[i], 10) << ((3 - i) * 8);
  }
  return 地址长度;
};

module.exports = ip;