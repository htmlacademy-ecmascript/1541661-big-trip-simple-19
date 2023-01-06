import { createElement } from '../render.js';
import { humanizeTimeFromTo, humanizeTravelDay, } from '../utils.js';
import { getDestinationForPointId } from '../mock/points.js';

function waypointTemplate(waypoint) {

  const { dateFrom, dateTo, basePrice, offers, } = waypoint;
  const destination = getDestinationForPointId(waypoint);
  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${humanizeTravelDay(dateFrom)}">${humanizeTravelDay(dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${humanizeTimeFromTo(dateFrom)}">${humanizeTimeFromTo(dateFrom)}</time>
            &mdash;
            <time class="event__end-time" datetime="${humanizeTimeFromTo(dateTo)}">${humanizeTimeFromTo(dateTo)}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${getOffersTemplate(offers)}
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

function getOfferTemplate(offer) {
  const { title, price } = offer;
  return (
    `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
    </li>`
  );
}

function getOffersTemplate(offers) {
  return (
    `<ul class="event__selected-offers">
    ${offers.map((offer) => getOfferTemplate(offer))
      .join('')}
    </ul>`
  );
}

export default class WaypointView {

  constructor(waypoint) {
    this.waypoint = waypoint;
  }

  getTemplate() {
    return waypointTemplate(this.waypoint);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
