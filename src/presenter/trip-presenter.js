import FilterView from '../view/filter-view.js';
import WaypointView from '../view/waypoint-view.js';
import SortView from '../view/sort-view.js';
import ListWaypointView from '../view/list-waypoint-view.js';
import EditFormView from '../view/edit-form-view.js';
import {render} from '../render.js';
export default class TripPresenter {
  ListWaypointView = new ListWaypointView();
  SortView = new SortView();

  constructor({filterContainer, siteMainContainer}) {
    this.filterContainer = filterContainer;
    this.siteMainContainer = siteMainContainer;
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(this.SortView, this.siteMainContainer);
    render(this.ListWaypointView, this.siteMainContainer);
    render(new EditFormView(), this.ListWaypointView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointView(), this.ListWaypointView.getElement());
    }
  }
}
