import { isRepeated } from '../isRepetead';

describe('isRepetead', () => {
  it('should return true when all digits repetead', () => {
    expect(isRepeated('00000000000')).toBe(true);
  });

  it('should return false when all digits not repetead', () => {
    expect(isRepeated('12345678971')).toBe(false);
  });
})