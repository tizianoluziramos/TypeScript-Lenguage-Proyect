// ক্যামেরা এবং ভিডিও অ্যাক্সেস শুরু করার ফাংশন
export async function ক্যামেরা_এবং_ভিডিও_আরম্ভ_করুন() {
    try {
        // ক্যামেরায় অ্যাক্সেস চাওয়া
        const স্ট্রীম = await navigator.mediaDevices.getUserMedia({ video: true });

        // স্ট্রীম থেকে প্রথম ভিডিও ট্র্যাক পেতে
        const ভিডিও_পিষ্টা = স্ট্রীম.getVideoTracks()[0];

        console.log('ভিডিও পিষ্টা:', ভিডিও_পিষ্টা);

        // ভিডিও পিষ্টার তথ্য দেখানো
        console.log('পিষ্টার আইডি:', ভিডিও_পিষ্টা.id);
        console.log('পিষ্টার লেবেল:', ভিডিও_পিষ্টা.label);
        console.log('পিষ্টাটি সক্রিয় কি?', ভিডিও_পিষ্টা.enabled);
        
        // একটি <video> উপাদানে ভিডিও দেখানো
        const ভিডিও_উপাদান = document.querySelector('video');
        if (ভিডিও_উপাদান) {
            ভিডিও_উপাদান.srcObject = স্ট্রীম;
            ভিডিও_উপাদান.play();
        }

    } catch (error) {
        console.error('ক্যামেরায় অ্যাক্সেসে সমস্যা:', error);
    }
}
