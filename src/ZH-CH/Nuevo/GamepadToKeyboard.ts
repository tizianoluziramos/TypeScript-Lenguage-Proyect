import HID from 'node-hid';

// 定义设备接口
interface 设备 {
  供应商ID?: number;  // vendorId
  产品ID?: number;    // productId
  路径?: string;      // path
  序列号?: string;    // serialNumber
  制造商?: string;    // manufacturer
  产品?: string;      // product
  版本号?: number;    // release
  接口?: number;      // interface
  使用页面?: number;  // usagePage
  使用?: number;      // usage
}

export const 游戏手柄基础设施 = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // 列出连接的设备
      const devices: 设备[] = HID.devices();

      // 根据产品名称筛选设备
      const controllers = devices.filter((d: 设备) => {
        return d.产品?.toLowerCase().includes('usb joystick');
      });

      if (controllers.length === 0) {
        return resolve('未检测到控制器。');
      }

      // 连接到第一个检测到的控制器
      const selectedDevice = controllers[0];
      if (selectedDevice.路径) {
        const device = new HID.HID(selectedDevice.路径);

        device.on('data', (data: Buffer) => {
          const joystickData = data.toString('hex');
          resolve(joystickData);  // 返回接收到的数据
        });

        device.on('error', (err) => {
          reject(`设备错误: ${err}`);
        });
      } else {
        resolve('无法连接到选定的设备。');
      }
    } catch (err) {
      reject(`初始化错误: ${err}`);
    }
  });
};

export async function 游戏手柄(): Promise<string> {
  try {
    const result = await 游戏手柄基础设施(); // 等待承诺解决
    return result;  // 返回结果
  } catch (error) {
    return `错误: ${error}`; // 捕获错误并返回
  }
}
