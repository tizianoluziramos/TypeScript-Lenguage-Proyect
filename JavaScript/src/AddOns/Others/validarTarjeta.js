"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTarjeta = validarTarjeta;
// Exporta una función llamada validarTarjeta que toma un número como cadena y devuelve un booleano
function validarTarjeta(numero) {
    let valida = 0; // Inicializa una variable para acumular la suma de los dígitos procesados
    // Recorre cada dígito del número de tarjeta, comenzando desde el último
    for (let i = 0; i < numero.length; i++) {
        // Obtiene el dígito correspondiente en la posición "i" desde el final
        let digito = parseInt(numero.charAt(numero.length - 1 - i), 10);
        // Si la posición "i" es impar (segundo, cuarto dígito, etc. desde el final)
        if (i % 2 === 1) {
            digito = digito * 2; // Duplica el valor del dígito
            // Si el dígito duplicado es mayor que 9, le resta 9 para reducirlo a un solo dígito
            if (digito > 9) {
                digito = digito - 9;
            }
        }
        // Suma el dígito (modificado o no) a la variable de validación
        valida = valida + digito;
    }
    // Si el total es múltiplo de 10, devuelve verdadero (número válido), si no, falso
    return valida % 10 === 0;
}
