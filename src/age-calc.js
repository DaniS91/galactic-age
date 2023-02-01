export default class GalacticAge {
  constructor(age, passedAge, futureAge) {
    this.earthAge = age;
    this.mercuryAge = (age * .24).toFixed(2);
    this.venusAge = (age * .62).toFixed(2);
    this.marsAge = (age * 1.88).toFixed(2);
    this.jupiterAge = (age * 11.86).toFixed(2);
    this.sinceEarthAge = (age - passedAge).toFixed(2);
    this.sinceMercuryAge = (this.sinceEarthAge * .24).toFixed(2);
    this.sinceVenusAge = (this.sinceEarthAge * .62).toFixed(2);
    this.sinceMarsAge = (this.sinceEarthAge * 1.88).toFixed(2);
    this.sinceJupiterAge = (this.sinceEarthAge * 11.86).toFixed(2);
    this.untilEarthAge = (futureAge - age).toFixed(2);
    this.untilMercuryAge = (this.untilEarthAge * .24).toFixed(2);
    this.untilVenusAge = (this.untilEarthAge * .62).toFixed(2);
    this.untilMarsAge = (this.untilEarthAge * 1.88).toFixed(2);
    this.untilJupiterAge = (this.untilEarthAge * 11.86).toFixed(2);
  }
  listAges() {
    return `${this.earthAge} Earth years, ${this.mercuryAge} Mercury years, ${this.VenusAge} Venus years, ${this.marsAge} Mars years, and ${this.jupiterAge} Jupiter years`
  }
}