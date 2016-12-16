import * as Actions from './actions/actions';
import * as Scripts from './scripts/scripts';

const start = ()=> {
  Scripts.endEvent();
  Actions.fixSize();
  Scripts.showTexts();
};

const init = ()=> {
  start();
};

window.onload = init();
