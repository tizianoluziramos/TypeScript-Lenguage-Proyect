export function inverserTableau(tableau: string[]): string[] {
    return tableau.map(element => element.split('').reverse().join(''));
}
