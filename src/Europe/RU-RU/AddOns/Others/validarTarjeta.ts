export function validarКарта(номерКарты: string | number | (string | number)[]): boolean {
    if (typeof номерКарты === 'string' || typeof номерКарты === 'number') {
        номерКарты = [номерКарты];
    }

    for (const карта of номерКарты) {
        const картаБезПробелов = String(карта).replace(/\s|-/g, '');

        if (!/^\d+$/.test(картаБезПробелов)) {
            return false;
        }

        let сумма = 0;
        let чередование = false;

        for (let i = картаБезПробелов.length - 1; i >= 0; i--) {
            let цифра = parseInt(картаБезПробелов.charAt(i), 10);

            if (чередование) {
                цифра *= 2;
                if (цифра > 9) {
                    цифра -= 9;
                }
            }

            сумма += цифра;
            чередование = !чередование;
        }

        if (сумма % 10 !== 0) {
            return false;
        }
    }

    return true;
}
