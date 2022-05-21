import getJoke from '../../api/jokeData';

const events = () => {
  const jokeButton = document.querySelector('#jokeButton');
  jokeButton.addEventListener('click', () => {
    getJoke().then((response) => {
      jokeButton.innerHTML = `${response.delivery}`;
    });
  });
  const resetButton = document.querySelector('#resetButton');
  resetButton.addEventListener('click', (e) => {
    console.warn(e);
  });
};

export default events;
