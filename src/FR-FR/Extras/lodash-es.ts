// lodash-fr.ts
import _ from 'lodash';

const lodashFr = {
    // Méthodes de manipulation des tableaux
    ajouter: (tableau: any[], valeur: any) => _.concat(tableau, valeur), // _.concat
    supprimer: (tableau: any[], valeur: any) => _.pull(tableau, valeur), // _.pull
    filtrer: (tableau: any[], predicat: (valeur: any) => boolean) => _.filter(tableau, predicat), // _.filter
    mapper: (tableau: any[], transformation: (valeur: any) => any) => _.map(tableau, transformation), // _.map
    reduire: (tableau: any[], accumulateur: (acc: any, val: any) => any, initial?: any) => _.reduce(tableau, accumulateur, initial), // _.reduce
    trouver: (tableau: any[], predicat: (valeur: any) => boolean) => _.find(tableau, predicat), // _.find
    trier: (tableau: any[], cle: string | string[]) => _.orderBy(tableau, [cle]), // _.orderBy
    inverser: (tableau: any[]) => _.reverse(tableau), // _.reverse
    joindre: (tableau: any[], separateur: string = ',') => _.join(tableau, separateur), // _.join

    // Méthodes de manipulation des objets
    obtenir: (objet: object, cle: string) => _.get(objet, cle), // _.get
    definir: (objet: object, cle: string, valeur: any) => _.set(objet, cle, valeur), // _.set
    supprimerPropriete: (objet: object, cle: string) => _.unset(objet, cle), // _.unset
    fusionner: (...objets: object[]) => _.merge({}, ...objets), // _.merge
    cloner: (objet: object) => _.cloneDeep(objet), // _.cloneDeep
    cles: (objet: object) => _.keys(objet), // _.keys
    valeurs: (objet: object) => _.values(objet), // _.values
    entrees: (objet: object) => _.toPairs(objet), // _.toPairs

    // Méthodes de manipulation des chaînes
    majuscules: (texte: string) => _.toUpper(texte), // _.toUpper
    minuscules: (texte: string) => _.toLower(texte), // _.toLower
    capitaliser: (texte: string) => _.capitalize(texte), // _.capitalize
    remplacer: (texte: string, chercher: string, remplacement: string) => _.replace(texte, chercher, remplacement), // _.replace
    diviser: (texte: string, separateur: string) => _.split(texte, separateur), // _.split

    // Méthodes utilitaires
    identite: (valeur: any) => _.identity(valeur), // _.identity
    constante: (valeur: any) => _.constant(valeur), // _.constant
    aleatoire: (min: number, max: number) => _.random(min, max), // _.random
    maintenant: () => _.now(), // _.now
};

// Exporter le module en français
export default lodashFr;
