import { describe, it, expect } from "vitest";
import { promesa } from "../../src/Vanilla/Promise";

describe("promesa<T>", () => {
  it("debe ejecutar onFulfilled cuando se resuelve", () => {
    const p = new promesa<string>((resolve, reject) => {
      resolve("éxito");
    });

    let valor = "";
    p.then(
      (res) => {
        valor = res;
      },
      () => {
        // no debe llamarse
        throw new Error("No debería rechazarse");
      }
    );

    expect(valor).toBe("éxito");
  });

  it("debe ejecutar onRejected cuando se rechaza", () => {
    const p = new promesa<string>((resolve, reject) => {
      reject("error");
    });

    let error = "";
    p.then(
      () => {
        // no debe llamarse
        throw new Error("No debería resolverse");
      },
      (err) => {
        error = err;
      }
    );

    expect(error).toBe("error");
  });

  it("debe no fallar si onRejected no está definido y se rechaza", () => {
    const p = new promesa<string>((resolve, reject) => {
      reject("error");
    });

    // Como no hay onRejected, no debe lanzar ni hacer nada
    p.then((res) => {
      throw new Error("No debería resolverse");
    });

    // Si llega acá, el test pasa porque no lanzó error
    expect(true).toBe(true);
  });
});
