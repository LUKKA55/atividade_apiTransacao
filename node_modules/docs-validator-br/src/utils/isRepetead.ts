export function isRepeated(value: string): boolean {
  const digits = value.split('');

  for (let index = 0; index < digits.length; index++) {
    if (digits[index] !== digits[0]) return false; 
  }

  return true;

}