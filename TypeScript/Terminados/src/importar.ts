import { Si } from "./IF/if.ts";
import { si } from "./IF/helper.ts";
import { consola } from "./console.ts";
import { bucles } from "./for.ts";
import { mientras } from "./while.ts";
import { caso } from "./switch.ts";
import { intentarCapturar } from "./try.ts";
import { definirTimeout } from "./setTimeout.ts";
import { promesa } from "./Promise.ts";
import * as rls from "readline-sync";
import momentEs from "./Extras/moment-es.ts";
import axiosEs from "./Extras/axios-es.ts";
import lodashEs from "./Extras/lodash-es.ts";
import streamEnEspanol from './Extras/stream-web-es.ts';
import sistemaOperativo, { obtenerInformacionSistema } from './Extras/os-es.ts'

import {
  mapear,
  filtrar,
  reducir,
  encontrar,
  incluir,
  unir,
  dividir,
  ordenar,
  invertir,
  concatenar,
  empujar,
  eliminar,
  cortar,
  forEach,
} from "./arrayUtil";

import { buscarObjeto } from "./find.ts";
import rlsUtil from "./rlsUtils.ts";
import { creditosDeTypeScriptEspanol } from "./Extras/Creditos.ts";
import { caracterEn } from './charAt.ts';
import { retornar } from "./return.ts"
//ADDONS
import { validarTipo } from "./AddOns/validarTipo.ts"
import { consologuear } from "./AddOns/Consologuear.ts"
import { ejecutarScriptPython } from "./AddOns/RunPython.ts"
import { definirVariable, variables } from "./const.ts"
import { fsEs } from "./AddOns/fsEs.ts"
import { factorial } from './AddOns/Others/Factorial.ts'
import { invertirCadena } from "./AddOns/Others/InvertirCadena.ts"
import { invertirArray } from './AddOns/Others/invertirarray.ts'
import { contarVocales } from './AddOns/Others/contarVocales.ts'
import { esAnagrama } from './AddOns/Others/esAnagrama.ts'
import { esPalindromo } from './AddOns/Others/esPalindromo.ts'
import { convertirABinario } from './AddOns/Others/convertirDeNumeroABinario.ts'
import { validarTarjeta } from './AddOns/Others/validarTarjeta.ts'
import { pruebasScrum } from './AddOns/Others/pruebaDeScrum.ts'
import { generateQR } from './AddOns/Others/generarQR.ts'
import * as convertidorDeUnidades from './AddOns/Others/convertidorDeUnidades.ts'
import { iniciarSesion, GestorDeClaves } from './AddOns/Others/LoginSystems/login1.ts'
import { GenerarClavesDeWindows95} from './AddOns/Others/Activator/Windows95.ts'
import { conectarSFTP } from './AddOns/Other/AccesoFTP.ts'
import { leerArchivoWord } from './AddOns/Other/leerArchivoWord.ts'
import { leerPDF } from './AddOns/Other/leerArchivoPDF.ts'
import { convertirEXEaHexadecimal } from './AddOns/Other/convertirEXEaHexadecimal.ts'
import { leerProcesoEnLaMemoria } from './AddOns/Other/leerMemoriaRAM.ts'

export {
  si,
  Si,
  consola,
  bucles,
  mientras,
  caso,
  intentarCapturar,
  definirTimeout,
  promesa,
  mapear,
  filtrar,
  reducir,
  encontrar,
  incluir,
  unir,
  dividir,
  ordenar,
  invertir,
  concatenar,
  empujar,
  eliminar,
  cortar,
  forEach,
  buscarObjeto,
  rls,
  rlsUtil,
  momentEs,
  axiosEs,
  lodashEs,
  streamEnEspanol,
  sistemaOperativo,
  caracterEn,
  retornar,
  //ADDONS
  validarTipo,
  consologuear,
  ejecutarScriptPython,
  definirVariable,
  variables,
  fsEs,
  //ADDONS.OTHERS
  factorial,
  invertirCadena,
  invertirArray,
  contarVocales,
  obtenerInformacionSistema,
  esAnagrama,
  esPalindromo,
  convertirABinario,
  validarTarjeta,
  pruebasScrum,
  generateQR,
  convertidorDeUnidades,
  GestorDeClaves,
  iniciarSesion,
  GenerarClavesDeWindows95,
  conectarSFTP,
  leerArchivoWord,
  leerPDF,
  convertirEXEaHexadecimal,
  leerProcesoEnLaMemoria,
  creditosDeTypeScriptEspanol
  //Importar otro mas, ingrese con comas
};