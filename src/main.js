import TripPresenter from './presenter/trip-presenter.js';
import WaypointsModel from './model/point-model';


const waypointModel = new WaypointsModel();
const siteFilterElement = document.querySelector('.trip-controls');
const siteMainElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({
  filterContainer: siteFilterElement, waypointModel,
  siteMainContainer: siteMainElement
});

tripPresenter.init();
