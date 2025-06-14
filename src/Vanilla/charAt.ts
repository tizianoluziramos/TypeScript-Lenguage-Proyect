// charAt.ts

// Extender el prototipo de String para agregar la función caracterEn
declare global {
    interface String {
        caracterEn(index: number): string;
    }
}

String.prototype.caracterEn = function (index: number): string {
    const length = this.length;

    // Manejar índices negativos
    if (index < 0) {
        index = length + index;
    }

    // Comprobar que el índice esté dentro de los límites
    if (index < 0 || index >= length) {
        return ""; // Retorna una cadena vacía si el índice está fuera de límites
    }

    // Retornar el carácter en la posición indicada
    return this.charAt(index);
};

// Exportar la función para poder utilizarla en otros archivos
export const caracterEn = function (this: string, index: number): string {
    return this.caracterEn(index);
};
