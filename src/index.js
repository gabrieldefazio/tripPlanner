console.log("we're so cool");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
const marker = buildMarker("activity", [-74.009151, 40.705086]);

mapboxgl.accessToken = "pk.eyJ1IjoibWlzc2FuaWNoa2EiLCJhIjoiY2o4YnNpODV1MDFhczJ3cG0wNWRpcmtpdyJ9.vdrU_rE5GS8Gh5mMdH1MhQ";

const map = new mapboxgl.Map({ 
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

marker.addTo(map);