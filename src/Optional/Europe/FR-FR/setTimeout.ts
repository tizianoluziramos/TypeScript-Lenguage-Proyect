// temporizador.ts
export function définirundélaidattente(ms: number, bloc: () => void) {
    setTimeout(bloc, ms);
}
