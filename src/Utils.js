export default class Utils {
  constructor() {
  }
  static randomNum(min, max) {
    return Number(Math.random() * (max - min) + min).toFixed(2);
  }
}