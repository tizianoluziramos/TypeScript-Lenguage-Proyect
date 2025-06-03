import HID from 'node-hid';

interface Dispositivo {
  vendorId?: number;
  productId?: number;
  path?: string;
  serialNumber?: string;
  fabricante?: string;
  produto?: string;
  release?: number;
  interface?: number;
  usagePage?: number;
  usage?: number;
}

export const InfraestruturaGamepadPt = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Listar dispositivos conectados
      const dispositivos: Dispositivo[] = HID.devices();

      // Filtrar dispositivos por o nome do produto
      const controladores = dispositivos.filter((d: Dispositivo) => {
        return d.produto?.toLowerCase().includes('usb joystick');
      });

      if (controladores.length === 0) {
        return resolve('Nenhum controlador detectado.');
      }

      // Conectar ao primeiro controlador detectado
      const dispositivoSelecionado = controladores[0];
      if (dispositivoSelecionado.path) {
        const dispositivo = new HID.HID(dispositivoSelecionado.path);

        dispositivo.on('data', (dados: Buffer) => {
          const dadosJoystick = dados.toString('hex');
          resolve(dadosJoystick);  // Retornar os dados recebidos
        });

        dispositivo.on('error', (err) => {
          reject(`Erro do dispositivo: ${err}`);
        });
      } else {
        resolve('Não foi possível conectar ao dispositivo selecionado.');
      }
    } catch (err) {
      reject(`Erro ao iniciar: ${err}`);
    }
  });
};

export async function GamepadPt(): Promise<string> {
  try {
    const resultado = await InfraestruturaGamepadPt(); // Espera a promessa ser resolvida
    return resultado;  // Retorna o resultado
  } catch (error) {
    return `Erro: ${error}`; // Captura o erro e retorna
  }
}
