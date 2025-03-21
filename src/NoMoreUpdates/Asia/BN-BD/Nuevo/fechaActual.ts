export function তারিখএবংসময়(দেশ: string = "মার্কিন যুক্তরাষ্ট্র"): string {
    // দেশের জন্য সময় অঞ্চল ম্যাপিং
    const timeZones: Record<string, string> = {
        "আর্জেন্টিনা": "America/Argentina/Buenos_Aires",
        "মেক্সিকো": "America/Mexico_City",
        "স্পেন": "Europe/Madrid",
        "মার্কিন যুক্তরাষ্ট্র": "America/New_York", // পূর্ব সময়
        "ভারত": "Asia/Kolkata",
        "জাপান": "Asia/Tokyo",
        "যুক্তরাজ্য": "Europe/London",
        // প্রয়োজন হলে আরও দেশ এবং সময় অঞ্চল যোগ করুন
    };

    const timeZone = timeZones[দেশ];

    if (!timeZone) {
        throw new Error(`দেশের জন্য সময় অঞ্চল পাওয়া যায়নি: ${দেশ}`);
    }

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return new Intl.DateTimeFormat("bn-BD", options).format(now);
}
