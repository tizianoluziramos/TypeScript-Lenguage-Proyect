"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsEs = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const iconv_lite_1 = __importDefault(require("iconv-lite")); // Importar el módulo de encoding
exports.fsEs = {
    async escribirArchivo(ruta, contenido, opciones = {}) {
        try {
            const encoding = opciones.encoding || 'utf-8';
            const buffer = iconv_lite_1.default.encode(contenido, encoding); // Convertimos el contenido al buffer de la codificación deseada
            await promises_1.default.writeFile(ruta, buffer);
            console.log('Archivo escrito correctamente.');
        }
        catch (error) {
            console.error('Error al escribir el archivo:', error);
        }
    },
    async actualizarArchivo(ruta, contenido) {
        try {
            await promises_1.default.appendFile(ruta, "\n" + contenido, "utf-8");
            console.log("File updated successfully");
        }
        catch (error) {
            console.log("Process failed with error:", error);
        }
    },
    async leerArchivo(fileName) {
        try {
            const data = await promises_1.default.readFile(fileName, "utf-8");
            console.log(data);
        }
        catch (error) {
            console.error("There was an error:", error);
        }
    },
    async eliminarArchivo(ruta) {
        try {
            await promises_1.default.unlink(ruta);
            console.log('Archivo eliminado correctamente.');
        }
        catch (error) {
            console.error('Error al eliminar el archivo:', error);
        }
    },
    async renombrarArchivo(rutaAntigua, rutaNueva) {
        try {
            await promises_1.default.rename(rutaAntigua, rutaNueva);
            console.log('Archivo renombrado correctamente.');
        }
        catch (error) {
            console.error('Error al renombrar el archivo:', error);
        }
    },
    async crearDirectorio(ruta, opciones = { recursive: false }) {
        try {
            await promises_1.default.mkdir(ruta, opciones);
            console.log('Directorio creado correctamente.');
        }
        catch (error) {
            console.error('Error al crear el directorio:', error);
        }
    },
    async listarCarpeta(ruta) {
        try {
            const elementos = await promises_1.default.readdir(ruta, { withFileTypes: true });
            elementos.forEach(elemento => {
                if (elemento.isDirectory()) {
                    console.log(`📁 Carpeta: ${elemento.name}`);
                }
                else {
                    console.log(`📄 Archivo: ${elemento.name}`);
                }
            });
        }
        catch (error) {
            console.error('Error al leer la carpeta:', error);
        }
    },
    async copiarArchivo(rutaOrigen, rutaDestino) {
        try {
            await promises_1.default.copyFile(rutaOrigen, rutaDestino);
            console.log('Archivo copiado correctamente.');
        }
        catch (error) {
            console.error('Error al copiar el archivo:', error);
        }
    },
    async obtenerEstadisticas(rutaArchivo) {
        try {
            const estadisticas = await promises_1.default.stat(rutaArchivo);
            console.log(`📄 Archivo: ${rutaArchivo}`);
            console.log(`- Tamaño: ${estadisticas.size} bytes`);
            console.log(`- Fecha de creación: ${estadisticas.birthtime}`);
            console.log(`- Última modificación: ${estadisticas.mtime}`);
            console.log(`- Es archivo: ${estadisticas.isFile()}`);
            console.log(`- Es directorio: ${estadisticas.isDirectory()}`);
        }
        catch (error) {
            console.error('Error al obtener las estadísticas del archivo:', error);
        }
    },
};
