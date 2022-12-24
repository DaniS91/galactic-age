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

  test('should correctly create a venusAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.venusAge).toEqual(31 * .62);
  });

  test('should correctly create a marsAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.marsAge).toEqual(31 * 1.88);
  });

  test('should correctly create a jupiterAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31);
    expect(myGalacticAge.jupiterAge).toEqual(31 * 11.86);
  });

  test('should correctly create a sinceEarthAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21);
    expect(myGalacticAge.sinceEarthAge).toEqual(31 - 21);
  });

  test('should correctly create a sinceMercuryAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21);
    expect(myGalacticAge.sinceMercuryAge).toEqual((31 - 21) * .24);
  });

  test('should correctly create a sinceVenusAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21);
    expect(myGalacticAge.sinceVenusAge).toEqual((31 - 21) * .62);
  });

  test('should correctly create a sinceMarsAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21);
    expect(myGalacticAge.sinceMarsAge).toEqual((31 - 21) * 1.88);
  });

  test('should correctly create a sinceJupiterAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21);
    expect(myGalacticAge.sinceJupiterAge).toEqual((31 - 21) * 11.86);
  });
  
  test('should correctly create an untilEarthAge property in GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(31, 21, 61);
    expect(myGalacticAge.untilEarthAge).toEqual(61-31);
  });
});