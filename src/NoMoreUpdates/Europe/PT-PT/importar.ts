// Project Credits

// Main Developer:
// Name: Tiziano Luzi Ramos
// Email: tizianoluziramos@gmail.com
// Github: https://github.com/tizianoluziramos

// License:
// This project is licensed under the MIT License.

// Creation Date: November 2024

import { sim } from "./IF/helper.ts";
import { consola } from "./console.ts";
import { ciclos } from "./for.ts";
import { enquanto } from "./while.ts";
import { caso } from "./switch.ts";
import { tentarCapturar } from "./try.ts";
import { definirTempo } from "./setTimeout.ts";
import { promessa } from "./Promise.ts";
import momentPt from "./Extras/moment-es.ts";
import axiosPt from "./Extras/axios-es.ts";
import lodashPt from "./Extras/lodash-es.ts";
import streamEmPortugues from './Extras/stream-web-es.ts';
import sistemaOperacional, { obterInformacoesSistema } from './Extras/os-es.ts';

import { 
  mapear, 
  filtrar, 
  reduzir, 
  encontrar, 
  encontrarIndice, 
  incluir, 
  unir, 
  dividir, 
  ordenar, 
  inverter, 
  concatenar, 
  empurrar, 
  eliminar, 
  cortar, 
  paraCada 
} from './arrayUtil.ts';

import { procurarObjeto } from "./find.ts";
import rlsUtil from "./rlsUtils.ts";
import { creditosDeTypeScriptPortugues } from "./Extras/Creditos.ts";
import { caracterEm } from './charAt.ts';
import { retornar } from "./return.ts";

// ADDONS
import { validarTipo } from "./AddOns/validarTipo.ts";
import { consologuear } from "./AddOns/Consologuear.ts";
import { executarScriptPython } from "./AddOns/RunPython.ts";
import { definirVariavel, variaveis } from "./const.ts";
import { fsPt } from "./AddOns/fsEs.ts";
import { fatorial } from './AddOns/Others/Factorial.ts';
import { inverterString } from "./AddOns/Others/InvertirCadena.ts";
import { inverterArray } from './AddOns/Others/invertirarray.ts';
import { contarVogais } from './AddOns/Others/contarVocales.ts';
import { eAnagrama } from './AddOns/Others/esAnagrama.ts';
import { ePalindromo } from './AddOns/Others/esPalindromo.ts';
import { converterABinario } from './AddOns/Others/convertirDeNumeroABinario.ts';
import { validarCartao } from './AddOns/Others/validarTarjeta.ts';
import { provasScrum } from './AddOns/Others/pruebaDeScrum.ts';
import { gerarQR } from './AddOns/Others/generarQR.ts';
import * as convertidorDeUnidades from './AddOns/Others/convertidorDeUnidades.ts';
import { iniciarSessao, GestorDeChaves } from './AddOns/Others/LoginSystems/login1.ts';
import { GerarChavesDeWindows95 } from './AddOns/Others/Activator/Windows95.ts';
import { conectarSFTP } from './AddOns/Other/AccesoFTP.ts';
import { lerArquivoWord } from './AddOns/Other/leerArchivoWord.ts';
import { lerPDF } from './AddOns/Other/leerArchivoPDF.ts';
import { converterEXEaHexadecimal } from './AddOns/Other/convertirEXEaHexadecimal.ts';
import { lerProcessoNaMemoria } from './AddOns/Other/leerMemoriaRAM.ts';
import { criarServidor } from './AddOns/Other/crearServidor.ts';
import { baixarArquivo } from './AddOns/Other/descargarArchivo.ts';
import { perguntarAGPT, perguntarRede, treinarRede, normalizarTexto } from './Update/CustomIASystem.ts';
import * as Formula1 from './Update/f1/importar.ts';
import { GamepadPt, InfraestruturaGamepadPt } from './Nuevo/GamepadToKeyboard.ts';
import { converterPascalParaTypeScript } from './Nuevo/convertirDePascalATypeScript.ts';
import { converterPythonParaTypeScript } from './Nuevo/convertirDePythonATypeScript.ts';
import { obterPrecoBitcoin } from './Nuevo/btc.ts';
import { obterSubscritoresPorId } from './Nuevo/YoutubeSubscribers.ts';
import { romanoAPortugues } from './Nuevo/romanoAEspanol.ts';
import { pausarCodigoEmTempo } from './Nuevo/pausarCodigo.ts';
import { fechaEHora } from './Nuevo/fechaActual.ts';

// Nuevo 
import { documento, CSSStyle } from './NuevoNuevo/document.ts';
import { ipPt } from "./NuevoNuevo/@types_ip.ts";

export {
  sim,
  consola,
  ciclos,
  enquanto,
  caso,
  tentarCapturar,
  definirTempo,
  promessa,
  momentPt,
  axiosPt,
  lodashPt,
  streamEmPortugues,
  sistemaOperacional,
  obterInformacoesSistema,
  mapear,
  filtrar,
  reduzir,
  encontrar,
  encontrarIndice,
  incluir,
  unir,
  dividir,
  ordenar,
  inverter,
  concatenar,
  empurrar,
  eliminar,
  cortar,
  paraCada,
  procurarObjeto,
  rlsUtil,
  creditosDeTypeScriptPortugues,
  caracterEm,
  retornar,
  validarTipo,
  consologuear,
  executarScriptPython,
  definirVariavel,
  variaveis,
  fsPt,
  fatorial,
  inverterString,
  inverterArray,
  contarVogais,
  eAnagrama,
  ePalindromo,
  converterABinario,
  validarCartao,
  provasScrum,
  gerarQR,
  convertidorDeUnidades,
  iniciarSessao,
  GestorDeChaves,
  GerarChavesDeWindows95,
  conectarSFTP,
  lerArquivoWord,
  lerPDF,
  converterEXEaHexadecimal,
  lerProcessoNaMemoria,
  criarServidor,
  baixarArquivo,
  perguntarAGPT,
  perguntarRede,
  treinarRede,
  normalizarTexto,
  Formula1,
  GamepadPt,
  InfraestruturaGamepadPt,
  converterPascalParaTypeScript,
  converterPythonParaTypeScript,
  obterPrecoBitcoin,
  obterSubscritoresPorId,
  romanoAPortugues,
  pausarCodigoEmTempo,
  fechaEHora,
  documento,
  CSSStyle,
  ipPt
};
