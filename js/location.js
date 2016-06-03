function distance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1).toRad();  // Javascript functions in radians
  var dLon = (lon2 - lon1).toRad();
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d * 1000 //distance in m
}

var currentCoordinates = [0, 0];
var clCoordinates = [51.469575, -0.070683];

window.navigator.geolocation.getCurrentPosition(function (pos) {
  currentCoordinates[0] = pos.coords.longitude;
  currentCoordinates[1] = pos.coords.latitude;
  var d = Math.round(distance(pos.coords.longitude, pos.coords.latitude, clCoordinates[1], clCoordinates[0]))
  console.log(pos);
  console.log('distance: ' + d);
  document.getElementById('loc').textContent = d;
});

function getAngle(coordinates) {
  var alpha = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
}

/** Converts numeric degrees to radians */
if (typeof (Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function () {
    return this * Math.PI / 180;
  }
}

var color = function (){
  var c = randomColor();
   $('body').css('background-color', c);
  
}

var video = function(){
 
  $('#video').toggleClass('active');
 
}

$(document).ready(function () {
  window.setInterval(color, 1500)
  window.setInterval(video, 35000)

})
