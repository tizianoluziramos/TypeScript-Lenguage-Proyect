export const consola = {
  mensaje: (...args: any[]) => console.log(...args),
  error: (...args: any[]) => console.error(...args),
  advertencia: (...args: any[]) => console.warn(...args),
  info: (...args: any[]) => console.info(...args),
  depuracion: (...args: any[]) => console.debug(...args),
  traza: (...args: any[]) => console.trace(...args),

  tiempo: (nombre: string) => console.time(nombre),
  tiempoFin: (nombre: string) => console.timeEnd(nombre),

  grupo: (...args: any[]) => console.group(...args),
  grupoFin: () => console.groupEnd(),
  groupCollapsed: (...args: any[]) => console.groupCollapsed(...args),

  tabla: (data: any) => console.table(data),
  limpiar: () => console.clear(),
  afirmar: (condition: boolean, ...args: any[]) =>
    console.assert(condition, ...args),

  mostrar: (obj: any) => console.dir(obj),

  // 🔧 Simulación de dirxml (inexistente en Node.js)
  mostrarXML: (obj: any) => {
    const xml = `<xml>${JSON.stringify(obj, null, 2)}</xml>`;
    console.log(xml);
  },

  // 🔧 Simulación de profile
  perfil: (label: string) => {
    const start = Date.now();
    console.log(
      `[Perfil iniciado] ${label} - ${new Date(start).toISOString()}`
    );
    (global as any).__consola_perfiles__ =
      (global as any).__consola_perfiles__ || {};
    (global as any).__consola_perfiles__[label] = start;
  },

  // 🔧 Simulación de profileEnd
  terminarPerfil: (label: string) => {
    const end = Date.now();
    const perfiles = (global as any).__consola_perfiles__ || {};
    const start = perfiles[label];
    if (start) {
      console.log(`[Perfil terminado] ${label} - Duración: ${end - start}ms`);
      delete perfiles[label];
    } else {
      console.warn(`[Perfil no encontrado] ${label}`);
    }
  },

  // 🔧 Simulación de timeStamp
  timeStamp: (label: string) => {
    const ts = new Date().toISOString();
    console.log(`[TimeStamp] ${label}: ${ts}`);
  },

  countador: (label?: string) => console.count(label),
  reinciarContador: (label?: string) => console.countReset(label),
};
