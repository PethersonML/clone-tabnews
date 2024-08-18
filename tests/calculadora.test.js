const calculadora = require("../models/calculadora.js");

test("Parâmetro 'null' ou 'undefined' = 'You are missing a parameter'", () => {
  const resultado = calculadora.somar(100);
  expect(resultado).toBe("You are missing a parameter");
});

test("Parâmetro diferente de `number` = 'The parameters are invalid'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("The parameters are invalid");
});

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Subtrair 5 - 2 deveria retornar 3", () => {
  const resultado = calculadora.subtrair(5, 2);
  expect(resultado).toBe(3);
});

test("Subtrair 5 - 100 deveria retornar -95", () => {
  const resultado = calculadora.subtrair(5, 100);
  expect(resultado).toBe(-95);
});

test("Multiplicar 2 * 5 deveria retornar 10", () => {
  const resultado = calculadora.multiplicar(2, 5);
  expect(resultado).toBe(10);
});

test("Multiplicar 5 * 100 deveria retornar 500", () => {
  const resultado = calculadora.multiplicar(5, 100);
  expect(resultado).toBe(500);
});

test("Se o segundo parâmetro de uma divisão for 0 = 'NÃO DIVIDIRÁS POR ZERO'", () => {
  const resultado = calculadora.dividir(10, 0);
  expect(resultado).toBe("NÃO DIVIDIRÁS POR ZERO");
})

test("Dividir 10 / 2 deveria retornar 5", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});

test("Somar 5 / 100 deveria retornar 0.05", () => {
  const resultado = calculadora.dividir(5, 100);
  expect(resultado).toBe(0.05);
});
