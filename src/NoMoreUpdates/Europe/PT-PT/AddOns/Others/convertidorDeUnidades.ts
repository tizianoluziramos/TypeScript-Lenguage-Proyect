import * as readline from 'readline';

// Funções para conversão
export const conversoes = {
    // Comprimento
    metrosACentimetros: (metros: number) => metros * 100,
    centimetrosAMetros: (centimetros: number) => centimetros / 100,

    // Peso
    quilosALibras: (quilos: number) => quilos * 2.20462,
    librasAQuilos: (libras: number) => libras / 2.20462,

    // Temperatura
    celsiusAFahrenheit: (celsius: number) => (celsius * 9/5) + 32,
    fahrenheitACelsius: (fahrenheit: number) => (fahrenheit - 32) * 5/9
};

// Interface de linha de comando
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function mostrarMenu(): void {
    console.log('Selecione uma opção de conversão:');
    console.log('1. Metros para Centímetros');
    console.log('2. Centímetros para Metros');
    console.log('3. Quilos para Libras');
    console.log('4. Libras para Quilos');
    console.log('5. Celsius para Fahrenheit');
    console.log('6. Fahrenheit para Celsius');
    rl.question('Selecione uma opção (1-6): ', (opcao) => {
        rl.question('Digite o valor a converter: ', (valorStr) => {
            const valor = parseFloat(valorStr);
            realizarConversao(parseInt(opcao), valor);
            rl.close();
        });
    });    
}

export function realizarConversao(opcao: number, valor: number): void {
    let resultado: number;

    switch (opcao) {
        case 1:
            resultado = conversoes.metrosACentimetros(valor);
            console.log(`${valor} metros são ${resultado} centímetros`);
            break;
        case 2:
            resultado = conversoes.centimetrosAMetros(valor);
            console.log(`${valor} centímetros são ${resultado} metros`);
            break;
        case 3:
            resultado = conversoes.quilosALibras(valor);
            console.log(`${valor} quilos são ${resultado} libras`);
            break;
        case 4:
            resultado = conversoes.librasAQuilos(valor);
            console.log(`${valor} libras são ${resultado} quilos`);
            break;
        case 5:
            resultado = conversoes.celsiusAFahrenheit(valor);
            console.log(`${valor} graus Celsius são ${resultado} graus Fahrenheit`);
            break;
        case 6:
            resultado = conversoes.fahrenheitACelsius(valor);
            console.log(`${valor} graus Fahrenheit são ${resultado} graus Celsius`);
            break;
        default:
            console.log('Opção não válida');
            break;
    }
}
