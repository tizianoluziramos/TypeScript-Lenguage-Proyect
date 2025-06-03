export function 是字谜(字符串1: string, 字符串2: string): boolean {
  if (字符串1 === 字符串2) {
    return true;
  }
  if (
    字符串1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    字符串2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    return true;
  }
  return false;
}
