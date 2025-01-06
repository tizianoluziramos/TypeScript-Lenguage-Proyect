"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rl = exports.conversiones = void 0;
exports.mostrarMenu = mostrarMenu;
exports.realizarConversion = realizarConversion;
const readline = __importStar(require("readline"));
// Funciones para la conversión
exports.conversiones = {
    // Longitud
    metrosACentimetros: (metros) => metros * 100,
    centimetrosAMetros: (centimetros) => centimetros / 100,
    // Peso
    kilosAlibras: (kilos) => kilos * 2.20462,
    librasAKilos: (libras) => libras / 2.20462,
    // Temperatura
    celsiusAFahrenheit: (celsius) => (celsius * 9 / 5) + 32,
    fahrenheitACelsius: (fahrenheit) => (fahrenheit - 32) * 5 / 9
};
// Interfaz de línea de comandos
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log('Selecciona una opción de conversión:');
    console.log('1. Metros a Centímetros');
    console.log('2. Centímetros a Metros');
    console.log('3. Kilos a Libras');
    console.log('4. Libras a Kilos');
    console.log('5. Celsius a Fahrenheit');
    console.log('6. Fahrenheit a Celsius');
    exports.rl.question('Selecciona una opción (1-6): ', (opcion) => {
        exports.rl.question('Ingresa el valor a convertir: ', (valorStr) => {
            const valor = parseFloat(valorStr);
            realizarConversion(parseInt(opcion), valor);
            exports.rl.close();
        });
    });
}
function realizarConversion(opcion, valor) {
    let resultado;
    switch (opcion) {
        case 1:
            resultado = exports.conversiones.metrosACentimetros(valor);
            console.log(`${valor} metros son ${resultado} centímetros`);
            break;
        case 2:
            resultado = exports.conversiones.centimetrosAMetros(valor);
            console.log(`${valor} centímetros son ${resultado} metros`);
            break;
        case 3:
            resultado = exports.conversiones.kilosAlibras(valor);
            console.log(`${valor} kilos son ${resultado} libras`);
            break;
        case 4:
            resultado = exports.conversiones.librasAKilos(valor);
            console.log(`${valor} libras son ${resultado} kilos`);
            break;
        case 5:
            resultado = exports.conversiones.celsiusAFahrenheit(valor);
            console.log(`${valor} grados Celsius son ${resultado} grados Fahrenheit`);
            break;
        case 6:
            resultado = exports.conversiones.fahrenheitACelsius(valor);
            console.log(`${valor} grados Fahrenheit son ${resultado} grados Celsius`);
            break;
        default:
            console.log('Opción no válida');
            break;
    }
}
