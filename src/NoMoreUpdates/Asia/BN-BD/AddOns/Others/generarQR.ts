export async function তৈরিকরুনQR(টেক্সট: string): Promise<void> {
    const formData = new FormData();
    const ক্যাপচারকৃতচিত্র = (document.getElementById('capturedImage') as HTMLImageElement)?.src;

    // যদি টেক্সট প্রদান করা হয়, তবে আমরা সেটি সরাসরি ব্যবহার করব
    let চিত্রURL: string | null = টেক্সট;

    // যদি টেক্সট না থাকে, তবে আমরা চিত্র ক্যাপচার করা হয়েছে কিনা তা পরীক্ষা করব
    if (!টেক্সট && ক্যাপচারকৃতচিত্র) {
        const blob = await (await fetch(ক্যাপচারকৃতচিত্র)).blob();
        formData.append('image', blob, 'edited_image.png');

        // চিত্র আপলোড করা এবং URL পাওয়া
        try {
            const imgbbAPIKey = '141ab687962793e8771c1dc2e3f20c7f';
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, {
                method: 'POST',
                body: formData
            });

            const data: { data: { url: string } } = await response.json();
            চিত্রURL = data.data.url; // আপলোড করা চিত্রের URL পাওয়া
        } catch (error) {
            console.error('চিত্র আপলোড করতে ত্রুটি:', error);
            alert('চিত্র আপলোড করতে ত্রুটি হয়েছে।');
            return;
        }
    } else if (!টেক্সট) {
        alert('দয়া করে একটি টেক্সট প্রবেশ করুন অথবা QR কোড তৈরি করার আগে একটি চিত্র নির্বাচন করুন বা ক্যাপচার করুন।');
        return;
    }

    // চিত্র URL বা টেক্সট সহ QR কোড তৈরি করা
    try {
        const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(চিত্রURL)}`);
        
        const qrResult = document.getElementById('qrResult');
        if (qrResult) {
            qrResult.innerHTML = `<h2>জেনারেট করা QR কোড:</h2><img src="${qrResponse.url}" alt="QR কোড">`;
        }
    } catch (error) {
        console.error('QR কোড তৈরি করতে ত্রুটি:', error);
        alert('QR কোড তৈরি করতে ত্রুটি হয়েছে।');
    }
}
