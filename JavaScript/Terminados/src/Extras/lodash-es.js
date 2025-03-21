"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lodash-es.ts
const lodash_1 = __importDefault(require("lodash"));
const lodashEs = {
    // Métodos de manipulación de arrays
    agregar: (array, valor) => lodash_1.default.concat(array, valor), // _.concat
    eliminar: (array, valor) => lodash_1.default.pull(array, valor), // _.pull
    filtrar: (array, predicado) => lodash_1.default.filter(array, predicado), // _.filter
    mapear: (array, transformacion) => lodash_1.default.map(array, transformacion), // _.map
    reducir: (array, acumulador, inicial) => lodash_1.default.reduce(array, acumulador, inicial), // _.reduce
    encontrar: (array, predicado) => lodash_1.default.find(array, predicado), // _.find
    ordenar: (array, clave) => lodash_1.default.orderBy(array, [clave]), // _.orderBy
    invertir: (array) => lodash_1.default.reverse(array), // _.reverse
    unir: (array, separador = ',') => lodash_1.default.join(array, separador), // _.join
    // Métodos de manipulación de objetos
    obtener: (objeto, clave) => lodash_1.default.get(objeto, clave), // _.get
    establecer: (objeto, clave, valor) => lodash_1.default.set(objeto, clave, valor), // _.set
    eliminarPropiedad: (objeto, clave) => lodash_1.default.unset(objeto, clave), // _.unset
    fusionar: (...objetos) => lodash_1.default.merge({}, ...objetos), // _.merge
    clonar: (objeto) => lodash_1.default.cloneDeep(objeto), // _.cloneDeep
    keys: (objeto) => lodash_1.default.keys(objeto), // _.keys
    valores: (objeto) => lodash_1.default.values(objeto), // _.values
    entradas: (objeto) => lodash_1.default.toPairs(objeto), // _.toPairs
    // Métodos de cadenas
    mayusculas: (texto) => lodash_1.default.toUpper(texto), // _.toUpper
    minusculas: (texto) => lodash_1.default.toLower(texto), // _.toLower
    capitalizar: (texto) => lodash_1.default.capitalize(texto), // _.capitalize
    reemplazar: (texto, buscar, reemplazo) => lodash_1.default.replace(texto, buscar, reemplazo), // _.replace
    dividir: (texto, separador) => lodash_1.default.split(texto, separador), // _.split
    // Métodos de utilidad
    identidad: (valor) => lodash_1.default.identity(valor), // _.identity
    constante: (valor) => lodash_1.default.constant(valor), // _.constant
    aleatorio: (min, max) => lodash_1.default.random(min, max), // _.random
    ahora: () => lodash_1.default.now(), // _.now
};
// Exportar el módulo en español
exports.default = lodashEs;
