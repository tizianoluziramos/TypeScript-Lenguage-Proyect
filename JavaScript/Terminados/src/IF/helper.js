"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.si = si;
// helper.ts
const if_1 = require("./if");
function si(condicion) {
    return new if_1.Si(condicion);
}
/*
//EJEMPLO DE USO(muy dificil jeje)

si(0 === 0)
.entonces(() => {
  console.log("hola");
}).sino(() => {
  console.log("holaaa");
});
*/ 
