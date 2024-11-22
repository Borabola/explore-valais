
mapboxgl.accessToken = 'pk.eyJ1IjoiYmhvciIsImEiOiJjbTNnZGhtbWkwM3J3MmtzZGlsMG5zbjVpIn0.PO_HiCtdGYiAsbdv06u5bw';


const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.2286, 46.0961]
        },
        'properties': {
          'title': 'Verbier',
          'description': 'Alpine village',
          'image': 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtJEiERk0yUhMFdmGCLQNzML3Zyz75CurohvkRezPfAGuJGs6Kuxw24phTqTEvGl_HdM09Tg4ZPflWpqJ1'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.4824, 46.3119]
        },
        'properties': {
          'title': 'Crans Montana',
          'description': 'Municipality in the district of Sierre',
          'image': 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQHNP2nOWloBQh0Ygd5R_j9m_lq33wrYT1aMx1kwMpXWbS3t698WQzvrwO0qMcmCXr3fyR8HjjJP_KgDYKmJCMMIehiy3c3LA'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.7491, 46.0207]
        },
        'properties': {
          'title': 'Zermatt',
          'description': "A mountain resort renowned for skiing, climbing and hiking.",
          'image': 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSwRiuuG9pYqCF59ziLrRvVHAe7Lauq8eZJmp0SVh3XN5R3Dxp9_ty1MNUcv5ap1hbsyJRfMfMo1oLiazWq'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.1753, 46.1978]
        },
        'properties': {
          'title': 'Ovronnaz',
          'description': "A French speaking village located in the canton of Valais.",
          'image': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRFgm9BmyQnFJWVir7xCg5fP3guUuRpn5y7QjOx2jL4_oaBHj9iuzNfAUXRoRAddWBfzrpmzg2lP-5BwJBX7SGwm-M6-WE03A'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.6288, 46.3800]
        },
        'properties': {
          'title': 'Leukerbad',
          'description': "A municipality in the district of Leuk in the canton of Valais",
          'image': 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQiKXGWUTqewXvev7FbB9Nxqpx9RTXZgFdRaMI4UbUw9fgMLdbIUCj8BsekAqyAzDNiDtxJG5cvK7T90mVvo6N7mEtziQHmOQ'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.1858, 46.1707]
        },
        'properties': {
          'title': 'Saillon',
          'description': "A municipality in the district of Martigny in the canton of Valais",
          'image': 'https://images.ctfassets.net/ukaa6ik2569a/15YQRatxjsEWFyGLyueQdO/9ef355a354be6e3ba8cbdee52aee7365/Bains-de-Saillon-rivi_re-thermale-3__nuno-acacio-RVB.jpg?f=center&w=3840&h=2560&fm=jpg&q=80&fit=fill'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [8.0531, 46.4887]
        },
        'properties': {
          'title': 'Aletsch Glacier',
          'description': "The largest glacier in the Alps.",
          'image': 'https://thephotohikes.com/wp-content/uploads/2023/08/Aletsch-Glacier-Hike-43.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.4518, 46.3484]
        },
        'properties': {
          'title': 'Bisse du Rô',
          'description': " It is a popular spot for birdwatching, hiking and running.",
          'image': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScw3YsJKtlfCYX9Pjvg7QSPXHOQaes4tS2Q4PEcjEizPvSpBE8ZYYPefB58Ct8X5_s238T1Fb8NlvJp94z0fOedftkJLvEWg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.30, 46.14]
        },
        'properties': {
          'title': 'Vallon de Réchy',
          'description': "It is an untamed natural valley.",
          'image': 'https://www.travelita.ch/wp-content/uploads/2021/07/15-Val-de-Rechy-Panorama-1200x800.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.4019, 46.2969]
        },
        'properties': {
          'title': 'Anzère',
          'description': " A south-facing purpose-built resort in traditional Swiss architectural style.",
          'image': 'https://media.myswitzerland.com/image/fetch/w_1920,h_800,c_limit,f_auto,q_auto,e_sharpen:50/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fst%2Fgadmin%2Fimages%2Flandscapes%2Fwinter%2Fmountains%2F_mg_5945_28428.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.01211, 46.2213052]
        },
        'properties': {
          'title': 'Bains de Lavey Thermal Spa',
          'description': "A thermal spa",
          'image': 'https://media.myswitzerland.com/image/fetch/w_1920,h_800,c_limit,f_auto,q_auto,e_sharpen:50/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fst%2Fgadmin%2Fimages%2Faccommodation%2Fhotels%2Fhotels%2F0702_38074.jpg'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [8.21, 46.36]
        },
        'properties': {
          'title': 'Binntal Landscape Park',
          'description': "Vast natural area dotted with mountain villages & rocky peaks connected by hiking & snowshoe trails.",
          'image': 'https://images.ctfassets.net/ukaa6ik2569a/3yzw2wahhZuYPAB8dTGLf5/d2ba73bd7449d16c767e26b71159e64a/activity-naturparks_binntal_1.jpg?f=center&w=1920&h=1280&fm=webp&q=80&fit=fill'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [7.8237, 46.2777]
        },
        'properties': {
          'title': 'Moosalpregion',
          'description': "It is an untamed natural valley.",
          'image': 'https://media.myswitzerland.com/image/fetch/w_1920,h_800,c_limit,f_auto,q_auto,e_sharpen:50/https%3A%2F%2Fwww.myswitzerland.com%2F-%2Fmedia%2Fdam%2Fresources%2Fplaces%2Fm%2Fo%2Fmoosalp%20region%2Fimages%20winter%2F51931_32001800.jpeg'
        }
      },
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

  const marker = new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
          new mapboxgl.Popup({ offset: 25 })
          .setHTML(
              `<h3 class="map-title" >${feature.properties.title}</h3>
              <a class="map-a" target="_blank" href="https://www.google.com/search?q=${feature.properties.title}">
                <img class="img-content" src="${feature.properties.image}" >
              </a>`
          )
      )
      .addTo(map);

      const card = document.getElementById('weather-card');

      el.addEventListener('click', async () => {
        const lat = feature.geometry.coordinates[1];
        const lon = feature.geometry.coordinates[0];
        const apiKey = "9d9a675927f38801a9f5c438b11b1c3b";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${apiKey}`;
      
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error("Failed to fetch data!");
          const data = await response.json();
      
          // Update weather card
          card.style.display = "block";
          document.getElementById("card-location").textContent = `Location: ${feature.properties.title}`;
          document.getElementById("card-temperature").textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById("card-description").textContent = `Condition: ${data.weather[0].description}`;
        } catch (error) {
          console.error("Error:", error);
        }
      });
}

// Adding markers from the geojson data
geojson.features.forEach(addMarker);

function ownMap(feature) {
  map.flyTo({
      center: feature.geometry.coordinates,
      zoom: 12,
      essential: true // this ensures the animation is always smooth
  });

}

