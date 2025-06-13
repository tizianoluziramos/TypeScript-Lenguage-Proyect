// arrayUtil.ts
export function মানচিত্রকরুন<T, U>(array: T[], fn: (উপাদান: T) => U): U[] {
    return array.map(fn);
}

export function ফিল্টারকরুন<T>(array: T[], fn: (উপাদান: T) => boolean): T[] {
    return array.filter(fn);
}

export function হ্রাসকরুন<T, U>(array: T[], fn: (একিউমুলেটর: U, উপাদান: T) => U, প্রাথমিক: U): U {
    return array.reduce(fn, প্রাথমিক);
}

export function খুঁজুন<T>(array: T[], fn: (উপাদান: T) => boolean): T | undefined {
    return array.find(fn);
}

export function খুঁজুনসূচক<T>(array: T[], fn: (উপাদান: T) => boolean): number {
    return array.findIndex(fn);
}

export function অন্তর্ভুক্তকরুন<T>(array: T[], উপাদান: T): boolean {
    return array.includes(উপাদান);
}

export function একত্রিতকরুন<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

export function ভাগকরুন<T>(array: T[], আকার: number): T[][] {
    const ফলাফল: T[][] = [];
    for (let i = 0; i < array.length; i += আকার) {
        ফলাফল.push(array.slice(i, i + আকার));
    }
    return ফলাফল;
}

export function সাজান<T>(array: T[], তুলনাকারী?: (a: T, b: T) => number): T[] {
    return array.slice().sort(তুলনাকারী);
}

export function উলটান<T>(array: T[]): T[] {
    return array.slice().reverse();
}

export function একত্রিত<T>(array: T[], ...উপাদানসমূহ: T[]): T[] {
    return array.concat(...উপাদানসমূহ);
}

export function ঠেলুন<T>(array: T[], ...উপাদানসমূহ: T[]): number {
    return array.push(...উপাদানসমূহ);
}

export function মুছুন<T>(array: T[], উপাদান: T): boolean {
    const সূচক = array.indexOf(উপাদান);
    if (সূচক !== -1) {
        array.splice(সূচক, 1);
        return true;
    }
    return false;
}

export function কাটুন<T>(array: T[], শুরু: number, পরিমাণ?: number): T[] {
    return array.slice(শুরু, পরিমাণ !== undefined ? শুরু + পরিমাণ : undefined);
}

export function foreach<T>(array: T[], fn: (উপাদান: T) => void): void {
    array.forEach(fn);
}
