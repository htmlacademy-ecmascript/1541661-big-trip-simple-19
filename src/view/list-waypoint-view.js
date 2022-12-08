import {createElement} from '../render.js';

function listWaypointTemplate() {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
}

export default class ListWaypointView {
  getTemplate() {
    return listWaypointTemplate();
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
