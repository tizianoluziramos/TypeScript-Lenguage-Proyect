export function কেস(মান: any, ...বিকল্প: { শর্ত: any, ব্লক: () => void }[]) {
    for (const { শর্ত, ব্লক } of বিকল্প) {
        if (মান === শর্ত) {
            ব্লক();
            return;
        }
    }
}
