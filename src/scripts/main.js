import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/jokeData';
import renderMainPage from './components/renderMainPage';
import events from './helpers/eventListeners';

const init = () => {
  document.querySelector('#app').innerHTML = `
  `;
  getJoke().then((response) => {
    renderMainPage(response);
    events();
  });
};

init();
