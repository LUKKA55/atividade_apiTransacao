import { isValidCpf, calculateFirstDigit, calculateSecondDigit } from '../cpf';
import { mod11 } from '../../utils/mod11';

describe('cpf', () => {
  it('should return false when value length is different from eleven', () => {
    expect(isValidCpf('198765435877')).toBe(false);
  });

  it('should return false when repetead all digits', () => {
    expect(isValidCpf('00000000000')).toBe(false);
  });

  it('should return nine when cpf base is 012345678', () => {
    expect(calculateFirstDigit('012345678')).toBe(9);
  });

  it('should return zero when cpf base is 052351400', () => {
    expect(calculateFirstDigit('052351400')).toBe(0);
  });

  it('should return zero when cpf base with first digit is 0123456789', () => {
    expect(calculateSecondDigit('0123456789')).toBe(0);
  });

  it('should return nine when cpf base with first digit is 3244700004', () => {
    expect(calculateSecondDigit('3244700004')).toBe(9);
  });

  it('should return true when cpf is valid', () => {
    expect(isValidCpf('01234567890')).toBe(true);
  });

  it('should return true when cpf is valid with mask', () => {
    expect(isValidCpf('012.345.678-90')).toBe(true);
  });
});