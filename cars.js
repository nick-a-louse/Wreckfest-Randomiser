<!--./cars.js-->


let classA = true;
let classB = true;
let classC = true;
let classD = true;
let specialCar = false;

// Function to get checkbox values
function validate() {
    if (document.getElementById('a-cars').checked) {
        classA = true;
    } else {
        classA = false;
    }
    if (document.getElementById('b-cars').checked) {
        classB = true;
    } else {
        classB = false;
    }
    if (document.getElementById('c-cars').checked) {
        classC = true;
    } else {
        classC = false;
    } 
    if (document.getElementById('d-cars').checked) {
        classD = true;
    } else {
        classD = false;
    } 
    if (document.getElementById('special-cars').checked) {
        specialCar = true;
    } else {
        specialCar = false;
    } 
};


// Function to retrieve the car json file

async function getCars() {
    let url = './cars.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

// Function to create an array of cars

async function renderCars() {
    let cars = await getCars();
    let filteredCars = [];
    let numCars = 0;
    let html = '';
    validate();

    //Logic goes through every car in the JSON and checks it against the selected checkboxes from the HTML
    cars.forEach(car => { 
        if ((((classA === true && car.class === ("A"))) && ((specialCar === false && car.specialVehicle === ("N")))) ||
        (((classA === true && car.class === ("A"))) && ((specialCar === true))) ||
        (((classB === true && car.class === ("B"))) && ((specialCar === false && car.specialVehicle === ("N")))) ||
        (((classB === true && car.class === ("B"))) && ((specialCar === true))) ||
        (((classC === true && car.class === ("C"))) && ((specialCar === false && car.specialVehicle === ("N")))) ||
        (((classC === true && car.class === ("C"))) && ((specialCar === true))) ||
        (((classD === true && car.class === ("D"))) && ((specialCar === false && car.specialVehicle === ("N")))) ||
        (((classD === true && car.class === ("D"))) && ((specialCar === true))))
        {
            let tempCar = (car.index); // Adds any cars that meet the above criteria to a list
            filteredCars.push((tempCar));
        };
    numCars = filteredCars.length; // Counts how many cars have met the criteria
    });

// Error capture if no cars meet criteria
if (numCars == 0) {
    console.log("oh balls");
    window.alert("No cars met your selection criteria, so I suggest you drive the Rocket RX!");
    document.getElementById("nameHTML").innerHTML = (cars[58].name);
    document.getElementById("summaryHTML").innerHTML = (cars[58].summary);
    document.getElementById("baseHPHTML").innerHTML = (cars[58].baseHP);
    document.getElementById("accelerationHTML").innerHTML = (cars[58].acceleration);
    document.getElementById("topSpeedHTML").innerHTML = (cars[58].topSpeed);
    document.getElementById("corneringHTML").innerHTML = (cars[58].cornering);
    document.getElementById("strengthHTML").innerHTML = (cars[58].strength);
    document.getElementById("carImageHTML").src = ("./wreckfest_cars/"+cars[58].carImage);
    return;
};

// Get the right car index from the JSON
let randomCar = ((Math.floor(Math.random() * (numCars+1))));
let carIndex = filteredCars[randomCar];
let chosenCar = cars.findIndex(function(item, i){
  return item.index === carIndex
});

//Assigning the elements to the HTML page
document.getElementById("nameHTML").innerHTML = (cars[chosenCar].name);
document.getElementById("summaryHTML").innerHTML = (cars[chosenCar].summary);
document.getElementById("baseHPHTML").innerHTML = (cars[chosenCar].baseHP);
document.getElementById("accelerationHTML").innerHTML = (cars[chosenCar].acceleration);
document.getElementById("topSpeedHTML").innerHTML = (cars[chosenCar].topSpeed);
document.getElementById("corneringHTML").innerHTML = (cars[chosenCar].cornering);
document.getElementById("strengthHTML").innerHTML = (cars[chosenCar].strength);
document.getElementById("carImageHTML").src = ("./wreckfest_cars/"+cars[chosenCar].carImage);
};