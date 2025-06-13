// moment-fr.ts
import moment from 'moment';

const momentFr = {
    // Obtenir la date et l'heure actuelles
    maintenant: () => moment(),

    // Formater la date
    formater: (date: moment.Moment, format: string) => date.format(format),

    // Obtenir le début de la journée
    debutDeJournee: (date: moment.Moment) => date.startOf('day'),

    // Obtenir la fin de la journée
    finDeJournee: (date: moment.Moment) => date.endOf('day'),

    // Comparer les dates
    estAvant: (date1: moment.Moment, date2: moment.Moment) => date1.isBefore(date2),
    estApres: (date1: moment.Moment, date2: moment.Moment) => date1.isAfter(date2),
    estEgal: (date1: moment.Moment, date2: moment.Moment) => date1.isSame(date2),
    // Obtenir le jour de la semaine
    jourDeLaSemaine: (date: moment.Moment) => date.day(),

    // Obtenir le mois
    mois: (date: moment.Moment) => date.month(),

    // Obtenir l'année
    annee: (date: moment.Moment) => date.year(),

    // Fonctions de manipulation de date
    moisSuivant: (date: moment.Moment) => date.add(1, 'months'),
    moisPrecedent: (date: moment.Moment) => date.subtract(1, 'months'),

    // Méthodes de formatage de la durée
    dureeFormatee: (duree: moment.Duration, format: string) =>
        duree.humanize(),
};

export default momentFr;
