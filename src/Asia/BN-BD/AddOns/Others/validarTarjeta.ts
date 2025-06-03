export function বৈধকরণকার্ড(কার্ডনম্বর: string | number | (string | number)[]): boolean {
    if (typeof কার্ডনম্বর === 'string' || typeof কার্ডনম্বর === 'number') {
        কার্ডনম্বর = [কার্ডনম্বর];
    }

    for (const কার্ড of কার্ডনম্বর) {
        const কার্ডবিনাশর = String(কার্ড).replace(/\s|-/g, '');

        if (!/^\d+$/.test(কার্ডবিনাশর)) {
            return false;
        }

        let যোগফল = 0;
        let পালটা = false;

        for (let i = কার্ডবিনাশর.length - 1; i >= 0; i--) {
            let অঙ্ক = parseInt(কার্ডবিনাশর.charAt(i), 10);

            if (পালটা) {
                অঙ্ক *= 2;
                if (অঙ্ক > 9) {
                    অঙ্ক -= 9;
                }
            }

            যোগফল += অঙ্ক; 
            পালটা = !পালটা;
        }

        if (যোগফল % 10 !== 0) {
            return false;
        }
    }

    return true;
}
