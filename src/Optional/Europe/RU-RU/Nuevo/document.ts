class Документ {
  получитьЭлементПоId(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  получитьЭлементыПоКлассу(имяКласса: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(имяКласса);
  }

  получитьЭлементыПоТегу(тег: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(тег);
  }

  запроситьСелектор(селектор: string): Element | null {
    return document.querySelector(селектор);
  }

  запроситьВсеСелекторы(селектор: string): NodeListOf<Element> {
    return document.querySelectorAll(селектор);
  }

  создатьЭлемент(тег: string): HTMLElement {
    return document.createElement(тег);
  }

  создатьТекст(текст: string): Text {
    return document.createTextNode(текст);
  }

  записатьВДокумент(содержимое: string): void {
    document.write(содержимое);
  }

  закрытьДокумент(): void {
    document.close();
  }

  открытьДокумент(тип: string, url: string, имя: string): Window | null {
    return window.open(тип, url, имя);
  }

  получитьCookie(): string {
    return document.cookie;
  }

  установитьCookie(cookie: string): void {
    document.cookie = cookie;
  }

  получитьЗаголовок(): string {
    return document.title;
  }

  установитьЗаголовок(заголовок: string): void {
    document.title = заголовок;
  }

  получитьURL(): string {
    return document.URL;
  }

  получитьBaseURI(): string {
    return document.baseURI;
  }

  получитьДомен(): string {
    return document.domain;
  }

  установитьДомен(домен: string): void {
    document.domain = домен;
  }

  получитьЯзык(): string {
    return document.documentElement.lang;
  }

  установитьЯзык(язык: string): void {
    document.documentElement.lang = язык;
  }

  получитьРежимСовместимости(): string {
    return document.compatMode;
  }

  получитьТипСодержимого(): string {
    return document.contentType;
  }

  получитьАктивныйЭлемент(): Element | null {
    return document.activeElement;
  }

  добавитьСобытие(тип: string, listener: EventListenerOrEventListenerObject, опции?: boolean | AddEventListenerOptions): void {
    document.addEventListener(тип, listener, опции);
  }

  удалитьСобытие(тип: string, listener: EventListenerOrEventListenerObject, опции?: boolean | EventListenerOptions): void {
    document.removeEventListener(тип, listener, опции);
  }

  вызватьСобытие(событие: Event): boolean {
    return document.dispatchEvent(событие);
  }

  получитьКодированныйСимвол(): string {
    return document.characterSet;
  }

  получитьСценарии(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  получитьСтили(): StyleSheetList {
    return document.styleSheets;
  }

  импортироватьУзел(узел: Node, глубокий: boolean): Node {
    return document.importNode(узел, глубокий);
  }

  клонироватьУзел(узел: Node, глубокий: boolean): Node {
    return узел.cloneNode(глубокий);
  }

  получитьИнлайнСтиль(элемент: HTMLElement): CSSStyle {
    return new CSSStyle(элемент.style);
  }
}

export class CSSStyle {
  private стиль: CSSStyleDeclaration;

  constructor(стиль: CSSStyleDeclaration) {
    this.стиль = стиль;
  }

  установитьСвойство(свойство: string, значение: string): void {
    this.стиль.setProperty(свойство, значение);
  }

  получитьСвойство(свойство: string): string {
    return this.стиль.getPropertyValue(свойство);
  }

  удалитьСвойство(свойство: string): void {
    this.стиль.removeProperty(свойство);
  }

  // Полное отображение всех известных CSS свойств (на русском)
  get цвет(): string {
    return this.стиль.color;
  }
  set цвет(значение: string) {
    this.стиль.color = значение;
  }

  get фонЦвет(): string {
    return this.стиль.backgroundColor;
  }
  set фонЦвет(значение: string) {
    this.стиль.backgroundColor = значение;
  }

  get ширина(): string {
    return this.стиль.width;
  }
  set ширина(значение: string) {
    this.стиль.width = значение;
  }

  get высота(): string {
    return this.стиль.height;
  }
  set высота(значение: string) {
    this.стиль.height = значение;
  }

  get отступ(): string {
    return this.стиль.margin;
  }
  set отступ(значение: string) {
    this.стиль.margin = значение;
  }

  get внутреннийОтступ(): string {
    return this.стиль.padding;
  }
  set внутреннийОтступ(значение: string) {
    this.стиль.padding = значение;
  }

  get граница(): string {
    return this.стиль.border;
  }
  set граница(значение: string) {
    this.стиль.border = значение;
  }

  get позиция(): string {
    return this.стиль.position;
  }
  set позиция(значение: string) {
    this.стиль.position = значение;
  }

  get display(): string {
    return this.стиль.display;
  }
  set display(значение: string) {
    this.стиль.display = значение;
  }

  // Дополнительные свойства CSS
  get flex(): string {
    return this.стиль.flex;
  }
  set flex(значение: string) {
    this.стиль.flex = значение;
  }

  get размерШрифта(): string {
    return this.стиль.fontSize;
  }
  set размерШрифта(значение: string) {
    this.стиль.fontSize = значение;
  }

  get семьяШрифта(): string {
    return this.стиль.fontFamily;
  }
  set семьяШрифта(значение: string) {
    this.стиль.fontFamily = значение;
  }

  get прозрачность(): string {
    return this.стиль.opacity;
  }
  set прозрачность(значение: string) {
    this.стиль.opacity = значение;
  }
}

export const документ = new Документ();
