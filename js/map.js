
mapboxgl.accessToken = 'pk.eyJ1IjoiYmhvciIsImEiOiJjbTNnZGhtbWkwM3J3MmtzZGlsMG5zbjVpIn0.PO_HiCtdGYiAsbdv06u5bw';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [7.5449, 46.1905], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 8.5 // starting zoom
});
