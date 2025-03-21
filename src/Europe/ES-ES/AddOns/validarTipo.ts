// Validar tipos en tiempo de ejecución
export const validarTipo = <T>(
  valor: any,
  tipoEsperado: string
): valor is T => {
  return typeof valor === tipoEsperado;
};
