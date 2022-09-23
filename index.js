<!--./index.js-->

fetch('cars.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


fetch('tracks.json')
    .then((response) => response.json())
    .then((json) => console.log(json));