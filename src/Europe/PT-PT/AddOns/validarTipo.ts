// Validar tipos em tempo de execução
export const validarTipo = <T>(
  valor: any,
  tipoEsperado: string
): valor is T => {
  return typeof valor === tipoEsperado;
};
