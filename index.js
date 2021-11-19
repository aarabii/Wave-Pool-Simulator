import App from './src/App.js';
import Sliders from './src/Sliders.js';
import Buttons from './src/Buttons.js';

new App({amount:100, container:'spinners'});
const sliders = new Sliders();
new Buttons(sliders.inputs);