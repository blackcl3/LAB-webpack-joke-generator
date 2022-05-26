import renderToDom from '../helpers/renderToDom';

const renderMainPage = () => {
  const domString = `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Joke Generator</h1>
      <p class="lead">
      <div id="joke-container" class="joke-container"></div>
      <div id="button-container" class="button-container">
        <div id="joke-button-container" class="joke-button-container">
          <button class="btn btn-primary btn-lg" role="button" id="jokeButton">Get Joke</button>
        <div id="reset-container"></div>
        </div>
      </div>
    </div>
  </div>
`;
  renderToDom('#app', domString);
};

export default renderMainPage;
