// manejoErrores.ts
export function intentarCapturar(bloque: () => void, capturar: (error: any) => void) {
    try {
        bloque();
    } catch (error) {
        capturar(error);
    }
}
