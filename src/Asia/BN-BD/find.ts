export function অবজেক্ট_খোঁজুন<T>(array: T[], মানদণ্ড: (বস্তু: T) => boolean): T | undefined {
    return array.find(মানদণ্ড);
}
