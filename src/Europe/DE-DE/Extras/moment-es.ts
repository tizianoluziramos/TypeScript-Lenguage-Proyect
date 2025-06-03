// moment-de.ts
import moment from 'moment';

const momentDe = {
    // Aktuelles Datum und Uhrzeit erhalten
    jetzt: () => moment(),

    // Datum formatieren
    formatieren: (datum: moment.Moment, format: string) => datum.format(format),

    // Zeit hinzufügen
    hinzufuegen: (datum: moment.Moment, menge: number, einheit: moment.unitOfTime.DurationConstructor) => 
        datum.add(menge, einheit),

    // Zeit subtrahieren
    subtrahieren: (datum: moment.Moment, menge: number, einheit: moment.unitOfTime.DurationConstructor) => 
        datum.subtract(menge, einheit),

    // Beginn des Tages
    beginnDesTages: (datum: moment.Moment) => datum.startOf('day'),

    // Ende des Tages
    endeDesTages: (datum: moment.Moment) => datum.endOf('day'),

    // Daten vergleichen
    istVorher: (datum1: moment.Moment, datum2: moment.Moment) => datum1.isBefore(datum2),
    istNachher: (datum1: moment.Moment, datum2: moment.Moment) => datum1.isAfter(datum2),
    istGleich: (datum1: moment.Moment, datum2: moment.Moment) => datum1.isSame(datum2),

    // Unterschied berechnen
    differenz: (datum1: moment.Moment, datum2: moment.Moment, einheit: moment.unitOfTime.Diff) => 
        datum1.diff(datum2, einheit),

    // Wochentag erhalten
    wochentag: (datum: moment.Moment) => datum.day(),

    // Monat erhalten
    monat: (datum: moment.Moment) => datum.month(),

    // Jahr erhalten
    jahr: (datum: moment.Moment) => datum.year(),

    // Datum manuell bearbeiten
    naechsterMonat: (datum: moment.Moment) => datum.add(1, 'months'),
    letzterMonat: (datum: moment.Moment) => datum.subtract(1, 'months'),

    // Dauer erhalten
    dauer: (dauer: number, einheit: moment.unitOfTime.DurationConstructor) => 
        moment.duration(dauer, einheit),

    // Formatierte Dauer
    dauerFormatiert: (dauer: moment.Duration, format: string) => 
        dauer.humanize(),
};

export default momentDe;
