
mapboxgl.accessToken = 'pk.eyJ1IjoiYmhvciIsImEiOiJjbTNnZGhtbWkwM3J3MmtzZGlsMG5zbjVpIn0.PO_HiCtdGYiAsbdv06u5bw';


const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.3606, 46.2331]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Sion',
          'image': '/images/sion.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.6585, 45.9766]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Mutterhorn',
          'image': '/images/mutterhorn.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.1753, 46.1987]
        },
        'properties': {
          'title': 'Mapbox',
          'description': "Les Bains d'Ovronnaz",
          'image': '/images/thermal1.jpg'
        }
      }
    ]
  };



const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [7.5449, 46.2200], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 8 // starting zoom
});

map.on('load', function() {
    // Add source for country boundaries
    map.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1'
    });
  
    // Add a layer with Switzerland's border
    map.addLayer({
      id: 'switzerland-border',
      type: 'line',
      source: 'countries',
      'source-layer': 'country_boundaries',
      paint: {
        'line-color': 'red',
        'line-width': 3
      },
      filter: [
        'all',
        ['==', ['get', 'iso_3166_1'], 'CH'],
        ['==', ['get', 'disputed'], 'false']
      ]
    });
  });
 
// add markers to map
function addMarker(feature) {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
     .setPopup(
     new mapboxgl.Popup({ offset: 25 })
    .setHTML(
      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><img src="${feature.properties.image}">`
    )
)
.addTo(map);
}

// Adding markers from the geojson data
geojson.features.forEach(addMarker);