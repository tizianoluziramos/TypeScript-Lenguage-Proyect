export function validarTarjeta(numeroTarjeta: string | number | (string | number)[]): boolean {
    if (typeof numeroTarjeta === 'string' || typeof numeroTarjeta === 'number') {
        numeroTarjeta = [numeroTarjeta];
    }

    for (const tarjeta of numeroTarjeta) {
        const tarjetaSinEspacios = String(tarjeta).replace(/\s|-/g, '');

        if (!/^\d+$/.test(tarjetaSinEspacios)) {
            return false;
        }

        let suma = 0;
        let alternar = false;

        for (let i = tarjetaSinEspacios.length - 1; i >= 0; i--) {
            let digito = parseInt(tarjetaSinEspacios.charAt(i), 10);

            if (alternar) {
                digito *= 2;
                if (digito > 9) {
                    digito -= 9;
                }
            }

            suma += digito; 
            alternar = !alternar;
        }

        if (suma % 10 !== 0) {
            return false;
        }
    }

    return true;
}