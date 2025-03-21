// lodash-es.ts
import _ from 'lodash';

const lodashEs = {
    // Métodos de manipulación de arrays
    agregar: (array: any[], valor: any) => _.concat(array, valor), // _.concat
    eliminar: (array: any[], valor: any) => _.pull(array, valor), // _.pull
    filtrar: (array: any[], predicado: (valor: any) => boolean) => _.filter(array, predicado), // _.filter
    mapear: (array: any[], transformacion: (valor: any) => any) => _.map(array, transformacion), // _.map
    reducir: (array: any[], acumulador: (acum: any, val: any) => any, inicial?: any) => _.reduce(array, acumulador, inicial), // _.reduce
    encontrar: (array: any[], predicado: (valor: any) => boolean) => _.find(array, predicado), // _.find
    ordenar: (array: any[], clave: string | string[]) => _.orderBy(array, [clave]), // _.orderBy
    invertir: (array: any[]) => _.reverse(array), // _.reverse
    unir: (array: any[], separador: string = ',') => _.join(array, separador), // _.join

    // Métodos de manipulación de objetos
    obtener: (objeto: object, clave: string) => _.get(objeto, clave), // _.get
    establecer: (objeto: object, clave: string, valor: any) => _.set(objeto, clave, valor), // _.set
    eliminarPropiedad: (objeto: object, clave: string) => _.unset(objeto, clave), // _.unset
    fusionar: (...objetos: object[]) => _.merge({}, ...objetos), // _.merge
    clonar: (objeto: object) => _.cloneDeep(objeto), // _.cloneDeep
    keys: (objeto: object) => _.keys(objeto), // _.keys
    valores: (objeto: object) => _.values(objeto), // _.values
    entradas: (objeto: object) => _.toPairs(objeto), // _.toPairs

    // Métodos de cadenas
    mayusculas: (texto: string) => _.toUpper(texto), // _.toUpper
    minusculas: (texto: string) => _.toLower(texto), // _.toLower
    capitalizar: (texto: string) => _.capitalize(texto), // _.capitalize
    reemplazar: (texto: string, buscar: string, reemplazo: string) => _.replace(texto, buscar, reemplazo), // _.replace
    dividir: (texto: string, separador: string) => _.split(texto, separador), // _.split

    // Métodos de utilidad
    identidad: (valor: any) => _.identity(valor), // _.identity
    constante: (valor: any) => _.constant(valor), // _.constant
    aleatorio: (min: number, max: number) => _.random(min, max), // _.random
    ahora: () => _.now(), // _.now
};

// Exportar el módulo en español
export default lodashEs;
