export function 暂停代码(超时: number | string): void {
  // 预定义的键与毫秒时间的映射
  const 预定义时间: { [key: string]: number } = {
    mitiempo: 2000,
    corto: 1000,
    largo: 5000,
  };

  const time = typeof 超时 === "string" ? 预定义时间[超时] : 超时;

  if (time === undefined || typeof time !== "number" || time < 0) {
    throw new Error("无效的时间");
  }

  const start = Date.now();
  while (Date.now() - start < time) {
  }
}
