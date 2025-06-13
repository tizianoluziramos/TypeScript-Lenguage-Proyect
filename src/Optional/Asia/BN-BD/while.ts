// লুপসমূহ.ts
export function যখন(শর্ত: () => boolean, ব্লক: () => void) {
    while (শর্ত()) {
        ব্লক();
    }
}
