"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapear = mapear;
exports.filtrar = filtrar;
exports.reducir = reducir;
exports.encontrar = encontrar;
exports.encontrarIndice = encontrarIndice;
exports.incluir = incluir;
exports.unir = unir;
exports.dividir = dividir;
exports.ordenar = ordenar;
exports.invertir = invertir;
exports.concatenar = concatenar;
exports.empujar = empujar;
exports.eliminar = eliminar;
exports.cortar = cortar;
exports.forEach = forEach;
// arrayUtil.ts
function mapear(array, fn) {
    return array.map(fn);
}
function filtrar(array, fn) {
    return array.filter(fn);
}
function reducir(array, fn, inicial) {
    return array.reduce(fn, inicial);
}
function encontrar(array, fn) {
    return array.find(fn);
}
function encontrarIndice(array, fn) {
    return array.findIndex(fn);
}
function incluir(array, elemento) {
    return array.includes(elemento);
}
function unir(...arrays) {
    return arrays.flat();
}
function dividir(array, tamaño) {
    const resultado = [];
    for (let i = 0; i < array.length; i += tamaño) {
        resultado.push(array.slice(i, i + tamaño));
    }
    return resultado;
}
function ordenar(array, comparador) {
    return array.slice().sort(comparador);
}
function invertir(array) {
    return array.slice().reverse();
}
function concatenar(array, ...elementos) {
    return array.concat(...elementos);
}
function empujar(array, ...elementos) {
    return array.push(...elementos);
}
function eliminar(array, elemento) {
    const indice = array.indexOf(elemento);
    if (indice !== -1) {
        array.splice(indice, 1);
        return true;
    }
    return false;
}
function cortar(array, inicio, cantidad) {
    return array.slice(inicio, cantidad !== undefined ? inicio + cantidad : undefined);
}
function forEach(array, fn) {
    array.forEach(fn);
}
