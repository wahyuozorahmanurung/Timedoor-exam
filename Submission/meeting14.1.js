// Centimeters to Meters
function cmToMeter(cm) {
  var m = cm * 0.01;
  return `${cm} cm is ${m} meter`;
}

// Centimeters to Kilometers
function cmToKilometer(cm) {
  var km = cm * 0.00001;
  return `${cm} cm is ${km} kilometer`;
}

// Centimeters to Millimeters
function cmToMillimeter(cm) {
  var mm = cm * 10;
  return `${cm} cm is ${mm} millimeter`;
}

console.log(cmToMeter(100));
console.log(cmToKilometer(100000));
console.log(cmToMillimeter(100));