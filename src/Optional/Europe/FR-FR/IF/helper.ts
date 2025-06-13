import { Si } from './if.ts'

export function oui(condicion: boolean) {
  return new Si(condicion);
}

