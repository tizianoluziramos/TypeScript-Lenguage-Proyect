import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Para usar funciones tipo describe, it sin importar importarlas
    environment: "jsdom", // O 'jsdom' si haces tests con DOM
    include: ["test/**/*.test.ts"], // Qué archivos correr como tests
    coverage: {
      reporter: ["text", "lcov"], // Reportes de cobertura
    },
  },
});
