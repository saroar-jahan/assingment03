
// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.

let p = document.getElementById('p');

function getGeolocationName(){
    
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition)
  }
  
}

function showPosition(position){
  let gLatitude = position.coords.latitude;
  let gLongitude = position.coords.longitude;

  p.innerText = `Latitute is: ${gLatitude}, Longitude is: ${gLongitude}`;
}

