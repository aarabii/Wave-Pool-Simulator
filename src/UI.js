export default class UI {
  constructor() {
  }
  static $(el) {
    return document.querySelector(el);
  }
  static $$(el) {
    return document.querySelectorAll(el);
  }
  static getCSSVar(prop) {
    return getComputedStyle(this.docElem()).getPropertyValue(prop).trim();
  }
  static docElem() {
    return document.documentElement;
  }
}