// таймер.ts
export function установитьTimeout(ms: number, блок: () => void) {
    setTimeout(блок, ms);
}
