import FilterView from '../view/filter-view.js';
import WaypointView from '../view/waypoint-view.js';
import SortView from '../view/sort-view.js';
import ListWaypointView from '../view/list-waypoint-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointsModel from '../model/point-model.js';
import {render} from '../render.js';

export default class TripPresenter {
  ListWaypointView = new ListWaypointView();
  SortView = new SortView();
  PointsModel = new PointsModel();

  constructor({filterContainer, siteMainContainer}) {
    this.filterContainer = filterContainer;
    this.siteMainContainer = siteMainContainer;
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(this.SortView, this.siteMainContainer);
    render(this.ListWaypointView, this.siteMainContainer);
    render(new EditFormView(this.PointsModel.points), this.ListWaypointView.getElement());

    for (let i = 0; i < this.PointsModel.points.length; i++) {
      const waypoint = this.PointsModel.points[i];
      render(new WaypointView(waypoint), this.ListWaypointView.getElement());
    }
  }
}
