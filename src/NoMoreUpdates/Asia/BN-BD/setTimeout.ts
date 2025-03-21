// টাইমার.ts
export function টাইমআউটনির্ধারণ(ms: number, ব্লক: () => void) {
    setTimeout(ব্লক, ms);
}
