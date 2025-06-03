import { Si } from './if.ts';

export function wenn(bedingung: boolean) {
  return new Si(bedingung);
}
