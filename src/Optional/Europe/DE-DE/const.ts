// Objekt zum Speichern von Variablen
const variablen: Record<string, any> = {};

// Funktion zum Definieren einer Variablen im Format "name: typ = wert"
function variableDefinieren(zuweisung: string) {
  // Verwendung eines regulären Ausdrucks, um den Namen, Typ und Wert zu extrahieren
  const regex = /^(?<name>\w+):\s*(?<typ>\w+)\s*=\s*(.+)$/;
  const match = zuweisung.match(regex);

  if (match) {
    const name = match[1]; // Erster Erfassungsgruppe
    const typ = match[2]; // Zweiter Erfassungsgruppe
    const wert = match[3]; // Dritter Erfassungsgruppe

    // Den Wert in den entsprechenden Typ umwandeln
    let wertUmgewandelt: any;
    switch (typ.toLowerCase()) {
      case 'number':
        wertUmgewandelt = Number(wert);
        break;
      case 'string':
        wertUmgewandelt = String(wert);
        break;
      case 'boolean':
        wertUmgewandelt = wert.toLowerCase() === 'true';
        break;
      default:
        console.log(`Fehler: Typ '${typ}' nicht erkannt.`);
        return;
    }

    // Die Variable im Objekt speichern
    variablen[name] = wertUmgewandelt;
  } else {
    console.log('Fehler: Ungültiges Zuweisungsformat. Verwenden Sie "name: typ = wert".');
  }
}

/*variableDefinieren('hallo: string = 2');
console.log(variablen["hallo"]);*/
// Exportiere die Funktion und die Variablen
export { variableDefinieren, variablen };
