import {createElement} from '../render.js';
import { POINT_TYPES } from '../const.js';
import { getDestinationForPointId } from '../mock/points.js';

function createEditFormTemplate(waypoints) {
  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${getTypesTemplate(POINT_TYPES)}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${getDestinationForPointId(waypoints[0]).name}" list="destination-list-1">
          ${getDestintationsTemplate(waypoints)}
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
          ${getOffersTemplate(waypoints)}
          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${getDestinationForPointId(waypoints[0]).description}</p>
        </section>
      </section>
    </form>`
  );
}

function getTypeTemplate(type) {
  return(
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${type}</label>
    </div>`
  );
}

function getTypesTemplate(types) {
  return types.map((type)=>getTypeTemplate(type))
    .join('');
}

function getDestinationTemplate(destination) {
  const {name} = destination;
  return (
    `<option value="${name}"></option>`
  );
}

function getDestintationsTemplate(waypoints) {
  const destintaions = waypoints.map((waypoint)=>getDestinationForPointId(waypoint));
  const options = destintaions.map((destination) =>getDestinationTemplate(destination))
    .join('');

  return(
    `<datalist id="destination-list-1">
        ${options}
    </datalist>`
  );
}

function getOfferTemplate(offer) {
  const {title, price} = offer;
  return (
    `<div class="event__offer-selector">
     <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
       <label class="event__offer-label" for="event-offer-luggage-1">
       <span class="event__offer-title">${title}</span>
       &plus;&euro;&nbsp;
       <span class="event__offer-price">${price}</span>
       </label>
    </div>`
  );
}

function getOffersTemplate(waypoints) {
  const offers = waypoints.reduce((accumulator, currentValue)=> accumulator.concat(currentValue.offers), []);
  return offers.map((offer)=>getOfferTemplate(offer))
    .join('');
}

export default class EditFormView {
  constructor (waypoints){
    this.waypoints = waypoints;
  }

  getTemplate() {
    return createEditFormTemplate(this.waypoints);
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
