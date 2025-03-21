import { v4 as uuidv4 } from 'uuid';

export class GestorDeClaves {
    private static caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    private claves: { clave: string; uuid: string }[] = []; // Almacena claves y sus UUIDs

    // Genera una clave de producto
    static generarClave(): string {
        let clave: string = '';

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
    agregarClave(clave: string): void {
        const nuevoUUID = uuidv4(); // Generar un nuevo UUID
        this.claves.push({ clave, uuid: nuevoUUID });
    }

    // Verifica si la clave existe en el array y coincide con el UUID
    validarClave(clave: string, uuid: string): boolean {
        return this.claves.some(item => item.clave === clave && item.uuid === uuid);
    }

    // Genera y agrega una nueva clave al array
    crearYAgregarClave(): void {
        const nuevaClave = GestorDeClaves.generarClave();
        this.agregarClave(nuevaClave);
        console.log(`Clave generada y agregada: ${nuevaClave}`);
    }

    // Muestra todas las claves almacenadas
    mostrarClaves(): void {
        console.log("Claves almacenadas:", this.claves);
    }
}

// Función de inicio de sesión
export function iniciarSesion(claveIngresada: string, uuidIngresado: string, key: any): void {
    if (key.validarClave(claveIngresada, uuidIngresado)) {
        console.log("Inicio de sesión exitoso.");
    } else {
        console.log("Clave o UUID incorrecto. Inténtalo de nuevo.");
    }
}
