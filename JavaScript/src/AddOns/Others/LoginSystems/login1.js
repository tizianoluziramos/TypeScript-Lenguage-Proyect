"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorDeClaves = void 0;
exports.iniciarSesion = iniciarSesion;
const uuid_1 = require("uuid");
class GestorDeClaves {
    constructor() {
        this.claves = []; // Almacena claves y sus UUIDs
    }
    // Genera una clave de producto
    static generarClave() {
        let clave = '';
        for (let i = 0; i < 5; i++) {
            if (i > 0) {
                clave += '-'; // Agrega guiones entre los grupos de caracteres
            }
            for (let j = 0; j < 5; j++) {
                const indiceAleatorio = Math.floor(Math.random() * this.caracteres.length);
                clave += this.caracteres[indiceAleatorio]; // Selecciona un carácter aleatorio
            }
        }
        return clave;
    }
    // Agrega una clave y su UUID al array
    agregarClave(clave) {
        const nuevoUUID = (0, uuid_1.v4)(); // Generar un nuevo UUID
        this.claves.push({ clave, uuid: nuevoUUID });
    }
    // Verifica si la clave existe en el array y coincide con el UUID
    validarClave(clave, uuid) {
        return this.claves.some(item => item.clave === clave && item.uuid === uuid);
    }
    // Genera y agrega una nueva clave al array
    crearYAgregarClave() {
        const nuevaClave = GestorDeClaves.generarClave();
        this.agregarClave(nuevaClave);
        console.log(`Clave generada y agregada: ${nuevaClave}`);
    }
    // Muestra todas las claves almacenadas
    mostrarClaves() {
        console.log("Claves almacenadas:", this.claves);
    }
}
exports.GestorDeClaves = GestorDeClaves;
GestorDeClaves.caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// Función de inicio de sesión
function iniciarSesion(claveIngresada, uuidIngresado, key) {
    if (key.validarClave(claveIngresada, uuidIngresado)) {
        console.log("Inicio de sesión exitoso.");
    }
    else {
        console.log("Clave o UUID incorrecto. Inténtalo de nuevo.");
    }
}
