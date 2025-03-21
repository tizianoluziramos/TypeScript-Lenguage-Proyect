export function приостановитьКод(таймАут: number | string): void {
  // Карта предустановленных ключей и времени в миллисекундах
  const предустановленныеВремена: { [key: string]: number } = {
    mitiempo: 2000,
    corto: 1000,
    largo: 5000,
  };

  // Determinar el tiempo en milisegundos
  const время =
    typeof таймАут === "string" ? предустановленныеВремена[таймАут] : таймАут;

  // Validar el tiempo
  if (время === undefined || typeof время !== "number" || время < 0) {
    throw new Error("Неверное время"); // Error en caso de tiempo inválido
  }

  // Pausar el código por el tiempo especificado
  const начало = Date.now();
  while (Date.now() - начало < время) {
    // Bucle vacío para esperar
  }
}
