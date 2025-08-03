import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import axiosEs from "../../src/modules/axios-es";

vi.mock("axios");

describe("axiosEs", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("obtener", () => {
    it("debería retornar datos al obtener correctamente", async () => {
      const mockData = { mensaje: "éxito" };
      (axios.get as any).mockResolvedValue({ data: mockData });

      const resultado = await axiosEs.obtener("https://api.example.com");
      expect(resultado).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith("https://api.example.com");
    });

    it("debería lanzar un error al fallar obtener", async () => {
      const error = new Error("Fallo");
      (axios.get as any).mockRejectedValue(error);

      await expect(() => axiosEs.obtener("url")).rejects.toThrow(error);
    });
  });

  describe("enviar", () => {
    it("debería retornar datos al enviar correctamente", async () => {
      const mockData = { id: 1 };
      const datos = { nombre: "Juan" };
      (axios.post as any).mockResolvedValue({ data: mockData });

      const resultado = await axiosEs.enviar("url", datos);
      expect(resultado).toEqual(mockData);
      expect(axios.post).toHaveBeenCalledWith("url", datos);
    });

    it("debería lanzar un error al fallar enviar", async () => {
      const error = new Error("Error POST");
      (axios.post as any).mockRejectedValue(error);

      await expect(() => axiosEs.enviar("url", {})).rejects.toThrow(error);
    });
  });

  describe("actualizar", () => {
    it("debería retornar datos al actualizar correctamente", async () => {
      const mockData = { modificado: true };
      const datos = { activo: true };
      (axios.put as any).mockResolvedValue({ data: mockData });

      const resultado = await axiosEs.actualizar("url", datos);
      expect(resultado).toEqual(mockData);
      expect(axios.put).toHaveBeenCalledWith("url", datos);
    });

    it("debería lanzar un error al fallar actualizar", async () => {
      const error = new Error("Error PUT");
      (axios.put as any).mockRejectedValue(error);

      await expect(() => axiosEs.actualizar("url", {})).rejects.toThrow(error);
    });
  });

  describe("eliminar", () => {
    it("debería retornar datos al eliminar correctamente", async () => {
      const mockData = { eliminado: true };
      (axios.delete as any).mockResolvedValue({ data: mockData });

      const resultado = await axiosEs.eliminar("url");
      expect(resultado).toEqual(mockData);
      expect(axios.delete).toHaveBeenCalledWith("url");
    });

    it("debería lanzar un error al fallar eliminar", async () => {
      const error = new Error("Error DELETE");
      (axios.delete as any).mockRejectedValue(error);

      await expect(() => axiosEs.eliminar("url")).rejects.toThrow(error);
    });
  });
});
