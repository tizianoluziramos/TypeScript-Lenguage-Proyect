export function являетсяАнаграммой(строка1: string, строка2: string): boolean {
  if (строка1 === строка2) {
    return true;
  }
  if (
    // СОРТИРОВКА УСТАНАВЛИВАЕТ ИХ В АЛФАВИТНОМ ПОРЯДКЕ
    // Split разделяет строки на массивы
    // Join соединяет их обратно
    // Проверяет, одинаковы ли строки после сортировки
    строка1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    строка2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    // Если строки одинаковы после сортировки, возвращает true
    return true;
  } // Иначе возвращает false
  return false;
}
