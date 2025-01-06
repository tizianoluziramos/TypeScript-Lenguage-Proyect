"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// axios-es.ts
const axios_1 = __importDefault(require("axios"));
const axiosEs = {
    // Función para obtener datos de una URL
    obtener: async (url) => {
        try {
            const respuesta = await axios_1.default.get(url);
            return respuesta.data;
        }
        catch (error) {
            console.error('Error al obtener datos:', error);
            throw error;
        }
    },
    // Función para enviar datos a una URL
    enviar: async (url, datos) => {
        try {
            const respuesta = await axios_1.default.post(url, datos);
            return respuesta.data;
        }
        catch (error) {
            console.error('Error al enviar datos:', error);
            throw error;
        }
    },
    // Función para actualizar datos en una URL
    actualizar: async (url, datos) => {
        try {
            const respuesta = await axios_1.default.put(url, datos);
            return respuesta.data;
        }
        catch (error) {
            console.error('Error al actualizar datos:', error);
            throw error;
        }
    },
    // Función para eliminar datos en una URL
    eliminar: async (url) => {
        try {
            const respuesta = await axios_1.default.delete(url);
            return respuesta.data;
        }
        catch (error) {
            console.error('Error al eliminar datos:', error);
            throw error;
        }
    }
};
exports.default = axiosEs;
