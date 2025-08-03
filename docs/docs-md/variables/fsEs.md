[**@tizianoluziramos/tslproject**](../README.md)

***

[@tizianoluziramos/tslproject](../globals.md) / fsEs

# Variable: fsEs

> `const` **fsEs**: `object`

Defined in: [modules/fsEs.ts:10](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/modules/fsEs.ts#L10)

## Type declaration

### actualizarArchivo()

> **actualizarArchivo**(`ruta`, `contenido`): `Promise`\<`void`\>

#### Parameters

##### ruta

`string`

##### contenido

`string`

#### Returns

`Promise`\<`void`\>

### copiarArchivo()

> **copiarArchivo**(`rutaOrigen`, `rutaDestino`): `Promise`\<`void`\>

#### Parameters

##### rutaOrigen

`string`

##### rutaDestino

`string`

#### Returns

`Promise`\<`void`\>

### crearDirectorio()

> **crearDirectorio**(`ruta`, `opciones`): `Promise`\<`void`\>

#### Parameters

##### ruta

`string`

##### opciones

###### recursive?

`boolean`

#### Returns

`Promise`\<`void`\>

### eliminarArchivo()

> **eliminarArchivo**(`ruta`): `Promise`\<`void`\>

#### Parameters

##### ruta

`string`

#### Returns

`Promise`\<`void`\>

### escribirArchivo()

> **escribirArchivo**(`ruta`, `contenido`, `opciones`): `Promise`\<`void`\>

#### Parameters

##### ruta

`string`

##### contenido

`string`

##### opciones

`Opciones` = `{}`

#### Returns

`Promise`\<`void`\>

### leerArchivo()

> **leerArchivo**(`fileName`): `Promise`\<`void`\>

#### Parameters

##### fileName

`string`

#### Returns

`Promise`\<`void`\>

### listarCarpeta()

> **listarCarpeta**(`ruta`): `Promise`\<`void`\>

#### Parameters

##### ruta

`string`

#### Returns

`Promise`\<`void`\>

### obtenerEstadisticas()

> **obtenerEstadisticas**(`rutaArchivo`): `Promise`\<`void`\>

#### Parameters

##### rutaArchivo

`string`

#### Returns

`Promise`\<`void`\>

### renombrarArchivo()

> **renombrarArchivo**(`rutaAntigua`, `rutaNueva`): `Promise`\<`void`\>

#### Parameters

##### rutaAntigua

`string`

##### rutaNueva

`string`

#### Returns

`Promise`\<`void`\>
