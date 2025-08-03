[**@tizianoluziramos/tslproject**](../README.md)

***

[@tizianoluziramos/tslproject](../globals.md) / sanitizarJSON

# Function: sanitizarJSON()

> **sanitizarJSON**\<`T`\>(`obj`, `eliminarVacios`): `T`

Defined in: [tools/converters/sanitizarJSON.ts:8](https://github.com/tizianoluziramos/TypeScript-Lenguage-Proyect/blob/1a68252d6a31602ecc3346fe4bed87bd01ab43ff/src/tools/converters/sanitizarJSON.ts#L8)

Sanitiza un objeto JSON eliminando propiedades con valores null, undefined,
y opcionalmente también strings vacíos, arrays vacíos u objetos vacíos.

## Type Parameters

### T

`T`

## Parameters

### obj

`T`

El objeto JSON a sanitizar (puede ser cualquier tipo)

### eliminarVacios

`boolean` = `false`

Si es true elimina strings vacíos, arrays y objetos vacíos (default: false)

## Returns

`T`

Un nuevo objeto limpio, sin modificar el original
