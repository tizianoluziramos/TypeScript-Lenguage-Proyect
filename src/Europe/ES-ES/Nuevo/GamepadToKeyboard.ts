import HID from 'node-hid';

interface Device {
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

export const GamepadEsInfraestructure = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Listar dispositivos conectados
      const devices: Device[] = HID.devices();

      // Filtrar dispositivos por el nombre del producto
      const controllers = devices.filter((d: Device) => {
        return d.product?.toLowerCase().includes('usb joystick');
      });

      if (controllers.length === 0) {
        return resolve('No se detectaron controladores.');
      }

      // Conectar al primer controlador detectado
      const selectedDevice = controllers[0];
      if (selectedDevice.path) {
        const device = new HID.HID(selectedDevice.path);

        device.on('data', (data: Buffer) => {
          const joystickData = data.toString('hex');
          resolve(joystickData);  // Devolver los datos recibidos
        });

        device.on('error', (err) => {
          reject(`Error del dispositivo: ${err}`);
        });
      } else {
        resolve('No se pudo conectar al dispositivo seleccionado.');
      }
    } catch (err) {
      reject(`Error al iniciar: ${err}`);
    }
  });
};

export async function GamepadEs(): Promise<string> {
  try {
    const result = await GamepadEsInfraestructure(); // Espera a que la promesa se resuelva
    return result;  // Devuelve el resultado
  } catch (error) {
    return `Error: ${error}`; // Captura el error y lo devuelve
  }
}