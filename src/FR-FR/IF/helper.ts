import { Si } from './if'

export function oui(condicion: boolean) {
  return new Si(condicion);
}

