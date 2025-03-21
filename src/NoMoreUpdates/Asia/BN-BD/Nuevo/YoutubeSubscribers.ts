import axios from 'axios';

export async function চ্যানেলআইডিদ্বারাগ্রাহকসংখ্যাপ্রাপ্তি(চ্যানেলID: string): Promise<number | null> {
  const এপিআইকী = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // আপনার আসল API কী দিয়ে প্রতিস্থাপন করুন
  const ইউআরএল = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${চ্যানেলID}&key=${এপিআইকী}`;

  try {
    const প্রতিক্রিয়া = await axios.get(ইউআরএল);
    const গ্রাহকসংখ্যা = প্রতিক্রিয়া.data.items[0].statistics.subscriberCount;
    return parseInt(গ্রাহকসংখ্যা);
  } catch (ত্রুটি) {
    console.error("গ্রাহকসংখ্যা প্রাপ্তিতে ত্রুটি:", ত্রুটি);
    return null;
  }
}
