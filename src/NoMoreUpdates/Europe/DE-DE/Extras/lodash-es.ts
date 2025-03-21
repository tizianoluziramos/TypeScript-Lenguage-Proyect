// lodash-de.ts
import _ from 'lodash';

const lodashDe = {
    // Methoden zur Array-Manipulation
    hinzufuegen: (array: any[], wert: any) => _.concat(array, wert), // _.concat
    entfernen: (array: any[], wert: any) => _.pull(array, wert), // _.pull
    filtern: (array: any[], prädikat: (wert: any) => boolean) => _.filter(array, prädikat), // _.filter
    abbilden: (array: any[], transformation: (wert: any) => any) => _.map(array, transformation), // _.map
    reduzieren: (array: any[], akkumulator: (acc: any, val: any) => any, initial?: any) => _.reduce(array, akkumulator, initial), // _.reduce
    finden: (array: any[], prädikat: (wert: any) => boolean) => _.find(array, prädikat), // _.find
    sortieren: (array: any[], schlüssel: string | string[]) => _.orderBy(array, [schlüssel]), // _.orderBy
    umkehren: (array: any[]) => _.reverse(array), // _.reverse
    verbinden: (array: any[], trennzeichen: string = ',') => _.join(array, trennzeichen), // _.join

    // Methoden zur Objekt-Manipulation
    abrufen: (objekt: object, schlüssel: string) => _.get(objekt, schlüssel), // _.get
    setzen: (objekt: object, schlüssel: string, wert: any) => _.set(objekt, schlüssel, wert), // _.set
    eigenschaftEntfernen: (objekt: object, schlüssel: string) => _.unset(objekt, schlüssel), // _.unset
    zusammenfuehren: (...objekte: object[]) => _.merge({}, ...objekte), // _.merge
    klonen: (objekt: object) => _.cloneDeep(objekt), // _.cloneDeep
    schluessel: (objekt: object) => _.keys(objekt), // _.keys
    werte: (objeto: object) => _.values(objeto), // _.values
    eintraege: (objekt: object) => _.toPairs(objekt), // _.toPairs

    // Methoden für Zeichenketten
    grossbuchstaben: (text: string) => _.toUpper(text), // _.toUpper
    kleinbuchstaben: (text: string) => _.toLower(text), // _.toLower
    kapitalisieren: (text: string) => _.capitalize(text), // _.capitalize
    ersetzen: (text: string, suchen: string, ersatz: string) => _.replace(text, suchen, ersatz), // _.replace
    teilen: (text: string, trennzeichen: string) => _.split(text, trennzeichen), // _.split

    // Hilfsmethoden
    identitaet: (wert: any) => _.identity(wert), // _.identity
    konstant: (wert: any) => _.constant(wert), // _.constant
    zufall: (min: number, max: number) => _.random(min, max), // _.random
    jetzt: () => _.now(), // _.now
};

// Das Modul auf Deutsch exportieren
export default lodashDe;
