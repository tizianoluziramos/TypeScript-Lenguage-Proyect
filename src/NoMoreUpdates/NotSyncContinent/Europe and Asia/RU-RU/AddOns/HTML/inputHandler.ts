// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class ОбработчикВвода {
  private полеВвода: HTMLInputElement;
  private divВыхода: HTMLDivElement;

  constructor(inputFieldId: string, outputDivId: string) {
    this.полеВвода = document.getElementById(inputFieldId) as HTMLInputElement;
    this.divВыхода = document.getElementById(outputDivId) as HTMLDivElement;

    this.инициализировать();
  }

  private инициализировать() {
    this.полеВвода.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.обработатьВвод();
      }
    });
  }

  private обработатьВвод() {
    const значениеВвода = this.полеВвода.value;
    this.divВыхода.innerHTML += `<p>${значениеВвода}</p>`;
    console.log(значениеВвода);
    this.полеВвода.value = '';
  }
}
