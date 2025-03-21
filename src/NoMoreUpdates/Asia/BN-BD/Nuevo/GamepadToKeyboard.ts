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

export const গেমপ্যাডইনফ্রাস্ট্রাকচার = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // সংযুক্ত ডিভাইসগুলি তালিকাভুক্ত করুন
      const devices: Device[] = HID.devices();

      // পণ্য নাম দ্বারা ডিভাইস ফিল্টার করুন
      const controllers = devices.filter((d: Device) => {
        return d.product?.toLowerCase().includes('usb joystick');
      });

      if (controllers.length === 0) {
        return resolve('কোনও কন্ট্রোলার সনাক্ত হয়নি।');
      }

      // প্রথম সনাক্তকৃত কন্ট্রোলারে সংযোগ করুন
      const selectedDevice = controllers[0];
      if (selectedDevice.path) {
        const device = new HID.HID(selectedDevice.path);

        device.on('data', (data: Buffer) => {
          const joystickData = data.toString('hex');
          resolve(joystickData);  // প্রাপ্ত ডেটা ফেরত দিন
        });

        device.on('error', (err) => {
          reject(`ডিভাইস ত্রুটি: ${err}`);
        });
      } else {
        resolve('নির্বাচিত ডিভাইসে সংযোগ করা যায়নি।');
      }
    } catch (err) {
      reject(`শুরু করতে ত্রুটি: ${err}`);
    }
  });
};

export async function গেমপ্যাডইস(): Promise<string> {
  try {
    const result = await গেমপ্যাডইনফ্রাস্ট্রাকচার(); // প্রতিশ্রুতি পূর্ণ হওয়ার জন্য অপেক্ষা করুন
    return result;  // ফলাফল ফেরত দিন
  } catch (error) {
    return `ত্রুটি: ${error}`; // ত্রুটি ধরা এবং ফেরত দিন
  }
}
