import { getSaludo } from "../base/02-template-string";
import "@testing-library/react";

describe("Pruebas en el archivo template-string.js", () => {
  test("Retorna un mensaje de saludo", () => {
    const result = getSaludo("John");
    expect(result).toBe("Hola John");
  });
});
