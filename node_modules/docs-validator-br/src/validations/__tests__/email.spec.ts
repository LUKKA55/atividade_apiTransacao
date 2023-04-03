import { isValidEmail } from '../email';

describe('email', () => {
  it('should return true from value teste@teste.com', () => {
    expect(isValidEmail('teste@teste.com')).toBe(true);
  });

  it('should return false from value testeteste.com', () => {
    expect(isValidEmail('testeteste.com')).toBe(false);
  });
});