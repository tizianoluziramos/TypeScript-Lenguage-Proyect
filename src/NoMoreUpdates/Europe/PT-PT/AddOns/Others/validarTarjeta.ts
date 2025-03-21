export function validarCartao(numeroCartao: string | number | (string | number)[]): boolean {
    if (typeof numeroCartao === 'string' || typeof numeroCartao === 'number') {
        numeroCartao = [numeroCartao];
    }

    for (const cartao of numeroCartao) {
        const cartaoSemEspacos = String(cartao).replace(/\s|-/g, '');

        if (!/^\d+$/.test(cartaoSemEspacos)) {
            return false;
        }

        let soma = 0;
        let alternar = false;

        for (let i = cartaoSemEspacos.length - 1; i >= 0; i--) {
            let digito = parseInt(cartaoSemEspacos.charAt(i), 10);

            if (alternar) {
                digito *= 2;
                if (digito > 9) {
                    digito -= 9;
                }
            }

            soma += digito; 
            alternar = !alternar;
        }

        if (soma % 10 !== 0) {
            return false;
        }
    }

    return true;
}
