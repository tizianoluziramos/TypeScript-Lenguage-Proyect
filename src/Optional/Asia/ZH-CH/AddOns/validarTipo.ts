// 在运行时验证类型
export const 验证类型 = <T>(
  值: any,
  期望类型: string
): 值 is T => {
  return typeof 值 === 期望类型;
};
