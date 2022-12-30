import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'hh:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTravelDay(dateFrom) {
  return dateFrom ? dayjs(dateFrom).format(DATE_FORMAT) : '';
}

function humanizeTimeFromTo(dateTo) {
  return dateTo ? dayjs(dateTo).format(TIME_FORMAT) : '';
}

function humanizeTravelTime(from, to) {
  return dayjs(to).diff(dayjs(from), 'h');
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export {getRandomArrayElement, getRandomNumber, humanizeTimeFromTo, humanizeTravelDay, humanizeTravelTime};

