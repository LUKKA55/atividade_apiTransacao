export function isValidCep(value: string) {
  const cepClean = value.replace(/\D/g, '');
  const cepSize = 8

  return !(cepClean.length !== cepSize);
}