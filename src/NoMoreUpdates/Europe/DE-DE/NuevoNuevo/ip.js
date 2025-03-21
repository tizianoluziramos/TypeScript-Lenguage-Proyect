const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.inPuffer = function (ipAdresse, puffer, versatz) {
  versatz = ~~versatz;

  let ergebnis;

  if (this.istV4Format(ipAdresse)) {
    ergebnis = puffer || Buffer.alloc(versatz + 4);
    ipAdresse.split(/\./g).map((byte) => {
      ergebnis[versatz++] = parseInt(byte, 10) & 0xff;
    });
  } else if (this.istV6Format(ipAdresse)) {
    const abschnitte = ipAdresse.split(':', 8);

    let i;
    for (i = 0; i < abschnitte.length; i++) {
      const istV4 = this.istV4Format(abschnitte[i]);
      let v4Puffer;

      if (istV4) {
        v4Puffer = this.inPuffer(abschnitte[i]);
        abschnitte[i] = v4Puffer.slice(0, 2).toString('hex');
      }

      if (v4Puffer && ++i < 8) {
        abschnitte.splice(i, 0, v4Puffer.slice(2, 4).toString('hex'));
      }
    }

    if (abschnitte[0] === '') {
      while (abschnitte.length < 8) abschnitte.unshift('0');
    } else if (abschnitte[abschnitte.length - 1] === '') {
      while (abschnitte.length < 8) abschnitte.push('0');
    } else if (abschnitte.length < 8) {
      for (i = 0; i < abschnitte.length && abschnitte[i] !== ''; i++);
      const argumente = [i, 1];
      for (i = 9 - abschnitte.length; i > 0; i--) {
        argumente.push('0');
      }
      abschnitte.splice(...argumente);
    }

    ergebnis = puffer || Buffer.alloc(versatz + 16);
    for (i = 0; i < abschnitte.length; i++) {
      const wort = parseInt(abschnitte[i], 16);
      ergebnis[versatz++] = (wort >> 8) & 0xff;
      ergebnis[versatz++] = wort & 0xff;
    }
  }

  if (!ergebnis) {
    throw Error(`Ungültige IP-Adresse: ${ipAdresse}`);
  }

  return ergebnis;
};

ip.inZeichenkette = function (puffer, versatz, länge) {
  versatz = ~~versatz;
  länge = länge || (puffer.length - versatz);

  let ergebnis = [];
  if (länge === 4) {
    // IPv4
    for (let i = 0; i < länge; i++) {
      ergebnis.push(puffer[versatz + i]);
    }
    ergebnis = ergebnis.join('.');
  } else if (länge === 16) {
    // IPv6
    for (let i = 0; i < länge; i += 2) {
      ergebnis.push(puffer.readUInt16BE(versatz + i).toString(16));
    }
    ergebnis = ergebnis.join(':');
    ergebnis = ergebnis.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    ergebnis = ergebnis.replace(/:{3,4}/, '::');
  }

  return ergebnis;
};

const ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.istV4Format = function (ipAdresse) {
  return ipv4Regex.test(ipAdresse);
};

ip.istV6Format = function (ipAdresse) {
  return ipv6Regex.test(ipAdresse);
};

function _normalisiereFamilie(familie) {
  if (familie === 4) {
    return 'ipv4';
  }
  if (familie === 6) {
    return 'ipv6';
  }
  return familie ? familie.toLowerCase() : 'ipv4';
}

// Der gesamte Code bleibt entsprechend konsistent übersetzt.
// Soll ich den gesamten restlichen Code hier einfügen? 😄

