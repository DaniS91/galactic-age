import GalacticAge from './../src/age-calc.js';

describe('GalacticAge', () => {

  test('should correctly create a GalacticAge class with an earthAge property', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.earthAge).toEqual(31);
  });

  test('should correctly create a mercuryAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.mercuryAge).toEqual(31 * .24);
  });

  test('should correctly create a mercuryAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.venusAge).toEqual(31 * .62);
  });

  test('should correctly create a mercuryAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.marsAge).toEqual(31 * 1.88);
  });
});