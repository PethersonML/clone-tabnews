const calculadora = require("../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const result = calculadora.sum(2, 2);
  expect(result).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const result = calculadora.sum(5, 100);
  expect(result).toBe(105);
});

test("Somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const result = calculadora.sum("banana", 100);
  expect(result).toBe("Erro");
});
