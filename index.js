// fetch('cars.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// fetch('tracks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const getJSON = async url => {
    const response = await fetch('cars.json');
    if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);
    
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
    }
    
console.log("Fetching data...");
getJSON('cars.json').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
