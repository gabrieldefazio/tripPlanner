console.log("we're so cool");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "YOUR API TOKEN HERE";  //we don't know yet??

const map = new mapboxgl.Map({ 
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});