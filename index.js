const getJSON(jsonUrl) = async url => {
    const response = await fetch(jsonUrl);
    if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);
    
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
    }
 
console.log("Fetching track data...");
getJSON('tracks.json').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

console.log("Fetching car data...");
getJSON('cars.json').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

