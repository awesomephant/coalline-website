var clCoordinates = [51.469575, -0.070683];
function distance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  var dLon = (lon2-lon1).toRad(); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

window.navigator.geolocation.getCurrentPosition(function(pos) {
  var d = Math.round(distance(pos.coords.longitude, pos.coords.latitude, 42.37, 71.03))
  console.log(pos); 
  console.log('distance: ' + d);
  document.getElementById('loc').textContent = d;
});

Compass.watch(function (heading) {
  document.getElementById('degrees').textContent(heading);
  document.getElementById('compass').style.transform('rotate(' + (-heading) + 'deg)');
});

Compass.noSupport(function () {
  document.getElementById('compass').className += ' hidden';
});