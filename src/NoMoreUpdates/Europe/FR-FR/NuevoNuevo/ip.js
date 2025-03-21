const ip = exports;
const { Buffer } = require('buffer');
const os = require('os');

ip.enTampon = function (ip, tampon, décalage) {
  décalage = ~~décalage;

  let résultat;

  if (this.estFormatV4(ip)) {
    résultat = tampon || Buffer.alloc(décalage + 4);
    ip.split(/\./g).map((octet) => {
      résultat[décalage++] = parseInt(octet, 10) & 0xff;
    });
  } else if (this.estFormatV6(ip)) {
    const sections = ip.split(':', 8);

    let i;
    for (i = 0; i < sections.length; i++) {
      const estV4 = this.estFormatV4(sections[i]);
      let tamponV4;

      if (estV4) {
        tamponV4 = this.enTampon(sections[i]);
        sections[i] = tamponV4.slice(0, 2).toString('hex');
      }

      if (tamponV4 && ++i < 8) {
        sections.splice(i, 0, tamponV4.slice(2, 4).toString('hex'));
      }
    }

    if (sections[0] === '') {
      while (sections.length < 8) sections.unshift('0');
    } else if (sections[sections.length - 1] === '') {
      while (sections.length < 8) sections.push('0');
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ''; i++);
      const argv = [i, 1];
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push('0');
      }
      sections.splice(...argv);
    }

    résultat = tampon || Buffer.alloc(décalage + 16);
    for (i = 0; i < sections.length; i++) {
      const mot = parseInt(sections[i], 16);
      résultat[décalage++] = (mot >> 8) & 0xff;
      résultat[décalage++] = mot & 0xff;
    }
  }

  if (!résultat) {
    throw Error(`Adresse IP invalide : ${ip}`);
  }

  return résultat;
};

ip.enChaîne = function (tampon, décalage, longueur) {
  décalage = ~~décalage;
  longueur = longueur || (tampon.length - décalage);

  let résultat = [];
  if (longueur === 4) {
    // IPv4
    for (let i = 0; i < longueur; i++) {
      résultat.push(tampon[décalage + i]);
    }
    résultat = résultat.join('.');
  } else if (longueur === 16) {
    // IPv6
    for (let i = 0; i < longueur; i += 2) {
      résultat.push(tampon.readUInt16BE(décalage + i).toString(16));
    }
    résultat = résultat.join(':');
    résultat = résultat.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    résultat = résultat.replace(/:{3,4}/, '::');
  }

  return résultat;
};

const regexIPv4 = /^(\d{1,3}\.){3,3}\d{1,3}$/;
const regexIPv6 = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.estFormatV4 = function (ip) {
  return regexIPv4.test(ip);
};

ip.estFormatV6 = function (ip) {
  return regexIPv6.test(ip);
};

function _normaliserFamille(famille) {
  if (famille === 4) {
    return 'ipv4';
  }
  if (famille === 6) {
    return 'ipv6';
  }
  return famille ? famille.toLowerCase() : 'ipv4';
}

