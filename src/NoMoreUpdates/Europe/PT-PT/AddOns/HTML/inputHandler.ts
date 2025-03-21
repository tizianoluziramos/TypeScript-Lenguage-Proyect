// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class ManipuladorDeEntrada {
  private campoDeEntrada: HTMLInputElement;
  private divDeSaida: HTMLDivElement;

  constructor(campoDeEntradaId: string, divDeSaidaId: string) {
    this.campoDeEntrada = document.getElementById(campoDeEntradaId) as HTMLInputElement;
    this.divDeSaida = document.getElementById(divDeSaidaId) as HTMLDivElement;

    this.inicializar();
  }

  private inicializar() {
    this.campoDeEntrada.addEventListener("keypress", (evento) => {
      if (evento.key === "Enter") {
        this.tratarEntrada();
      }
    });
  }

  private tratarEntrada() {
    const valorEntrada = this.campoDeEntrada.value;
    this.divDeSaida.innerHTML += `<p>${valorEntrada}</p>`;
    console.log(valorEntrada);
    this.campoDeEntrada.value = '';
  }
}
