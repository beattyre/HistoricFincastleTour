var map;

function initmap() {
  map = new L.map('map');
  // Add basemap from OSM
  var osmHot = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttributes = 'Map Data @ <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';
  var osm = new L.tileLayer(osmHot, {
    minZoom: 15,
    maxZoom: 18,
    attribution: osmAttributes,
    zoomControl: true
  });

  map.setView(new L.LatLng(37.499, -79.878), 16);
  map.addLayer(osm);
};
initmap();

$.getJSON("https://rawgit.com/beattyre/WebMapTest/gh-pages/TourSites.geojson", function(data) {
  L.geoJson(data, {
    onEachFeature: function(feature, layer){
     var stop_no = features.properties.Stop_No;
     var bldg = features.properties.name;
     var desc = features.properties.Desc;
}
 }).addTo(map)});

function onClick(e){
  $(#location).replaceWith(stop_no);
  $(#header).replaceWith(bldg);
  $(.sidebar-description).replaceWith(desc);
}

map.on('click', onClick);

map.zoomControl.setPosition('bottomright');
