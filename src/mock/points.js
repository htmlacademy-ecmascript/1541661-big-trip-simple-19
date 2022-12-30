import { getRandomArrayElement, getRandomNumber } from '../utils.js';
import { POINT_TYPES } from '../const.js';

const offers = [
  'Upgrade to business',
  'Upgrade to comfort',
  'Upgrade to first class',
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: getRandomArrayElement(offers),
        price: 100,
      },
      {
        id: 2,
        title: getRandomArrayElement(offers),
        price: 200,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: getRandomArrayElement(offers),
        price: 150,
      },
      {
        id: 2,
        title: getRandomArrayElement(offers),
        price: 300,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: getRandomArrayElement(offers),
        price: 70,
      },
      {
        id: 2,
        title: getRandomArrayElement(offers),
        price: 130,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: getRandomArrayElement(offers),
        price: 170,
      },
    ],
  },
];

const destinationMock1 = {
  id: 1,
  description: 'Cupidatat ut esse amet fugiat ex elit reprehenderit nostrud do magna consectetur sit.',
  name: 'Paris',
  pictures: [
    {
      src: `'https://loremflickr.com/248/152?random=${getRandomNumber(1,5000)}'`,
      description: 'Paris picture placeholder',
    },
    {
      src: `'https://loremflickr.com/248/152?random=${getRandomNumber(1,5000)}'`,
      description: 'Another picture placeholder',
    },
  ],
};

const destinationMock2 = {
  id: 2,
  description: 'I am too lazy to write lorem text',
  name: 'Chamonix',
  pictures: [
    {
      src: `'https://loremflickr.com/248/152?random=${getRandomNumber(1,5000)}'`,
      description: 'Chamonix picture placeholder',
    },
    {
      src: `'https://loremflickr.com/248/152?random=${getRandomNumber(1,5000)}'`,
      description: 'Some other picture placeholder',
    },
  ],
};

const mockDestinations = [destinationMock1, destinationMock2];

const pointMock1 = {
  id: 0,
  type: getRandomArrayElement(POINT_TYPES),
  destination: 1,
  dateFrom: '2019-03-17T12:25',
  dateTo: '2019-03-17T13:35',
  basePrice: 160,
  offers: [...mockOffers[getRandomNumber(0,2)].offers],
};

const pointMock2 = {
  id: 1,
  type: getRandomArrayElement(POINT_TYPES),
  destination: 2,
  dateFrom: '2019-03-16T14:25',
  dateTo: '2019-03-16T15:35',
  basePrice: 260,
  offers: [...mockOffers[getRandomNumber(0,2)].offers],
};

const mockPoints = [pointMock1, pointMock2];

const getOffersForPointType = (point) => mockOffers.find((offer) => offer.type === point.type);

const getDestinationForPointId = (point) => mockDestinations.find((destination) => destination.id === point.destination);

const getRandomPoint = () => getRandomArrayElement(mockPoints);

export { getRandomPoint, getOffersForPointType, getDestinationForPointId };
