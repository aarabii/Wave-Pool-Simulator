import UI from './UI.js';

export default class App {
  constructor({amount, container}) {
    this.amount = amount;
    this.container = container;
    this.counter = 0;
    this.init();
  }
  init() {
    while (this.counter++ < this.amount) {
      const li = document.createElement('li');
      li.style.setProperty('--delay', `-${this.counter/12}s`);
      const dir = this.counter % 2 ? 'normal' : 'normal'; // reverse
      li.classList = `conic-spinner ${dir}`;
      UI.$(`.${this.container}`).appendChild(li);
    }
  }
}