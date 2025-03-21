// lodash-pt.ts
import _ from 'lodash';

const lodashPt = {
    // Métodos de manipulação de arrays
    adicionar: (array: any[], valor: any) => _.concat(array, valor), // _.concat
    remover: (array: any[], valor: any) => _.pull(array, valor), // _.pull
    filtrar: (array: any[], predicado: (valor: any) => boolean) => _.filter(array, predicado), // _.filter
    mapear: (array: any[], transformacao: (valor: any) => any) => _.map(array, transformacao), // _.map
    reduzir: (array: any[], acumulador: (acum: any, val: any) => any, inicial?: any) => _.reduce(array, acumulador, inicial), // _.reduce
    encontrar: (array: any[], predicado: (valor: any) => boolean) => _.find(array, predicado), // _.find
    ordenar: (array: any[], chave: string | string[]) => _.orderBy(array, [chave]), // _.orderBy
    inverter: (array: any[]) => _.reverse(array), // _.reverse
    unir: (array: any[], separador: string = ',') => _.join(array, separador), // _.join

    // Métodos de manipulação de objetos
    obter: (objeto: object, chave: string) => _.get(objeto, chave), // _.get
    definir: (objeto: object, chave: string, valor: any) => _.set(objeto, chave, valor), // _.set
    removerPropriedade: (objeto: object, chave: string) => _.unset(objeto, chave), // _.unset
    fundir: (...objetos: object[]) => _.merge({}, ...objetos), // _.merge
    clonar: (objeto: object) => _.cloneDeep(objeto), // _.cloneDeep
    chaves: (objeto: object) => _.keys(objeto), // _.keys
    valores: (objeto: object) => _.values(objeto), // _.values
    entradas: (objeto: object) => _.toPairs(objeto), // _.toPairs

    // Métodos de manipulação de strings
    maiusculas: (texto: string) => _.toUpper(texto), // _.toUpper
    minusculas: (texto: string) => _.toLower(texto), // _.toLower
    capitalizar: (texto: string) => _.capitalize(texto), // _.capitalize
    substituir: (texto: string, buscar: string, substituir: string) => _.replace(texto, buscar, substituir), // _.replace
    dividir: (texto: string, separador: string) => _.split(texto, separador), // _.split

    // Métodos de utilidade
    identidade: (valor: any) => _.identity(valor), // _.identity
    constante: (valor: any) => _.constant(valor), // _.constant
    aleatorio: (min: number, max: number) => _.random(min, max), // _.random
    agora: () => _.now(), // _.now
};

// Exportar o módulo em português
export default lodashPt;
