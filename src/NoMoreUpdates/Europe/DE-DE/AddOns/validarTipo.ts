// Typen zur Laufzeit validieren
export const validiereTyp = <T>(
  wert: any,
  erwarteterTyp: string
): wert is T => {
  return typeof wert === erwarteterTyp;
};
