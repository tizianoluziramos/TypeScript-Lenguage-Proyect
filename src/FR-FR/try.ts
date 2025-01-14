// manejoErrores.ts
export function essayerdecapturer(bloque: () => void, capturar: (error: any) => void) {
    try {
        bloque();
    } catch (error) {
        capturar(error);
    }
}
