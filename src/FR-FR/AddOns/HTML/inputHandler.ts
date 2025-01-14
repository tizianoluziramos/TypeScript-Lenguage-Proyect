// gestionnaireSaisie.ts
// tsc gestionnaireSaisie.ts --outDir . --module esnext

export class GestionnaireSaisie {
  private champSaisie: HTMLInputElement;
  private divSortie: HTMLDivElement;

  constructor(idChampSaisie: string, idDivSortie: string) {
    this.champSaisie = document.getElementById(idChampSaisie) as HTMLInputElement;
    this.divSortie = document.getElementById(idDivSortie) as HTMLDivElement;

    this.initialiser();
  }

  private initialiser() {
    this.champSaisie.addEventListener("keypress", (evenement) => {
      if (evenement.key === "Enter") {
        this.gererSaisie();
      }
    });
  }

  private gererSaisie() {
    const valeurSaisie = this.champSaisie.value;
    this.divSortie.innerHTML += `<p>${valeurSaisie}</p>`;
    console.log(valeurSaisie);
    this.champSaisie.value = '';
  }
}
