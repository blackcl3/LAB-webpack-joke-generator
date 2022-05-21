import renderToDom from '../helpers/renderToDom';

const renderMainPage = (response) => {
  const domString = `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Joke Generator</h1>
      <p class="lead">${response.setup}</p>
      <p class="lead">${response.delivery}</p>
      <p class="lead">
      <button class="btn btn-primary btn-lg" role="button" id="jokeButton">Get Joke</button>
      <button class="btn btn-primary btn-lg" role="button" id="resetButton">Reset</button>
    </div>
  </div>
`;
  renderToDom('#app', domString);
};

export default renderMainPage;
