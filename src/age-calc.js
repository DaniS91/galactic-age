export default class GalacticAge {
  constructor(age, passedAge, futureAge) {
    this.earthAge = age;
    this.mercuryAge = age * .24;
    this.venusAge = age * .62;
    this.marsAge = age * 1.88;
    this.jupiterAge = age * 11.86;
    this.sinceEarthAge = age - passedAge;
    this.sinceMercuryAge = this.sinceEarthAge * .24;
    this.sinceVenusAge = this.sinceEarthAge * .62;
    this.sinceMarsAge = this.sinceEarthAge * 1.88;
    this.sinceJupiterAge = this.sinceEarthAge * 11.86;
    this.untilEarthAge = futureAge - age;
    this.untilMercuryAge = this.untilEarthAge * .24;
    this.untilVenusAge = this.untilEarthAge * .62;
    this.untilMarsAge = this.untilEarthAge * 1.88;
    this.untilJupiterAge = this.untilEarthAge * 11.86;
  }
}