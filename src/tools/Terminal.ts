export type ManejadorDeComando = (ctx: {
  argumentos: string[];
  opciones: Record<string, string | boolean>;
  terminal: Terminal;
  entrada?: string;
}) => void | Promise<void>;

export interface Comando {
  descripcion: string;
  uso?: string;
  alias?: string[];
  oculto?: boolean;
  deshabilitado?: boolean;
  color?: string;
  permiso?: "admin" | "usuario" | "invitado";
  ejecutar: ManejadorDeComando;
  subcomandos?: Record<string, Comando>;
}

export interface OpcionesDeTerminal {
  prompt?: string;
  tema?: "predeterminado" | "oscuro" | "minimalista" | "matrix";
  mostrarLog?: boolean;
  usuario?: "admin" | "usuario" | "invitado";
  historialPersistente?: string;
}

export class Terminal {
  private comandos = new Map<string, Comando>();
  private aliasGlobales = new Map<string, string>();
  private historial: string[] = [];
  private variables: Record<string, string> = {};
  private prompt: string;
  private tema: string;
  private mostrarLog: boolean;
  private usuario: "admin" | "usuario" | "invitado";
  private archivoHistorial?: string;

  constructor(opciones: OpcionesDeTerminal = {}) {
    this.prompt = opciones.prompt ?? "$";
    this.tema = opciones.tema ?? "predeterminado";
    this.mostrarLog = opciones.mostrarLog ?? true;
    this.usuario = opciones.usuario ?? "usuario";
    this.archivoHistorial = opciones.historialPersistente;
    if (this.archivoHistorial) this.cargarHistorial();
    this.registrarComandosBase();
  }

  private registrarComandosBase() {
    this.registrarComando("ayuda", {
      descripcion: "Muestra la lista de comandos",
      uso: "ayuda [comando]",
      ejecutar: ({ argumentos, terminal }) => {
        if (argumentos[0]) {
          const comando = terminal.obtener(argumentos[0]);
          if (comando) {
            terminal.log(
              `🔹 ${argumentos[0]}: ${comando.descripcion}\nUso: ${
                comando.uso ?? "(no especificado)"
              }`
            );
            if (comando.subcomandos) {
              terminal.log("Subcomandos:");
              for (const sub in comando.subcomandos) {
                terminal.log(
                  `  • ${sub}: ${comando.subcomandos[sub].descripcion}`
                );
              }
            }
            return;
          }
          terminal.log(`Comando no encontrado: ${argumentos[0]}`);
          return;
        }

        for (const [nombre, comando] of terminal.comandos) {
          if (comando.oculto || comando.deshabilitado) continue;
          terminal.log(
            `• ${nombre} ${
              comando.alias?.length
                ? `(alias: ${comando.alias.join(", ")})`
                : ""
            }`
          );
        }
      },
    });

    this.registrarComando("limpiar", {
      descripcion: "Limpia el historial",
      ejecutar: () => {
        this.historial = [];
        console.clear();
        this.log("🧼 Historial limpiado.");
      },
    });

    this.registrarComando("historial", {
      descripcion: "Muestra el historial",
      ejecutar: () => {
        this.historial.forEach((linea, i) => this.log(`${i + 1}: ${linea}`));
      },
    });

    this.registrarComando("definir", {
      descripcion: "Define una variable",
      uso: "definir NOMBRE VALOR",
      ejecutar: ({ argumentos, terminal }) => {
        const [nombre, ...valor] = argumentos;
        terminal.variables[nombre] = valor.join(" ");
        terminal.log(`✅ ${nombre} = "${terminal.variables[nombre]}"`);
      },
    });

    this.registrarComando("mostrar", {
      descripcion: "Muestra el valor de una variable",
      uso: "mostrar NOMBRE",
      ejecutar: ({ argumentos, terminal }) => {
        const valor = terminal.variables[argumentos[0]];
        terminal.log(
          valor !== undefined
            ? `${argumentos[0]} = "${valor}"`
            : "❌ Variable no definida"
        );
      },
    });

    this.registrarComando("variables", {
      descripcion: "Muestra todas las variables",
      ejecutar: ({ terminal }) => {
        Object.entries(terminal.variables).forEach(([nombre, valor]) =>
          terminal.log(`${nombre} = "${valor}"`)
        );
      },
    });

    this.registrarComando("ejecutar", {
      descripcion: "Ejecuta comandos desde un archivo",
      uso: "ejecutar archivo.txt",
      ejecutar: async ({ argumentos, terminal }) => {
        const fs = await import("fs/promises");
        const ruta = argumentos[0];
        const contenido = await fs.readFile(ruta, "utf-8");
        for (const linea of contenido.split(/\r?\n/)) {
          await terminal.ejecutar(linea);
        }
      },
    });
  }

  public registrarComando(nombre: string, comando: Comando) {
    this.comandos.set(nombre, comando);
    comando.alias?.forEach((alias) => this.aliasGlobales.set(alias, nombre));
  }

  public obtener(nombre: string): Comando | undefined {
    return this.comandos.get(this.aliasGlobales.get(nombre) ?? nombre);
  }

