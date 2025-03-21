// if.ts
class Si {
  private condicion: boolean;
  private accionSino?: () => void; // Almacena la acción del else

  constructor(condicion: boolean) {
    this.condicion = condicion;
  }

  entonces(accion: () => void) {
    if (this.condicion) {
      accion(); // Ejecuta la acción si la condición es verdadera
    } else if (this.accionSino) {
      this.accionSino(); // Ejecuta la acción sino si está definida
    }
    return this; // Permite encadenar
  }

  sino(accion: () => void) {
    this.accionSino = accion; // Almacena la acción sino
    return this; // Permite encadenar
  }
}

export { Si };
