// helper.ts
import { Si } from './if'

export function si(condicion: boolean) {
  return new Si(condicion);
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