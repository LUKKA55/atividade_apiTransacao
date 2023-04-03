import { isValidCnpj } from '../cnpj';

describe('cnpj', () => {
  it('should return false when value length is different from fourteen', () => {
    expect(isValidCnpj('4567898764856')).toBe(false);
  });

  it('should return false when repetead all digits', () => {
    expect(isValidCnpj('00000000000000')).toBe(false);
  });

  it('should return true when cnpj is valid', () => {
    expect(isValidCnpj('59225871000156')).toBe(true);
  });

  it('should return true when cnpj is valid with mask', () => {
    expect(isValidCnpj('44.524.801/0001-21')).toBe(true);
  });

  it('should return true when cnpj is valid with mask', () => {
    expect(isValidCnpj('71.037.931/0001-02')).toBe(true);
  });
});