  public async ejecutar(entrada: string) {
    if (!entrada.trim()) return;
    if (this.archivoHistorial) this.guardarEnHistorial(entrada);
    this.historial.push(entrada);

    for (const linea of entrada.split("&&")) {
      const limpia = linea.trim();
      const inicio = Date.now();
      const tokens = this.tokenizar(limpia);
      const [nombre, ...resto] = tokens;
      const comando = this.obtener(nombre);
      if (!comando)
        return this.log(`❌ Comando no encontrado: ${nombre}`, "error");
      if (comando.deshabilitado) return this.log(`⛔ Comando deshabilitado`);
      if (comando.permiso && comando.permiso !== this.usuario)
        return this.log(`🔒 Permiso requerido: ${comando.permiso}`);

      const { argumentos, opciones, redirSalida, redirEntrada, silencioso } =
        this.analizar(resto);
      let contenidoEntrada = "";
      if (redirEntrada) {
        const fs = await import("fs/promises");
        contenidoEntrada = await fs.readFile(redirEntrada, "utf-8");
      }

      const contexto = {
        argumentos,
        opciones,
        terminal: this,
        entrada: contenidoEntrada,
      };

      try {
        await comando.ejecutar(contexto);
        if (!silencioso)
          this.log(
            `✔ Comando "${nombre}" finalizado (${Date.now() - inicio}ms)`
          );
        if (redirSalida) {
          const fs = await import("fs/promises");
          await fs.writeFile(
            redirSalida,
            this.historial[this.historial.length - 1] + "\n"
          );
        }
      } catch (error) {
        this.log(`❌ Error: ${(error as Error).message}`, "error");
      }
    }
  }

  private tokenizar(entrada: string): string[] {
    return (
      entrada.match(/"[^"]+"|\S+/g)?.map((t) => t.replace(/^"|"$/g, "")) ?? []
    );
  }

  private analizar(partes: string[]) {
    const argumentos: string[] = [];
    const opciones: Record<string, string | boolean> = {};
    let redirSalida: string | null = null;
    let redirEntrada: string | null = null;
    let silencioso = false;

    for (let i = 0; i < partes.length; i++) {
      const parte = partes[i];
      if (parte.startsWith("--")) {
        const [clave, valor] = parte.substring(2).split("=");
        if (clave === "silencioso") silencioso = true;
        else opciones[clave] = valor ?? true;
      } else if (parte === ">") {
        redirSalida = partes[++i];
      } else if (parte === "<") {
        redirEntrada = partes[++i];
      } else {
        argumentos.push(parte);
      }
    }

    return { argumentos, opciones, redirSalida, redirEntrada, silencioso };
  }

  public log(
    mensaje: string,
    nivel: "info" | "advertencia" | "error" = "info"
  ) {
    if (!this.mostrarLog) return;
    const colores = {
      info: "\x1b[32m",
      advertencia: "\x1b[33m",
      error: "\x1b[31m",
    };
    const prefijo = colores[nivel];
    const reset = "\x1b[0m";
    console.log(`${prefijo}${mensaje}${reset}`);
  }

  private async guardarEnHistorial(comando: string) {
    if (!this.archivoHistorial) return;
    const fs = await import("fs/promises");
    await fs.appendFile(this.archivoHistorial, comando + "\n");
  }

  private async cargarHistorial() {
    try {
      const fs = await import("fs/promises");
      const contenido = await fs.readFile(this.archivoHistorial!, "utf-8");
      this.historial = contenido.split(/\r?\n/).filter(Boolean);
    } catch {
      this.historial = [];
    }
  }

  public mostrarPrompt(): string {
    return this.prompt
      .replace(/\$usuario/g, this.usuario)
      .replace(/\$hora/g, new Date().toLocaleTimeString());
  }

  public obtenerHistorial(): string[] {
    return [...this.historial];
  }

  public async exportarHistorialAArchivo(ruta: string): Promise<void> {
    const fs = await import("fs/promises");
    await fs.writeFile(ruta, this.historial.join("\n"));
  }

  public eliminarComando(nombre: string): boolean {
    const original = this.aliasGlobales.get(nombre) ?? nombre;
    return this.comandos.delete(original);
  }

  public listarComandos(): string[] {
    return [...this.comandos.entries()]
      .filter(([, cmd]) => !cmd.oculto && !cmd.deshabilitado)
      .map(([nombre]) => nombre);
  }

  public establecerVariable(nombre: string, valor: string): void {
    this.variables[nombre] = valor;
  }

  public obtenerVariable(nombre: string): string | undefined {
    return this.variables[nombre];
  }

  public establecerTema(
    tema: "predeterminado" | "oscuro" | "minimalista" | "matrix"
  ): void {
    this.tema = tema;
  }

  public deshabilitarComando(nombre: string): void {
    const cmd = this.obtener(nombre);
    if (cmd) cmd.deshabilitado = true;
  }

  public habilitarComando(nombre: string): void {
    const cmd = this.obtener(nombre);
    if (cmd) cmd.deshabilitado = false;
  }

  public cambiarPrompt(nuevoPrompt: string): void {
    this.prompt = nuevoPrompt;
  }

  public listarVariables(): Record<string, string> {
    return { ...this.variables };
  }

  public async importarModulo(ruta: string): Promise<any> {
    try {
      const modulo = await import(ruta);
      if (!modulo || typeof modulo !== "object") {
        throw new Error("El módulo no es válido o no exporta un objeto.");
      }
      this.log(`✅ Módulo importado: ${ruta}`);
      return modulo;
    } catch (error) {
      this.log(
        `❌ Error al importar módulo: ${(error as Error).message}`,
        "error"
      );
      return null;
    }
  }
}
