export function পালিনড্রোম(শব্দ: string): boolean {
    let বিপরীত = শব্দ.split("").reverse().join("");
    if (বিপরীত === শব্দ) {
        return true;            
    } 
    return false;
}
