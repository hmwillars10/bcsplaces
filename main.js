


mapboxgl.accessToken = 'pk.eyJ1Ijoiamhtd2lsbGFycyIsImEiOiJja2EydW1mMWIwOG81M2V0YjNuaDZwcmdsIn0.bk6lHmzR3zuGMg8LADBNlw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[-111.666069,26.044445],
zoom:6
})

 

 let element = document.createElement('div')
 element.className = 'marker'


 let marker = new mapboxgl.Marker(element)
 .setLngLat({

 	lng:-111.666069,
 	lat:26.044445
 })
 .addTo(map)