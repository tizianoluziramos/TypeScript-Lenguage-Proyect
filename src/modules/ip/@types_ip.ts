interface IpModule {
  aBuffer(ip: string, buff?: Buffer, offset?: number): Buffer;
  aCadena(buff: Buffer, offset?: number, longitud?: number): string;
  esV4Formato(ip: string): boolean;
  esV6Formato(ip: string): boolean;
  desdeLongitudPrefijo(longitudPrefijo: number, familia?: string | number): string;
  mascara(direccion: string, mascara: string): string;
  cidr(cadenaCIDR: string): string;
  subred(direccion: string, mascara: string): any;
  cidrSubred(cadenaCIDR: string): any;
  no(direccion: string): string;
  o(a: string, b: string): string;
  esIgual(a: string, b: string): boolean;
  esPrivada(direccion: string): boolean;
  esPublica(direccion: string): boolean;
  esLoopback(direccion: string): boolean;
  loopback(familia?: string | number): string;
  direccion(nombre?: string, familia?: string | number): string | undefined;
  desdeLongitud(ip: string): number;
}

const ip = require('./ip.js') as IpModule;

export default ip;