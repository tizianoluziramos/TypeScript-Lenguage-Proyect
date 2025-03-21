// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class InputHandler {
  private inputField: HTMLInputElement;
  private outputDiv: HTMLDivElement;

  constructor(inputFieldId: string, outputDivId: string) {
    this.inputField = document.getElementById(inputFieldId) as HTMLInputElement;
    this.outputDiv = document.getElementById(outputDivId) as HTMLDivElement;

    this.initialize();
  }

  private initialize() {
    this.inputField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.handleInput();
      }
    });
  }

  private handleInput() {
    const inputValue = this.inputField.value;
    this.outputDiv.innerHTML += `<p>${inputValue}</p>`;
    console.log(inputValue);
    this.inputField.value = '';
  }
}