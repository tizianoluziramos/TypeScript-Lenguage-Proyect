import HID from 'node-hid';

interface Gerät {
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

export const GamepadEsInfrastruktur = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Listet verbundene Geräte auf
      const geräte: Gerät[] = HID.devices();

      // Filtert Geräte nach dem Produktnamen
      const controller = geräte.filter((d: Gerät) => {
        return d.product?.toLowerCase().includes('usb joystick');
      });

      if (controller.length === 0) {
        return resolve('Keine Controller erkannt.');
      }

      // Verbindet sich mit dem ersten erkannten Controller
      const ausgewähltesGerät = controller[0];
      if (ausgewähltesGerät.path) {
        const device = new HID.HID(ausgewähltesGerät.path);

        device.on('data', (data: Buffer) => {
          const joystickDaten = data.toString('hex');
          resolve(joystickDaten);  // Gibt die empfangenen Daten zurück
        });

        device.on('error', (err) => {
          reject(`Gerätefehler: ${err}`);
        });
      } else {
        resolve('Es konnte keine Verbindung zum ausgewählten Gerät hergestellt werden.');
      }
    } catch (err) {
      reject(`Fehler beim Starten: ${err}`);
    }
  });
};

export async function GamepadEs(): Promise<string> {
  try {
    const result = await GamepadEsInfrastruktur(); // Wartet, bis das Versprechen erfüllt wird
    return result;  // Gibt das Ergebnis zurück
  } catch (error) {
    return `Fehler: ${error}`; // Fängt den Fehler ab und gibt ihn zurück
  }
}
