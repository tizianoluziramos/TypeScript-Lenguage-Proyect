// 如果.ts
class 如果 {
  private 条件: boolean;
  private 否则动作?: () => void; // 存储else的动作

  constructor(条件: boolean) {
    this.条件 = 条件;
  }

  那么(动作: () => void) {
    if (this.条件) {
      动作(); // 如果条件为真，则执行该动作
    } else if (this.否则动作) {
      this.否则动作(); // 如果定义了，则执行否则的动作
    }
    return this; // 允许链式调用
  }

  否则(动作: () => void) {
    this.否则动作 = 动作; // 存储否则的动作
    return this; // 允许链式调用
  }
}

export { 如果 };
