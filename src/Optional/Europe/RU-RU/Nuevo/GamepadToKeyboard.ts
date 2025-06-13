import HID from 'node-hid';

interface Устройство {
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

export const GamepadRuИнфраструктура = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Список подключенных устройств
      const устройства: Устройство[] = HID.devices();

      // Фильтрация устройств по имени продукта
      const контроллеры = устройства.filter((d: Устройство) => {
        return d.product?.toLowerCase().includes('usb joystick');
      });

      if (контроллеры.length === 0) {
        return resolve('Контроллеры не обнаружены.');
      }

      // Подключение к первому обнаруженному контроллеру
      const выбранноеУстройство = контроллеры[0];
      if (выбранноеУстройство.path) {
        const устройство = new HID.HID(выбранноеУстройство.path);

        устройство.on('data', (data: Buffer) => {
          const данныеДжойстика = data.toString('hex');
          resolve(данныеДжойстика);  // Возвращает полученные данные
        });

        устройство.on('error', (err) => {
          reject(`Ошибка устройства: ${err}`);
        });
      } else {
        resolve('Не удалось подключиться к выбранному устройству.');
      }
    } catch (err) {
      reject(`Ошибка при запуске: ${err}`);
    }
  });
};

export async function GamepadRu(): Promise<string> {
  try {
    const результат = await GamepadRuИнфраструктура(); // Ожидание разрешения промиса
    return результат;  // Возвращает результат
  } catch (error) {
    return `Ошибка: ${error}`; // Поймать ошибку и вернуть её
  }
}
