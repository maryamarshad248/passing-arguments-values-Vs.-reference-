'use strict';

const flight = 'LH123';
const Noman = {
  name: 'Noman Ejaz',
  passport: 8765432256,
};
const checkIn = function (flightnum, passenger) {
  flightnum = 7862109;
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 8765432256) {
    alert('checkedIn');
  } else {
    alert('Wrong passport');
  }
};
//console.log(flight);
//console.log(Noman);
//checkIn(flight, Noman);

// example
const newPassport = function (person) {
  person.passport = 1234567890;
};
//newPassport(Noman);
console.log(flight);
console.log(Noman);
checkIn(flight, Noman);
