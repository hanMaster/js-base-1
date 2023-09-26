const addressLat = -4;
const addressLong = 3;

const positionLat = 2;
const positionLong = -5;

const distance = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);

console.log('Distance:', distance);
