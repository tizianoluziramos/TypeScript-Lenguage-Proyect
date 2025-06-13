// Project Credits

// Main Developer:
// Name: Tiziano Luzi Ramos
// Email: tizianoluziramos@gmail.com
// Github: https://github.com/tizianoluziramos

// License:
// This project is licensed under the MIT License.

// Creation Date: November 2024

import { если } from "./IF/helper.ts";
import { консоль } from "./console.ts";
import { циклы } from "./for.ts";
import { пока } from "./while.ts";
import { случай } from "./switch.ts";
import { попытатьсяПоймать } from "./try.ts";
import { установитьTimeout } from "./setTimeout.ts";
import { промис } from "./Promise.ts";
import momentRu from "./Extras/moment-es.ts";
import axiosRu from "./Extras/axios-es.ts";
import lodashRu from "./Extras/lodash-es.ts";
import потокиНаРусском from './Extras/stream-web-es.ts';
import операционнаяСистема, { получитьИнформациюОС } from './Extras/os-es.ts'

import { отображать, фильтровать, уменьшать, находить, находитьИндекс, включать, объединить, делить, сортировать, инвертировать, конкатенировать, добавить, удалить, обрезать, дляКаждого } from './arrayUtil.ts';

import { искатьОбъект } from "./find.ts";
import rlsUtil from "./rlsUtils.ts";
import { кредитыTypeScriptРусский } from "./Extras/Creditos.ts";
import { символВ } from './charAt.ts';
import { вернуть } from "./return.ts"
//ADDONS
import { проверитьТип } from "./AddOns/validarTipo.ts"
import { консольировать } from "./AddOns/Consologuear.ts"
import { выполнитьСкриптPython } from "./AddOns/RunPython.ts"
import { определитьПеременную, переменные } from "./const.ts"
import { fsRu } from "./AddOns/fsEs.ts"
import { факториал } from './AddOns/Others/Factorial.ts'
import { инвертироватьСтроку } from "./AddOns/Others/InvertirCadena.ts"
import { инвертироватьМассив } from './AddOns/Others/invertirarray.ts'
import { подсчитатьГласные } from './AddOns/Others/contarVocales.ts'
import { являетсяАнаграммой } from './AddOns/Others/esAnagrama.ts'
import { являетсяПалиндромом } from './AddOns/Others/esPalindromo.ts'
import { преобразоватьВБинарный } from './AddOns/Others/convertirDeNumeroABinario.ts'
import { validarКарта } from './AddOns/Others/validarTarjeta.ts'
import { ПробыСкрам } from './AddOns/Others/pruebaDeScrum.ts'
import { сгенерироватьQR } from './AddOns/Others/generarQR.ts'
import * as показатьМеню from './AddOns/Others/convertidorDeUnidades.ts'
import { МенеджерКлючей, войтиВСистему } from './AddOns/Others/LoginSystems/login1.ts'
import { ГенераторКлючейWindows95 } from './AddOns/Others/Activator/Windows95.ts'
import { подключитьSFTP } from './AddOns/Other/AccesoFTP.ts'
import { читатьФайлWord } from './AddOns/Other/leerArchivoWord.ts'
import { читатьPDF } from './AddOns/Other/leerArchivoPDF.ts'
import { преобразоватьEXEaHexadecimal } from './AddOns/Other/convertirEXEaHexadecimal.ts'
import { читатьПроцессВПамяти } from './AddOns/Other/leerMemoriaRAM.ts'
import { создатьСервер } from './AddOns/Other/crearServidor.ts'
import { скачатьФайл } from './AddOns/Other/descargarArchivo.ts'
import { нормализоватьТекст, обучитьСеть, спроситьСеть } from './Update/CustomIASystem.ts'
import * as Formula1 from './Update/f1/importar.ts'
import { GamepadRu, GamepadRuИнфраструктура } from './Nuevo/GamepadToKeyboard.ts'
import { преобразоватьPascalВTypeScript } from './Nuevo/convertirDePascalATypeScript.ts'
import { преобразоватьPythonВTypeScript } from './Nuevo/convertirDePythonATypeScript.ts'
import { получитьЦенуБиткойна } from './Nuevo/btc.ts'
import { получитьПодписчиковПоId } from './Nuevo/YoutubeSubscribers.ts'
import { римскиеВСплан } from './Nuevo/romanoAEspanol.ts'
import { приостановитьКод } from './Nuevo/pausarCodigo.ts'
import { датаИВремя } from './Nuevo/fechaActual.ts'
//Nuevo 
import { документ, CSSStyle } from './Nuevo/document.ts'
import { ip as ipRu } from './Nuevo/@types_ip.ts'

export {
  если,
  консоль,
  циклы,
  пока,
  случай,
  попытатьсяПоймать,
  установитьTimeout,
  промис,
  momentRu,
  axiosRu,
  lodashRu,
  потокиНаРусском,
  операционнаяСистема,
  получитьИнформациюОС,
  отображать,
  фильтровать,
  уменьшать,
  находить,
  находитьИндекс,
  включать,
  объединить,
  делить,
  сортировать,
  инвертировать,
  конкатенировать,
  добавить,
  удалить,
  обрезать,
  дляКаждого,
  искатьОбъект,
  rlsUtil,
  кредитыTypeScriptРусский,
  символВ,
  вернуть,
  проверитьТип,
  консольировать,
  выполнитьСкриптPython,
  определитьПеременную,
  переменные,
  fsRu,
  факториал,
  инвертироватьСтроку,
  инвертироватьМассив,
  подсчитатьГласные,
  являетсяАнаграммой,
  являетсяПалиндромом,
  преобразоватьВБинарный,
  validarКарта,
  ПробыСкрам,
  сгенерироватьQR,
  показатьМеню,
  МенеджерКлючей,
  войтиВСистему,
  ГенераторКлючейWindows95,
  подключитьSFTP,
  читатьФайлWord,
  читатьPDF,
  преобразоватьEXEaHexadecimal,
  читатьПроцессВПамяти,
  создатьСервер,
  скачатьФайл,
  нормализоватьТекст,
  обучитьСеть,
  спроситьСеть,
  Formula1,
  GamepadRu,
  GamepadRuИнфраструктура,
  преобразоватьPascalВTypeScript,
  преобразоватьPythonВTypeScript,
  получитьЦенуБиткойна,
  получитьПодписчиковПоId,
  римскиеВСплан,
  приостановитьКод,
  датаИВремя,
  документ,
  CSSStyle,
  ipRu
};
