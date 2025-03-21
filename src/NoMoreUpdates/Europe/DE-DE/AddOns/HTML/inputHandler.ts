// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class Eingabeverarbeiter {
  private eingabefeld: HTMLInputElement;
  private ausgabebereich: HTMLDivElement;

  constructor(eingabefeldId: string, ausgabebereichId: string) {
    this.eingabefeld = document.getElementById(eingabefeldId) as HTMLInputElement;
    this.ausgabebereich = document.getElementById(ausgabebereichId) as HTMLDivElement;

    this.initialisieren();
  }

  private initialisieren() {
    this.eingabefeld.addEventListener("keypress", (ereignis) => {
      if (ereignis.key === "Enter") {
        this.verarbeiteEingabe();
      }
    });
  }

  private verarbeiteEingabe() {
    const eingabewert = this.eingabefeld.value;
    this.ausgabebereich.innerHTML += `<p>${eingabewert}</p>`;
    console.log(eingabewert);
    this.eingabefeld.value = '';
  }
}
