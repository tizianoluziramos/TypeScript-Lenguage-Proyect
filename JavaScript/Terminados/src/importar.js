"use strict";

const Si = require("./IF/if.js").Si;
const si = require("./IF/helper.js").si;
const consola = require("./console.js").consola;
const bucles = require("./for.js").bucles;
const mientras = require("./while.js").mientras;
const caso = require("./switch.js").caso;
const intentarCapturar = require("./try.js").intentarCapturar;
const definirTimeout = require("./setTimeout.js").definirTimeout;
const promesa = require("./Promise.js").promesa;
const rls = require("readline-sync");
const momentEs = require("./Extras/moment-es.js");
const axiosEs = require("./Extras/axios-es.js");
const lodashEs = require("./Extras/lodash-es.js");
const streamEnEspanol = require("./Extras/stream-web-es.js");
const sistemaOperativo = require("./Extras/os-es.js").default;
const obtenerInformacionSistema = require("./Extras/os-es.js").obtenerInformacionSistema;

const {
  mapear, filtrar, reducir, encontrar, incluir, unir, dividir, ordenar, invertir,
  concatenar, empujar, eliminar, cortar, forEach
} = require("./arrayUtil");

const buscarObjeto = require("./find.js").buscarObjeto;
const rlsUtil = require("./rlsUtils.js");
const creditosDeTypeScriptEspanol = require("./Extras/Creditos.js").creditosDeTypeScriptEspanol;
const caracterEn = require("./charAt.js").caracterEn;
const retornar = require("./return.js").retornar;

// Módulos adicionales
const validarTipo = require("./AddOns/validarTipo.js").validarTipo;
const consologuear = require("./AddOns/Consologuear.js").consologuear;
const ejecutarScriptPython = require("./AddOns/RunPython.js").ejecutarScriptPython;
const definirVariable = require("./const.js").definirVariable;
const variables = require("./const.js").variables;
const fsEs = require("./AddOns/fsEs.js").fsEs;
const factorial = require("./AddOns/Others/Factorial.js").factorial;
const invertirCadena = require("./AddOns/Others/InvertirCadena.js").invertirCadena;
const invertirArray = require("./AddOns/Others/invertirarray.js").invertirArray;
const contarVocales = require("./AddOns/Others/contarVocales.js").contarVocales;
const esAnagrama = require("./AddOns/Others/esAnagrama.js").esAnagrama;
const esPalindromo = require("./AddOns/Others/esPalindromo.js").esPalindromo;
const convertirABinario = require("./AddOns/Others/convertirDeNumeroABinario.js").convertirABinario;
const validarTarjeta = require("./AddOns/Others/validarTarjeta.js").validarTarjeta;
const pruebasScrum = require("./AddOns/Others/pruebaDeScrum.js").pruebasScrum;
const generateQR = require("./AddOns/Others/generarQR.js").generateQR;
const convertidorDeUnidades = require("./AddOns/Others/convertidorDeUnidades.js");
const { iniciarSesion, GestorDeClaves } = require("./AddOns/Others/LoginSystems/login1.js");
const GenerarClavesDeWindows95 = require("./AddOns/Others/Activator/Windows95.js").GenerarClavesDeWindows95;
const conectarSFTP = require("./AddOns/Other/AccesoFTP.js").conectarSFTP;

module.exports = {
  Si, si, consola, bucles, mientras, caso, intentarCapturar, definirTimeout, promesa,
  rls, momentEs, axiosEs, lodashEs, streamEnEspanol, sistemaOperativo, obtenerInformacionSistema,
  mapear, filtrar, reducir, encontrar, incluir, unir, dividir, ordenar, invertir,
  concatenar, empujar, eliminar, cortar, forEach, buscarObjeto, rlsUtil, creditosDeTypeScriptEspanol,
  caracterEn, retornar, validarTipo, consologuear, ejecutarScriptPython, definirVariable, variables,
  fsEs, factorial, invertirCadena, invertirArray, contarVocales, esAnagrama, esPalindromo,
  convertirABinario, validarTarjeta, pruebasScrum, generateQR, convertidorDeUnidades,
  iniciarSesion, GestorDeClaves, GenerarClavesDeWindows95, conectarSFTP
};
