import fs from 'fs/promises';
import { Stats } from 'fs';
import iconv from 'iconv-lite'; // Importar el módulo de encoding

// Definimos el tipo para las opciones
interface Opciones {
    encoding?: string; // Hacemos que el encoding sea opcional
}

export const fsEs = {
    async escribirArchivo(ruta: string, contenido: string, opciones: Opciones = {}): Promise<void> {
        try {
            const encoding = opciones.encoding || 'utf-8';
            const buffer = iconv.encode(contenido, encoding); // Convertimos el contenido al buffer de la codificación deseada
            await fs.writeFile(ruta, buffer);
            console.log('Archivo escrito correctamente.');
        } catch (error) {
            console.error('Error al escribir el archivo:', error);
        }
    },

    async actualizarArchivo(ruta: string, contenido: string): Promise<void> {
        try {
              await fs.appendFile(ruta, "\n" + contenido, "utf-8");
              console.log("File updated successfully");
            } catch (error) {
             console.log("Process failed with error:", error);
        }
    },

    async leerArchivo(fileName: string): Promise<void> {
        try {
          const data: string = await fs.readFile(fileName, "utf-8");
          console.log(data);
        } catch (error) {
          console.error("There was an error:", error);
        }
      },

    async eliminarArchivo(ruta: string): Promise<void> {
        try {
            await fs.unlink(ruta);
            console.log('Archivo eliminado correctamente.');
        } catch (error) {
            console.error('Error al eliminar el archivo:', error);
        }
    },

    async renombrarArchivo(rutaAntigua: string, rutaNueva: string): Promise<void> {
        try {
            await fs.rename(rutaAntigua, rutaNueva);
            console.log('Archivo renombrado correctamente.');
        } catch (error) {
            console.error('Error al renombrar el archivo:', error);
        }
    },

    async crearDirectorio(ruta: string, opciones: { recursive?: boolean } = { recursive: false }): Promise<void> {
        try {
            await fs.mkdir(ruta, opciones);
            console.log('Directorio creado correctamente.');
        } catch (error) {
            console.error('Error al crear el directorio:', error);
        }
    },

    async listarCarpeta(ruta: string) {
      try {
        const elementos = await fs.readdir(ruta, { withFileTypes: true });
        elementos.forEach(elemento => {
          if (elemento.isDirectory()) {
            console.log(`📁 Carpeta: ${elemento.name}`);
          } else {
            console.log(`📄 Archivo: ${elemento.name}`);
          }
        });
      } catch (error) {
        console.error('Error al leer la carpeta:', error);
      }
    },

    async copiarArchivo(rutaOrigen: string, rutaDestino: string): Promise<void> {
        try {
            await fs.copyFile(rutaOrigen, rutaDestino);
            console.log('Archivo copiado correctamente.');
        } catch (error) {
            console.error('Error al copiar el archivo:', error);
        }
    },

    async obtenerEstadisticas(rutaArchivo: string) {
      try {
        const estadisticas = await fs.stat(rutaArchivo);
        
        console.log(`📄 Archivo: ${rutaArchivo}`);
        console.log(`- Tamaño: ${estadisticas.size} bytes`);
        console.log(`- Fecha de creación: ${estadisticas.birthtime}`);
        console.log(`- Última modificación: ${estadisticas.mtime}`);
        console.log(`- Es archivo: ${estadisticas.isFile()}`);
        console.log(`- Es directorio: ${estadisticas.isDirectory()}`);
      } catch (error) {
        console.error('Error al obtener las estadísticas del archivo:', error);
      }
    },  
};
