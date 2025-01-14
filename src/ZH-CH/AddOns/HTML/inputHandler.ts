// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class 输入处理程序 {
  private 输入字段: HTMLInputElement;
  private 输出区: HTMLDivElement;

  constructor(输入字段Id: string, 输出区Id: string) {
    this.输入字段 = document.getElementById(输入字段Id) as HTMLInputElement;
    this.输出区 = document.getElementById(输出区Id) as HTMLDivElement;

    this.初始化();
  }

  private 初始化() {
    this.输入字段.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.处理输入();
      }
    });
  }

  private 处理输入() {
    const 输入值 = this.输入字段.value;
    this.输出区.innerHTML += `<p>${输入值}</p>`;
    console.log(输入值);
    this.输入字段.value = '';
  }
}
