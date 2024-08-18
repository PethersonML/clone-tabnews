function isOperationValid(num1, num2) {
  if ((num1 === null || num1 === undefined) || (num2 === null || num2 === undefined)) {
    return "You are missing a parameter";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "The parameters are invalid";
  }
  return false;
}

function doNotDivideByZero(num) {
  return num === 0 ? "NÃO DIVIDIRÁS POR ZERO" : false;
}

function somar(numero1, numero2) {
  const isValid = isOperationValid(numero1, numero2);
  return !isValid ? numero1 + numero2 : isValid;
}

function subtrair(numero1, numero2) {
  const isValid = isOperationValid(numero1, numero2);
  return !isValid ? numero1 - numero2 : isValid;
}

function multiplicar(numero1, numero2) {
  const isValid = isOperationValid(numero1, numero2);
  return !isValid ? numero1 * numero2 : isValid;
}

function dividir(numero1, numero2) {
  const isValid = isOperationValid(numero1, numero2);
  if (!isValid) {
    const zero = doNotDivideByZero(numero2);
    return !zero ? numero1 / numero2 : zero;
  }
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;