const SFTPClient = require('ssh2-sftp-client');

export async function SFTP_যোগ_দান(সার্ভার: string, পোর্ট: number, ব্যবহারকারী: string, পাসওয়ার্ড: string, ডাউনলোড_পথ: string) {
    const sftp = new SFTPClient();

    const config = {
        host: সার্ভার,
        port: পোর্ট, // অথবা আপনি যে পোর্টটি ব্যবহার করছেন তা
        username: ব্যবহারকারী,
        password: পাসওয়ার্ড
    };

    try {
        await sftp.connect(config);
        console.log('SFTP সার্ভারে সংযুক্ত হয়েছে');

        // মূল ডিরেক্টরির ফাইলের তালিকা দেখান
        const lista = await sftp.list('/');
        console.log('মূল ডিরেক্টরিতে ফাইলসমূহ:', lista);

        // একটি ফাইল ডাউনলোড করুন
        const remoteFilePath = ডাউনলোড_পথ;
        const localFilePath = './ফাইল_ডাউনলোড_হয়েছে.txt';
        await sftp.get(remoteFilePath, localFilePath);
        console.log(`ফাইল ডাউনলোড হয়েছে: ${localFilePath}`);

    } catch (error) {
        console.error('SFTP সংযোগে ত্রুটি:', error);
    } finally {
        sftp.end();
    }
}
