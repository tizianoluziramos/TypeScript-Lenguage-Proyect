export class 文档 {
  获取元素通过ID(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  获取元素通过类名(类名: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(类名);
  }

  获取元素通过标签名(标签: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(标签);
  }

  查询选择器(选择: string): Element | null {
    return document.querySelector(选择);
  }

  查询所有选择器(选择: string): NodeListOf<Element> {
    return document.querySelectorAll(选择);
  }

  创建元素(标签: string): HTMLElement {
    return document.createElement(标签);
  }

  创建文本(文本: string): Text {
    return document.createTextNode(文本);
  }

  写入文档(内容: string): void {
    document.write(内容);
  }

  关闭文档(): void {
    document.close();
  }

  打开文档(类型: string, url: string, 名称: string): Window | null {
    return window.open(类型, url, 名称);
  }  

  获取Cookie(): string {
    return document.cookie;
  }

  设置Cookie(cookie: string): void {
    document.cookie = cookie;
  }

  获取标题(): string {
    return document.title;
  }

  设置标题(标题: string): void {
    document.title = 标题;
  }

  获取URL(): string {
    return document.URL;
  }

  获取BaseURI(): string {
    return document.baseURI;
  }

  获取域名(): string {
    return document.domain;
  }

  设置域名(域名: string): void {
    document.domain = 域名;
  }

  获取语言(): string {
    return document.documentElement.lang;
  }

  设置语言(语言: string): void {
    document.documentElement.lang = 语言;
  }

  获取兼容模式(): string {
    return document.compatMode;
  }

  获取内容类型(): string {
    return document.contentType;
  }

  获取活动元素(): Element | null {
    return document.activeElement;
  }

  添加事件(类型: string, 监听器: EventListenerOrEventListenerObject, 选项?: boolean | AddEventListenerOptions): void {
    document.addEventListener(类型, 监听器, 选项);
  }

  移除事件(类型: string, 监听器: EventListenerOrEventListenerObject, 选项?: boolean | EventListenerOptions): void {
    document.removeEventListener(类型, 监听器, 选项);
  }

  触发事件(事件: Event): boolean {
    return document.dispatchEvent(事件);
  }

  获取字符集(): string {
    return document.characterSet;
  }

  获取脚本(): HTMLCollectionOf<HTMLScriptElement> {
    return document.scripts;
  }

  获取样式(): StyleSheetList {
    return document.styleSheets;
  }

  导入节点(节点: Node, 深度: boolean): Node {
    return document.importNode(节点, 深度);
  }

  克隆节点(节点: Node, 深度: boolean): Node {
    return 节点.cloneNode(深度);
  }

  获取内联样式(元素: HTMLElement): CSS样式 {
    return new CSS样式(元素.style);
  }
}

export class CSS样式 {
  private style: CSSStyleDeclaration;

  constructor(style: CSSStyleDeclaration) {
    this.style = style;
  }

  设置属性(属性: string, 值: string): void {
    this.style.setProperty(属性, 值);
  }

  获取属性(属性: string): string {
    return this.style.getPropertyValue(属性);
  }

  删除属性(属性: string): void {
    this.style.removeProperty(属性);
  }

  // 完整的CSS属性映射（翻译为中文）
  get 颜色(): string {
    return this.style.color;
  }
  set 颜色(值: string) {
    this.style.color = 值;
  }

  get 背景色(): string {
    return this.style.backgroundColor;
  }
  set 背景色(值: string) {
    this.style.backgroundColor = 值;
  }

  get 宽度(): string {
    return this.style.width;
  }
  set 宽度(值: string) {
    this.style.width = 值;
  }

  get 高度(): string {
    return this.style.height;
  }
  set 高度(值: string) {
    this.style.height = 值;
  }

  get 边距(): string {
    return this.style.margin;
  }
  set 边距(值: string) {
    this.style.margin = 值;
  }

  get 内边距(): string {
    return this.style.padding;
  }
  set 内边距(值: string) {
    this.style.padding = 值;
  }

  get 边框(): string {
    return this.style.border;
  }
  set 边框(值: string) {
    this.style.border = 值;
  }

  get 位置(): string {
    return this.style.position;
  }
  set 位置(值: string) {
    this.style.position = 值;
  }

  get 显示(): string {
    return this.style.display;
  }
  set 显示(值: string) {
    this.style.display = 值;
  }

  // 更多CSS属性（按需翻译）
  get 弹性(): string {
    return this.style.flex;
  }
  set 弹性(值: string) {
    this.style.flex = 值;
  }

  get 字体大小(): string {
    return this.style.fontSize;
  }
  set 字体大小(值: string) {
    this.style.fontSize = 值;
  }

  get 字体系列(): string {
    return this.style.fontFamily;
  }
  set 字体系列(值: string) {
    this.style.fontFamily = 值;
  }

  get 不透明度(): string {
    return this.style.opacity;
  }
  set 不透明度(值: string) {
    this.style.opacity = 值;
  }
}

export const 文档实例 = new 文档();
