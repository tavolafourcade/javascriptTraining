'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function(position){
      // console.log('POSITION', position) // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1669154761313}
      // console.log('Latitude', position.coords.latitude) // -12.12347
      // console.log('Longitude', position.coords.longitude) // 40.73061
      const { latitude } = position.coords
      const { longitude } = position.coords
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`)

  }, function(){
    alert('Could not get your position')
  })