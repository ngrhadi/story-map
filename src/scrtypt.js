var worldmap = d3.geomap()
  .geofile('./indonesia.json');

worldmap.draw(d3.select('#maps'));
