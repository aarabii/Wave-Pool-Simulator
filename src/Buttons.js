import UI from './UI.js';
import Utils from './Utils.js';

export default class Buttons {
  constructor(inputs) {
    this.playState = UI.getCSSVar('--play-state');
    this.chrome = navigator.userAgent.includes('Chrome');
    this.safari = navigator.userAgent.includes('Safari');
    this.firefox = navigator.userAgent.includes('Firefox');
    this.isSafari = !(this.chrome && this.safari) && !this.firefox;
    this.init(inputs);
  }
  init(inputs) {
    // Play / pause button
    UI.$('#play-state').addEventListener('click', (e) => {
      this.playState = this.playState == 'running' ? 'paused' : 'running';
      UI.docElem().style.setProperty('--play-state', this.playState);
      UI.$('.btn-text').textContent = this.playState == 'running' ? 'Pause' : 'Play';
      UI.$('.fas').classList.toggle('fa-play');
      UI.$('.fas').classList.toggle('fa-pause');
    });
    // Randomise button
    UI.$('#randomise').addEventListener('click', (e) => {
      Object.entries(inputs).forEach(([id, obj]) => {
        const rand = Utils.randomNum(Number(obj.min), Number(obj.max));
        UI.$(`#${id}`).value = Number(rand);
        const eventType = (this.isSafari && id == 'speed') ? 'change' : 'input';
        this.triggerEvent(UI.$(`#${id}`), eventType);
      });
    });
    // workaround for Safari input event not being detected
    if (this.isSafari) {
      UI.$('#speed').addEventListener('mousedown', (e) => {
        UI.docElem().style.setProperty('--play-state', 'paused');
      });
      UI.$('#speed').addEventListener('mouseup', (e) => {
        if (this.playState == 'running') UI.docElem().style.setProperty('--play-state', 'running');
      });
    }
  }
  // Improved compatibility for IE
  triggerEvent(el, type) {
    // IE9+ and other modern browsers
    if ('createEvent' in document) {
      const event = document.createEvent('HTMLEvents');
      event.initEvent(type, false, true);
      el.dispatchEvent(event);
    } else {
      // IE8
      const event = document.createEventObject();
      event.eventType = type;
      el.fireEvent('on' + event.eventType, event);
    }
  }
}


