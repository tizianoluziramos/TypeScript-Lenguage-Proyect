import HID from 'node-hid';

interface Appareil {
  vendorId?: number;
  productId?: number;
  path?: string;
  serialNumber?: string;
  manufacturer?: string;
  product?: string;
  release?: number;
  interface?: number;
  usagePage?: number;
  usage?: number;
}

export const ManetteEstInfrastructure = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Lister les appareils connectés
      const appareils: Appareil[] = HID.devices();

      // Filtrer les appareils par le nom du produit
      const manettes = appareils.filter((d: Appareil) => {
        return d.product?.toLowerCase().includes('usb joystick');
      });

      if (manettes.length === 0) {
        return resolve('Aucun contrôleur détecté.');
      }

      // Se connecter au premier contrôleur détecté
      const appareilSélectionné = manettes[0];
      if (appareilSélectionné.path) {
        const device = new HID.HID(appareilSélectionné.path);

        device.on('data', (data: Buffer) => {
          const joystickData = data.toString('hex');
          resolve(joystickData);  // Retourner les données reçues
        });

        device.on('error', (err) => {
          reject(`Erreur de l'appareil : ${err}`);
        });
      } else {
        resolve('Impossible de se connecter à l\'appareil sélectionné.');
      }
    } catch (err) {
      reject(`Erreur au démarrage : ${err}`);
    }
  });
};

export async function ManetteEst(): Promise<string> {
  try {
    const result = await ManetteEstInfrastructure(); // Attendre que la promesse soit résolue
    return result;  // Retourner le résultat
  } catch (error) {
    return `Erreur : ${error}`; // Capturer l'erreur et la retourner
  }
}
