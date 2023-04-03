import { isRepeated } from "../utils/isRepetead";
import { mod11 } from "../utils/mod11";

export function isValidCnpj(value: string): boolean {
  const cnpjClean = value.replace(/\D/g, '');
  const sizeCnpj = 14;

  if (cnpjClean.length !== sizeCnpj) return false;

  if (isRepeated(cnpjClean)) return false;

  const baseCnpj = cnpjClean.substring(0, 12);
  const firstDigit = calculateDigit(baseCnpj);
  const baseCnpjWithFirtDigit = baseCnpj + firstDigit;
  const secondDigit = calculateDigit(baseCnpjWithFirtDigit);
  const cnpjCompare = baseCnpjWithFirtDigit + secondDigit;

  return cnpjCompare === cnpjClean;
}

export function calculateDigit(baseCnpj: string): number {
  const digitsCnpjBase = baseCnpj.split('');
  let sumDigits = 0;
  let mult = 2;

  for (let index = digitsCnpjBase.length - 1; index >= 0; index--) {
    if(mult > 9) mult = 2;

    sumDigits += Number(digitsCnpjBase[index]) * mult;

    mult ++;
  }

  return (mod11(sumDigits)) < 2 ? 0 : (11 - mod11(sumDigits));
}