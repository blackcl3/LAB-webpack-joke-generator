import getJoke from '../../api/jokeData';
import { renderDelivery, renderSetup } from '../components/renderJoke';
import renderResetButton from '../components/renderResetButton';

const events = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.innerHTML.includes('Get Joke')) {
      const jokeButton = document.querySelector('#jokeButton');
      getJoke()
        .then((response) => response)
        .then((response) => {
          renderSetup(response);
          renderDelivery(response);
          const jokeDelivery = document.querySelector('#joke-delivery');
          jokeDelivery.style.visibility = 'hidden';
          jokeButton.innerHTML = 'Get Punchline';
        });
    } else if (e.target.innerHTML.includes('Get Punchline')) {
      const jokeDelivery = document.querySelector('#joke-delivery');
      jokeDelivery.style.visibility = 'visible';
      renderResetButton();
    } else if (e.target.id.includes('reset')) {
      const jokeButton = document.querySelector('#jokeButton');
      getJoke()
        .then((response) => response)
        .then((response) => {
          renderSetup(response);
          renderDelivery(response);
          const jokeDelivery = document.querySelector('#joke-delivery');
          jokeDelivery.style.visibility = 'hidden';
          jokeButton.innerHTML = 'Get Punchline';
        });
    }
  });
};

export default events;
