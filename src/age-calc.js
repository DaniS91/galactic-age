export default class GalacticAgeCalc {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = age * .24;
    this.venusAge = age * .62;
    this.marsAge = age * 1.88;
    this.jupiterAge = age * 11.86;
  }
}