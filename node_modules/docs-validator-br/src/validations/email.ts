export function isValidEmail(value: string): boolean {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  if (regex.test(value)) {
    return true;
  }

  return false;
}