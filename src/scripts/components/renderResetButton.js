import renderToDom from '../helpers/renderToDom';

const renderResetButton = () => {
  const domString = '<button class="btn btn-primary btn-lg" role="button" id="resetButton">Get a New Joke</button>';
  renderToDom('#reset-container', domString);
};

export default renderResetButton;
