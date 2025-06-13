// Objeto para armazenar variáveis
const variaveis: Record<string, any> = {};

// Função para definir uma variável no formato "nome: tipo = valor"
function definirVariavel(atribuicao: string) {
  // Usar uma expressão regular para extrair o nome, tipo e valor
  const regex = /^(?<nome>\w+):\s*(?<tipo>\w+)\s*=\s*(.+)$/;
  const match = atribuicao.match(regex);

  if (match) {
    const nome = match[1]; // Primeiro grupo de captura
    const tipo = match[2]; // Segundo grupo de captura
    const valor = match[3]; // Terceiro grupo de captura

    // Converter o valor para o tipo adequado
    let valorConvertido: any;
    switch (tipo.toLowerCase()) {
      case 'number':
        valorConvertido = Number(valor);
        break;
      case 'string':
        valorConvertido = String(valor);
        break;
      case 'boolean':
        valorConvertido = valor.toLowerCase() === 'true';
        break;
      default:
        console.log(`Erro: Tipo '${tipo}' não reconhecido.`);
        return;
    }

    // Armazenar a variável no objeto
    variaveis[nome] = valorConvertido;
  } else {
    console.log('Erro: Formato de atribuição inválido. Use "nome: tipo = valor".');
  }
}

/*definirVariavel('ola: string = 2');
console.log(variaveis["ola"]);*/
// Exportar a função e as variáveis
export { definirVariavel, variaveis };