ip.depuisLongueurPréfixe = function (longueurPréfixe, famille) {
  if (longueurPréfixe > 32) {
    famille = 'ipv6';
  } else {
    famille = _normaliserFamille(famille);
  }

  let longueur = 4;
  if (famille === 'ipv6') {
    longueur = 16;
  }
  const tampon = Buffer.alloc(longueur);

  for (let i = 0, n = tampon.length; i < n; ++i) {
    let bits = 8;
    if (longueurPréfixe < 8) {
      bits = longueurPréfixe;
    }
    longueurPréfixe -= bits;

    tampon[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.enChaîne(tampon);
};

ip.masque = function (adresse, masque) {
  adresse = ip.enTampon(adresse);
  masque = ip.enTampon(masque);

  const résultat = Buffer.alloc(Math.max(adresse.length, masque.length));

  // Même protocole - effectuer un ET bit à bit
  let i;
  if (adresse.length === masque.length) {
    for (i = 0; i < adresse.length; i++) {
      résultat[i] = adresse[i] & masque[i];
    }
  } else if (masque.length === 4) {
    // Adresse IPv6 et masque IPv4
    for (i = 0; i < masque.length; i++) {
      résultat[i] = adresse[adresse.length - 4 + i] & masque[i];
    }
  } else {
    // Masque IPv6 et adresse IPv4
    for (i = 0; i < résultat.length - 6; i++) {
      résultat[i] = 0;
    }

    // ::ffff:ipv4
    résultat[10] = 0xff;
    résultat[11] = 0xff;
    for (i = 0; i < adresse.length; i++) {
      résultat[i + 12] = adresse[i] & masque[i + 12];
    }
    i += 12;
  }
  for (; i < résultat.length; i++) {
    résultat[i] = 0;
  }

  return ip.enChaîne(résultat);
};

ip.cidr = function (chaîneCIDR) {
  const partiesCIDR = chaîneCIDR.split('/');

  const adresse = partiesCIDR[0];
  if (partiesCIDR.length !== 2) {
    throw new Error(`Sous-réseau CIDR invalide : ${adresse}`);
  }

  const masque = ip.depuisLongueurPréfixe(parseInt(partiesCIDR[1], 10));

  return ip.masque(adresse, masque);
};

ip.sousRéseau = function (adresse, masque) {
  const adresseRéseau = ip.depuisLongueur(ip.masque(adresse, masque));

  // Calculer la longueur du masque.
  const tamponMasque = ip.enTampon(masque);
  let longueurMasque = 0;

  for (let i = 0; i < tamponMasque.length; i++) {
    if (tamponMasque[i] === 0xff) {
      longueurMasque += 8;
    } else {
      let octet = tamponMasque[i] & 0xff;
      while (octet) {
        octet = (octet << 1) & 0xff;
        longueurMasque++;
      }
    }
  }

  const nombreAdresses = 2 ** (32 - longueurMasque);

  return {
    adresseRéseau: ip.depuisLongueur(adresseRéseau),
    premièreAdresse: nombreAdresses <= 2
      ? ip.depuisLongueur(adresseRéseau)
      : ip.depuisLongueur(adresseRéseau + 1),
    dernièreAdresse: nombreAdresses <= 2
      ? ip.depuisLongueur(adresseRéseau + nombreAdresses - 1)
      : ip.depuisLongueur(adresseRéseau + nombreAdresses - 2),
    adresseDiffusion: ip.depuisLongueur(adresseRéseau + nombreAdresses - 1),
    masqueSousRéseau: masque,
    longueurMasque: longueurMasque,
    numHosts: nombreAdresses <= 2
      ? nombreAdresses : nombreAdresses - 2,
    longueur: nombreAdresses,
    contient(autre) {
      return adresseRéseau === ip.depuisLongueur(ip.masque(autre, masque));
    },
  };
};

ip.cidrSousRéseau = function (chaîneCIDR) {
  const partiesCIDR = chaîneCIDR.split('/');

  const adresse = partiesCIDR[0];
  if (partiesCIDR.length !== 2) {
    throw new Error(`Sous-réseau CIDR invalide : ${adresse}`);
  }

  const masque = ip.depuisLongueurPréfixe(parseInt(partiesCIDR[1], 10));

  return ip.sousRéseau(adresse, masque);
};

ip.non = function (adresse) {
  const tampon = ip.enTampon(adresse);
  for (let i = 0; i < tampon.length; i++) {
    tampon[i] = 0xff ^ tampon[i];
  }
  return ip.enChaîne(tampon);
};

ip.ou = function (a, b) {
  a = ip.enTampon(a);
  b = ip.enTampon(b);

  // Même protocole
  if (a.length === b.length) {
    for (let i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.enChaîne(a);
  }

  // Protocoles mixtes
  let tampon = a;
  let autre = b;
  if (b.length > a.length) {
    tampon = b;
    autre = a;
  }

  const décalage = tampon.length - autre.length;
  for (let i = décalage; i < tampon.length; ++i) {
    tampon[i] |= autre[i - décalage];
  }

  return ip.enChaîne(tampon);
};

ip.estÉgal = function (a, b) {
  a = ip.enTampon(a);
  b = ip.enTampon(b);

  // Même protocole
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Échanger si nécessaire
  if (b.length === 4) {
    const temp = b;
    b = a;
    a = temp;
  }

  // a - IPv4, b - IPv6
  for (let i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  const mot = b.readUInt16BE(10);
  if (mot !== 0 && mot !== 0xffff) return false;

  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.estPrivée = function (adresse) {
  // Vérifier les adresses de loopback en premier
  if (ip.estLoopback(adresse)) {
    return true;
  }

  // S'assurer que l'adresse IPv4 est valide
  if (!ip.estFormatV6(adresse)) {
    const ipLong = ip.normaliserÀLongueur(adresse);
    if (ipLong < 0) {
      throw new Error('Adresse IPv4 invalide');
    }
    // Normaliser l'adresse pour les vérifications de plage privée
    adresse = ip.depuisLongueur(ipLong);
  }

  // Vérifier les plages privées
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(adresse)
    || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(adresse)
    || /^f[cd][0-9a-f]{2}:/i.test(adresse)
    || /^fe80:/i.test(adresse)
    || /^::1$/.test(adresse)
    || /^::$/.test(adresse);
};

ip.estPublique = function (adresse) {
  return !ip.estPrivée(adresse);
};

ip.estLoopback = function (adresse) {
  // Si l'adresse est une adresse IPv4 sous forme de numéro long (sans points ni deux-points), la convertir
  if (!/\./.test(adresse) && !/:/.test(adresse)) {
    adresse = ip.depuisLongueur(Number(adresse));
  }

  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(adresse)
    || /^0177\./.test(adresse)
    || /^0x7f\./i.test(adresse)
    || /^fe80::1$/i.test(adresse)
    || /^::1$/.test(adresse)
    || /^::$/.test(adresse);
};

ip.loopback = function (famille) {
  famille = _normaliserFamille(famille);

  if (famille !== 'ipv4' && famille !== 'ipv6') {
    throw new Error('La famille doit être ipv4 ou ipv6');
  }

  return famille === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

ip.adresse = function (nom, famille) {
  const interfaces = os.networkInterfaces();

  famille = _normaliserFamille(famille);

  if (nom && nom !== 'privée' && nom !== 'publique') {
    const res = interfaces[nom].filter((détails) => {
      const familleItem = _normaliserFamille(détails.family);
      return familleItem === famille;
    });
    if (res.length === 0) {
      return undefined;
    }
    return res[0].address;
  }

  const toutes = Object.keys(interfaces).map((nic) => {
    const adresses = interfaces[nic].filter((détails) => {
      détails.family = _normaliserFamille(détails.family);
      if (détails.family !== famille || ip.estLoopback(détails.address)) {
        return false;
      } if (!nom) {
        return true;
      }

      return nom === 'publique' ? ip.estPrivée(détails.address)
        : ip.estPublique(détails.address);
    });

    return adresses.length ? adresses[0].address : undefined;
  }).filter(Boolean);

  return !toutes.length ? ip.loopback(famille) : toutes[0];
};

ip.depuisLongueur = function (ip) {
  let ipLong = 0;
  const parties = ip.split('.');

  for (let i = 0; i < 4; i++) {
    ipLong |= parseInt(parties[i], 10) << ((3 - i) * 8);
  }
  return ipLong;
};
