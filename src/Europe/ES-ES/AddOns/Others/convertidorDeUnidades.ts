import * as readline from 'readline';

// Funciones para la conversión
export const conversiones = {
    // Longitud
    metrosACentimetros: (metros: number) => metros * 100,
    centimetrosAMetros: (centimetros: number) => centimetros / 100,

    // Peso
    kilosAlibras: (kilos: number) => kilos * 2.20462,
    librasAKilos: (libras: number) => libras / 2.20462,

    // Temperatura
    celsiusAFahrenheit: (celsius: number) => (celsius * 9/5) + 32,
    fahrenheitACelsius: (fahrenheit: number) => (fahrenheit - 32) * 5/9
};

// Interfaz de línea de comandos
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function mostrarMenu(): void {
    console.log('Selecciona una opción de conversión:');
    console.log('1. Metros a Centímetros');
    console.log('2. Centímetros a Metros');
    console.log('3. Kilos a Libras');
    console.log('4. Libras a Kilos');
    console.log('5. Celsius a Fahrenheit');
    console.log('6. Fahrenheit a Celsius');
    rl.question('Selecciona una opción (1-6): ', (opcion) => {
        rl.question('Ingresa el valor a convertir: ', (valorStr) => {
            const valor = parseFloat(valorStr);
            realizarConversion(parseInt(opcion), valor);
            rl.close();
        });
    });    
}

export function realizarConversion(opcion: number, valor: number): void {
    let resultado: number;

    switch (opcion) {
        case 1:
            resultado = conversiones.metrosACentimetros(valor);
            console.log(`${valor} metros son ${resultado} centímetros`);
            break;
        case 2:
            resultado = conversiones.centimetrosAMetros(valor);
            console.log(`${valor} centímetros son ${resultado} metros`);
            break;
        case 3:
            resultado = conversiones.kilosAlibras(valor);
            console.log(`${valor} kilos son ${resultado} libras`);
            break;
        case 4:
            resultado = conversiones.librasAKilos(valor);
            console.log(`${valor} libras son ${resultado} kilos`);
            break;
        case 5:
            resultado = conversiones.celsiusAFahrenheit(valor);
            console.log(`${valor} grados Celsius son ${resultado} grados Fahrenheit`);
            break;
        case 6:
            resultado = conversiones.fahrenheitACelsius(valor);
            console.log(`${valor} grados Fahrenheit son ${resultado} grados Celsius`);
            break;
        default:
            console.log('Opción no válida');
            break;
    }
}