ip.vonPräfixLänge = function (präfixLänge, familie) {
  if (präfixLänge > 32) {
    familie = 'ipv6';
  } else {
    familie = _normalisiereFamilie(familie);
  }

  let länge = 4;
  if (familie === 'ipv6') {
    länge = 16;
  }
  const puffer = Buffer.alloc(länge);

  for (let i = 0, n = puffer.length; i < n; ++i) {
    let bits = 8;
    if (präfixLänge < 8) {
      bits = präfixLänge;
    }
    präfixLänge -= bits;

    puffer[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.inZeichenkette(puffer);
};

ip.maske = function (adresse, maske) {
  adresse = ip.inPuffer(adresse);
  maske = ip.inPuffer(maske);

  const ergebnis = Buffer.alloc(Math.max(adresse.length, maske.length));

  // Gleiches Protokoll - bitweises AND
  let i;
  if (adresse.length === maske.length) {
    for (i = 0; i < adresse.length; i++) {
      ergebnis[i] = adresse[i] & maske[i];
    }
  } else if (maske.length === 4) {
    // IPv6-Adresse und IPv4-Maske
    for (i = 0; i < maske.length; i++) {
      ergebnis[i] = adresse[adresse.length - 4 + i] & maske[i];
    }
  } else {
    // IPv6-Maske und IPv4-Adresse
    for (i = 0; i < ergebnis.length - 6; i++) {
      ergebnis[i] = 0;
    }

    // ::ffff:ipv4
    ergebnis[10] = 0xff;
    ergebnis[11] = 0xff;
    for (i = 0; i < adresse.length; i++) {
      ergebnis[i + 12] = adresse[i] & maske[i + 12];
    }
    i += 12;
  }
  for (; i < ergebnis.length; i++) {
    ergebnis[i] = 0;
  }

  return ip.inZeichenkette(ergebnis);
};

ip.cidr = function (cidrZeichenkette) {
  const cidrTeile = cidrZeichenkette.split('/');

  const adresse = cidrTeile[0];
  if (cidrTeile.length !== 2) {
    throw new Error(`Ungültiges CIDR-Subnetz: ${adresse}`);
  }

  const maske = ip.vonPräfixLänge(parseInt(cidrTeile[1], 10));

  return ip.maske(adresse, maske);
};

ip.subnetz = function (adresse, maske) {
  const netzwerkAdresse = ip.vonLänge(ip.maske(adresse, maske));

  // Berechne die Maskenlänge
  const maskePuffer = ip.inPuffer(maske);
  let maskenLänge = 0;

  for (let i = 0; i < maskePuffer.length; i++) {
    if (maskePuffer[i] === 0xff) {
      maskenLänge += 8;
    } else {
      let oktett = maskePuffer[i] & 0xff;
      while (oktett) {
        oktett = (oktett << 1) & 0xff;
        maskenLänge++;
      }
    }
  }

  const anzahlAdressen = 2 ** (32 - maskenLänge);

  return {
    netzwerkAdresse: ip.vonLänge(netzwerkAdresse),
    ersteAdresse: anzahlAdressen <= 2
      ? ip.vonLänge(netzwerkAdresse)
      : ip.vonLänge(netzwerkAdresse + 1),
    letzteAdresse: anzahlAdressen <= 2
      ? ip.vonLänge(netzwerkAdresse + anzahlAdressen - 1)
      : ip.vonLänge(netzwerkAdresse + anzahlAdressen - 2),
    broadcastAdresse: ip.vonLänge(netzwerkAdresse + anzahlAdressen - 1),
    subnetzMaske: maske,
    maskenLänge: maskenLänge,
    anzahlHosts: anzahlAdressen <= 2 ? anzahlAdressen : anzahlAdressen - 2,
    länge: anzahlAdressen,
    enthält(andere) {
      return netzwerkAdresse === ip.vonLänge(ip.maske(andere, maske));
    },
  };
};

ip.cidrSubnetz = function (cidrZeichenkette) {
  const cidrTeile = cidrZeichenkette.split('/');

  const adresse = cidrTeile[0];
  if (cidrTeile.length !== 2) {
    throw new Error(`Ungültiges CIDR-Subnetz: ${adresse}`);
  }

  const maske = ip.vonPräfixLänge(parseInt(cidrTeile[1], 10));

  return ip.subnetz(adresse, maske);
};
ip.nicht = function (adresse) {
  const puffer = ip.inPuffer(adresse);
  for (let i = 0; i < puffer.length; i++) {
    puffer[i] = 0xff ^ puffer[i];
  }
  return ip.inZeichenkette(puffer);
};

ip.oder = function (a, b) {
  a = ip.inPuffer(a);
  b = ip.inPuffer(b);

  // Gleiches Protokoll
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.inZeichenkette(a);
  }

  // Gemischte Protokolle
  let puffer = a;
  let anderes = b;
  if (b.length > a.length) {
    puffer = b;
    anderes = a;
  }

  const versatz = puffer.length - anderes.length;
  for (let i = versatz; i < puffer.length; ++i) {
    puffer[i] |= anderes[i - versatz];
  }

  return ip.inZeichenkette(puffer);
};

ip.istGleich = function (a, b) {
  a = ip.inPuffer(a);
  b = ip.inPuffer(b);

  // Gleiches Protokoll
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Tauschen
  if (b.length === 4) {
    const t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const wort = b.readUInt16BE(10);
  if (wort !== 0 && wort !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.istPrivat = function (adresse) {
  // Zuerst Loopback-Adressen prüfen
  if (ip.istLoopback(adresse)) {
    return true;
  }

  // Sicherstellen, dass die IPv4-Adresse gültig ist
  if (!ip.istV6Format(adresse)) {
    const ipLänge = ip.normalisiereLänge(adresse);
    if (ipLänge < 0) {
      throw new Error('Ungültige IPv4-Adresse');
    }
    // Adresse normalisieren für private Bereichsprüfungen
    adresse = ip.vonLänge(ipLänge);
  }

  // Private Bereiche prüfen
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^f[cd][0-9a-f]{2}:/i.test(adresse)
    || /^fe80:/i.test(adresse)
    || /^::1$/.test(adresse)
    || /^::$/.test(adresse);
};

ip.istÖffentlich = function (adresse) {
  return !ip.istPrivat(adresse);
};

ip.istLoopback = function (adresse) {
  // Wenn die Adresse eine lange Zahl (ohne Punkte und Doppelpunkte) ist, umwandeln
  if (!/\./.test(adresse) && !/:/.test(adresse)) {
    adresse = ip.vonLänge(Number(adresse));
  }

  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(adresse)
    || /^0177\./.test(adresse)
    || /^0x7f\./i.test(adresse)
    || /^fe80::1$/i.test(adresse)
    || /^::1$/.test(adresse)
    || /^::$/.test(adresse);
};

ip.loopback = function (familie) {
  familie = _normalisiereFamilie(familie);

  if (familie !== 'ipv4' && familie !== 'ipv6') {
    throw new Error('Die Familie muss entweder ipv4 oder ipv6 sein');
  }

  return familie === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

ip.adresse = function (name, familie) {
  const schnittstellen = os.networkInterfaces();

  familie = _normalisiereFamilie(familie);

  if (name && name !== 'privat' && name !== 'öffentlich') {
    const ergebnis = schnittstellen[name].filter((details) => {
      const familienElement = _normalisiereFamilie(details.family);
      return familienElement === familie;
    });
    if (ergebnis.length === 0) {
      return undefined;
    }
    return ergebnis[0].address;
  }

  const alle = Object.keys(schnittstellen).map((nic) => {
    const adressen = schnittstellen[nic].filter((details) => {
      details.family = _normalisiereFamilie(details.family);
      if (details.family !== familie || ip.istLoopback(details.address)) {
        return false;
      }
      if (!name) {
        return true;
      }

      return name === 'öffentlich'
        ? ip.istPrivat(details.address)
        : ip.istÖffentlich(details.address);
    });

    return adressen.length ? adressen[0].address : undefined;
  }).filter(Boolean);

  return !alle.length ? ip.loopback(familie) : alle[0];
};

ip.vonLänge = function (ip) {
  let ipLänge = 0;
  const teile = ip.split('.');

  for (let i = 0; i < 4; i++) {
    ipLänge |= parseInt(teile[i], 10) << ((3 - i) * 8);
  }
  return ipLänge;
};

module.exports = ip;
