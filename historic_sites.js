	// Create map variable
var map = L.map('map').setView([37.499, -79.874], 16);

// Add basemap from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken} ', {
  attribution: 'Basemap from <a href="http://mapbox.com">Mapbox</a>,   ' +
  'design by <a href="http://co.botetourt.va.gov>Botetourt County</a>. ',
  maxZoom: 20,
  minZoom: 12,
  id: 'beattyre.pbhimakk',
  accessToken: 'pk.eyJ1IjoiYmVhdHR5cmUiLCJhIjoiMjFmNWViOGFhMmJmZjZjOGZlODU3MDM1MzNlZmM5N2UifQ.OTWiU0TYOnTvH6H6DSngTg'
	}).addTo(map);
// Start GeoJSON
