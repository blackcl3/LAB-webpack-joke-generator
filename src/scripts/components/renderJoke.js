import renderToDom from '../helpers/renderToDom';

const renderSetup = (response) => {
  const domString = `
  <p class="lead">${response.setup ? response.setup : ''}</p>
  <div id="jokeDeliveryDiv"></div>
  `;
  renderToDom('#joke-container', domString);
};

const renderDelivery = (response) => {
  const domString = `
  <p class="lead" id="joke-delivery">${response.delivery ? response.delivery : ''}</p>
  `;
  renderToDom('#jokeDeliveryDiv', domString);
};

export { renderSetup, renderDelivery };
