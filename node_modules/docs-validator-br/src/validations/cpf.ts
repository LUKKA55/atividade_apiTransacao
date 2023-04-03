import { mod11 } from '../utils/mod11';
import { isRepeated } from '../utils/isRepetead';

export function isValidCpf(value: string): boolean {
  const cpfClean = value.replace(/\D/g, '');
  const sizeCpf = 11;

  if (cpfClean.length !== 11) return false;

  if (isRepeated(cpfClean)) return false;

  const baseCpf = cpfClean.substring(0, 9);
  const firstDigit = calculateFirstDigit(baseCpf);
  const baseCpfWithFirstDigit = baseCpf.concat(String(firstDigit));
  const secondDigit = calculateSecondDigit(baseCpfWithFirstDigit);

  const cpfCompare = baseCpfWithFirstDigit + secondDigit;

  return cpfClean === cpfCompare;
}

export function calculateFirstDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0;

  let i = 10;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (mod11(sumDigits)) < 2 ? 0 : (11 - mod11(sumDigits));
}

export function calculateSecondDigit(baseCpf: string): number {
  const digitsCpfBase = baseCpf.split('');
  let sumDigits = 0
  
  let i = 11;

  digitsCpfBase.forEach(digitCpfBase => {
    sumDigits += Number(digitCpfBase) * i;

    i--;
  });

  return (mod11(sumDigits)) < 2 ? 0 : (11 - mod11(sumDigits));
}