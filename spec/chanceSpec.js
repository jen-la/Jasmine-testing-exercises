describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      // spy on coin.flip and change its return value to always be true - need to do this, because app depends on external factor (whether coin.flip() returns true/false, of which there's a 50% chance)
      spyOn(coin, 'flip').and.returnValue(true);

      const result = headsOrTails();
      expect(result).toBe('heads');
    });
  });

  // write specs for when coin flip is false
  describe('when the coin flip is false', () => {
    it('should return tails', () => {
      spyOn(coin, 'flip').and.returnValue(false);

      const result = headsOrTails();
      expect(result).toBe('tails');
    });
  });
});
