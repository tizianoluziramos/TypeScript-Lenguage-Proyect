// Objet pour stocker des variables
const variables: Record<string, any> = {};

// Fonction pour définir une variable sous le format "nom: type = valeur"
function definirVariable(affectation: string) {
  // Utiliser une expression régulière pour extraire le nom, le type et la valeur
  const regex = /^(?<nom>\w+):\s*(?<type>\w+)\s*=\s*(.+)$/;
  const match = affectation.match(regex);

  if (match) {
    const nom = match[1]; // Premier groupe de capture
    const type = match[2]; // Deuxième groupe de capture
    const valeur = match[3]; // Troisième groupe de capture

    // Convertir la valeur au type approprié
    let valeurConvertie: any;
    switch (type.toLowerCase()) {
      case 'number':
        valeurConvertie = Number(valeur);
        break;
      case 'string':
        valeurConvertie = String(valeur);
        break;
      case 'boolean':
        valeurConvertie = valeur.toLowerCase() === 'true';
        break;
      default:
        console.log(`Erreur : Type '${type}' non reconnu.`);
        return;
    }

    // Stocker la variable dans l'objet
    variables[nom] = valeurConvertie;
  } else {
    console.log('Erreur : Format d\'affectation invalide. Utilisez "nom: type = valeur".');
  }
}

/*definirVariable('salut: string = 2');
console.log(variables["salut"]);*/
// Exporter la fonction et les variables
export { definirVariable, variables };
