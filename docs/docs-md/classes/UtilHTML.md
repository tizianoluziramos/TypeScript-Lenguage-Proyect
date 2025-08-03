[**@tizianoluziramos/tslproject**](../README.md)

***

[@tizianoluziramos/tslproject](../globals.md) / UtilHTML

# Class: UtilHTML

Defined in: [tools/HTML/htmlUtils.ts:1](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L1)

## Constructors

### Constructor

> **new UtilHTML**(): `UtilHTML`

#### Returns

`UtilHTML`

## Methods

### agregarClase()

> `static` **agregarClase**(`elemento`, `clase`): `void`

Defined in: [tools/HTML/htmlUtils.ts:25](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L25)

Agrega una clase al elemento (sirve para ponerle estilos).

#### Parameters

##### elemento

`HTMLElement`

El elemento al que se le quiere poner la clase.

##### clase

`string`

El nombre de la clase (por ejemplo: "rojo").

#### Returns

`void`

***

### borrar()

> `static` **borrar**(`elemento`): `void`

Defined in: [tools/HTML/htmlUtils.ts:51](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L51)

Borra un elemento de la página.

#### Parameters

##### elemento

`HTMLElement`

El elemento que se quiere borrar.

#### Returns

`void`

***

### buscar()

> `static` **buscar**(`selector`): `null` \| `HTMLElement`

Defined in: [tools/HTML/htmlUtils.ts:43](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L43)

Busca un elemento que ya está en la página.

#### Parameters

##### selector

`string`

El nombre o clase del elemento (por ejemplo: "#miDiv" o ".caja").

#### Returns

`null` \| `HTMLElement`

El elemento encontrado o null si no existe.

***

### crearElemento()

> `static` **crearElemento**(`tipo`): `HTMLElement`

Defined in: [tools/HTML/htmlUtils.ts:7](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L7)

Crea un nuevo elemento HTML (como 'div', 'p', 'button', etc.).

#### Parameters

##### tipo

`string`

El tipo de elemento a crear (por ejemplo: "div").

#### Returns

`HTMLElement`

El nuevo elemento HTML.

***

### escribirTexto()

> `static` **escribirTexto**(`elemento`, `texto`): `void`

Defined in: [tools/HTML/htmlUtils.ts:16](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L16)

Escribe texto dentro de un elemento.

#### Parameters

##### elemento

`HTMLElement`

El elemento donde escribir.

##### texto

`string`

El texto que se quiere poner.

#### Returns

`void`

***

### ponerDentro()

> `static` **ponerDentro**(`padre`, `hijo`): `void`

Defined in: [tools/HTML/htmlUtils.ts:34](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/HTML/htmlUtils.ts#L34)

Pone el elemento dentro de otro.

#### Parameters

##### padre

`HTMLElement`

El elemento que va a contener al otro.

##### hijo

`HTMLElement`

El elemento que se quiere poner dentro.

#### Returns

`void`
