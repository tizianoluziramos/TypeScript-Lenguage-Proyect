// লুপসমূহ.ts
export function লুপসমূহ(শুরু: number, শর্ত: (i: number) => boolean, বৃদ্ধি: (i: number) => number, ব্লক: (i: number) => void) {
    for (let i = শুরু; শর্ত(i); i = বৃদ্ধি(i)) {
        ব্লক(i);
    }
}
