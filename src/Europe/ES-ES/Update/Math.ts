// Definimos el módulo `Matematicas` como una alternativa en español al objeto `Math`.
export namespace Matematicas {
    // Constante para la base del logaritmo natural
    export const E: number = Math.E;

    // Constante para el valor de PI
    export const PI: number = Math.PI;

    // Función para calcular el valor absoluto de un número
    export function absoluto(valor: number): number {
        return Math.abs(valor);
    }

    // Función para calcular el arcocoseno (arccos) de un número
    export function arcocoseno(valor: number): number {
        return Math.acos(valor);
    }

    // Función para calcular el arcoseno (arcsin) de un número
    export function arcoseno(valor: number): number {
        return Math.asin(valor);
    }

    // Función para calcular la arcotangente (arctan) de un número
    export function arcotangente(valor: number): number {
        return Math.atan(valor);
    }

    // Función para calcular la arcotangente de dos números (arctan2)
    export function arcotangente2(y: number, x: number): number {
        return Math.atan2(y, x);
    }

    // Función para redondear hacia arriba
    export function redondearArriba(valor: number): number {
        return Math.ceil(valor);
    }

    // Función para calcular el coseno de un número
    export function coseno(valor: number): number {
        return Math.cos(valor);
    }

    // Función para calcular el seno de un número
    export function seno(valor: number): number {
        return Math.sin(valor);
    }

    // Función para calcular la tangente de un número
    export function tangente(valor: number): number {
        return Math.tan(valor);
    }

    // Función para redondear hacia abajo
    export function redondearAbajo(valor: number): number {
        return Math.floor(valor);
    }

    // Función para redondear un número al entero más cercano
    export function redondear(valor: number): number {
        return Math.round(valor);
    }

    // Función para calcular la raíz cuadrada de un número
    export function raizCuadrada(valor: number): number {
        return Math.sqrt(valor);
    }

    // Función para elevar un número a una potencia
    export function potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Función para calcular el logaritmo natural (base e)
    export function logaritmoNatural(valor: number): number {
        return Math.log(valor);
    }

    // Función para generar un número aleatorio entre 0 y 1
    export function aleatorio(): number {
        return Math.random();
    }

    // Función para calcular el máximo de un conjunto de números
    export function maximo(...valores: number[]): number {
        return Math.max(...valores);
    }

    // Función para calcular el mínimo de un conjunto de números
    export function minimo(...valores: number[]): number {
        return Math.min(...valores);
    }

    // Función para truncar un número (eliminar los decimales)
    export function truncar(valor: number): number {
        return Math.trunc(valor);
    }

    // Función para calcular la base 10 de un logaritmo
    export function logaritmoBase10(valor: number): number {
        return Math.log10(valor);
    }

    // Función para calcular la base 2 de un logaritmo
    export function logaritmoBase2(valor: number): number {
        return Math.log2(valor);
    }

    // Función para calcular la raíz cúbica de un número
    export function raizCubica(valor: number): number {
        return Math.cbrt(valor);
    }

    // Función para determinar el signo de un número
    export function signo(valor: number): number {
        return Math.sign(valor);
    }

    // Función para calcular el logaritmo natural de (1 + x)
    export function logaritmo1MasX(valor: number): number {
        return Math.log1p(valor);
    }
}
