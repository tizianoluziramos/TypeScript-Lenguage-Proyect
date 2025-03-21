import fs from 'fs';

interface প্রশ্নউত্তর {
  ইনপুট: string;
  আউটপুট: string;
}

export function সাধারণীকৃতটেক্সট(টেক্সট: string): string {
  return টেক্সট
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, ' ')
    .trim();
}

export function প্রশিক্ষণমূলকপদ্ধতি(প্রশ্নউত্তর: প্রশ্নউত্তর[]): { ইনপুট: string; আউটপুট: string }[] {
  const প্রশিক্ষণ = প্রশ্নউত্তর.map(আইটেম => ({
    ইনপুট: সাধারণীকৃতটেক্সট(আইটেম.ইনপুট),
    আউটপুট: আইটেম.আউটপুট
  }));

  return প্রশিক্ষণ;
}

export function জিজ্ঞাসাRed(ইনপুটটেক্সট: string, পথফাইল: string): Promise<string> {
  return new Promise((সমাধান, প্রত্যাখ্যান) => {
    fs.readFile(পথফাইল, 'utf8', (ত্রুটি, ডেটা) => {
      if (ত্রুটি) {
        প্রত্যাখ্যান(`ফাইল পড়তে ত্রুটি ${পথফাইল}: ${ত্রুটি}`);
        return;
      }

      const প্রশ্নউত্তর: প্রশ্নউত্তর[] = JSON.parse(ডেটা);

      const নেটওয়ার্ক = প্রশিক্ষণমূলকপদ্ধতি(প্রশ্নউত্তর);

      console.log("স্নায়ু নেটওয়ার্ক প্রশিক্ষিত।");

      const টেক্সটসাধারণীকৃত = সাধারণীকৃতটেক্সট(ইনপুটটেক্সট);

      const উত্তর = নেটওয়ার্ক.find(আইটেম => আইটেম.ইনপুট === টেক্সটসাধারণীকৃত);

      if (উত্তর) {
        সমাধান(উত্তর.আউটপুট);
      } else {
        সমাধান("দুঃখিত, আমি সেই প্রশ্ন বুঝতে পারছি না।");
      }
    });
  });
}

export async function জিজ্ঞাসাAGPT(ইনপুটটেক্সট: string, পথফাইল: string): Promise<string> {
  try {
    const উত্তর = await জিজ্ঞাসাRed(ইনপুটটেক্সট, পথফাইল);
    return উত্তর;
  } catch (ত্রুটি) {
    return (ত্রুটি as string);  // নিশ্চিত করে যে ত্রুটি একটি স্ট্রিং
  }
}
