// inputHandler.ts
// tsc inputHandler.ts --outDir . --module esnext

export class ইনপুট_হ্যান্ডলার {
  private ইনপুট_ফিল্ড: HTMLInputElement;
  private আউটপুট_ডিভ: HTMLDivElement;

  constructor(ইনপুট_ফিল্ড_আইডি: string, আউটপুট_ডিভ_আইডি: string) {
    this.ইনপুট_ফিল্ড = document.getElementById(ইনপুট_ফিল্ড_আইডি) as HTMLInputElement;
    this.আউটপুট_ডিভ = document.getElementById(আউটপুট_ডিভ_আইডি) as HTMLDivElement;

    this.আরম্ভ_করুন();
  }

  private আরম্ভ_করুন() {
    this.ইনপুট_ফিল্ড.addEventListener("keypress", (ইভেন্ট) => {
      if (ইভেন্ট.key === "Enter") {
        this.হ্যান্ডেল_ইনপুট();
      }
    });
  }

  private হ্যান্ডেল_ইনপুট() {
    const ইনপুট_মান = this.ইনপুট_ফিল্ড.value;
    this.আউটপুট_ডিভ.innerHTML += `<p>${ইনপুট_মান}</p>`;
    console.log(ইনপুট_মান);
    this.ইনপুট_ফিল্ড.value = '';
  }
}
