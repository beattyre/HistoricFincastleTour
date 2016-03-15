var map;

function initmap() {
  map = new L.map('map');
  // Add basemap from OSM
  var osmHot = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttributes = 'Map Data @ <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';
  var osm = new L.tileLayer(osmHot, {
    minZoom: 15,
    maxZoom: 18,
    attribution: osmAttributes
  });

  map.setView(new L.LatLng(37.499, -79.875), 17);
  map.addLayer(osm);
};
initmap();


$.getJSON("https://rawgit.com/beattyre/WebMapTest/gh-pages/TestPoints.geojson", function(data) {
  L.geoJson(data, {
  onEachFeature: function(feature, layer){
    layer.bindPopup("<b>Stop Number: </b>" + feature.properties.Stop_No +
        "<br><b>Location Name: </b>" + feature.properties.name)
  }
  }).addTo(map);
});
var info = L.control();

info.onAdd = function(map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function(props){
  this._div.innterHTML = "<b>Stop Number: </b>" + (props.Stop_No +
        "<br><b>Location Name: </b>" + props.name);
};

info.addTo(map);
