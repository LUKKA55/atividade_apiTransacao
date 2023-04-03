import {isValidCep } from '../cep';

describe('cep', () => {
  it('should return true when value length is equal from eight', () => {
    expect(isValidCep('86702120')).toBe(true);
  });

  it('should return true when value length is equal from eight with mask', () => {
    expect(isValidCep('86.702-120')).toBe(true);
  });

  it('should return false when value length is different from eight', () => {
    expect(isValidCep('867023109')).toBe(false);
  });
})