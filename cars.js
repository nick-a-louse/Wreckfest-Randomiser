<!--./index.js-->


let classA = true;
let classB = true;
let classC = true;
let classD = true;
let special = false;

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
        special = true;
    } else {
        special = false;
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

// Function to create an array of cars. -> Filters still don't work properly

async function renderCars() {

    let cars = await getCars();
    let filteredCars = [];
    let numCars = 0;
    let html = '';
    validate();

 //   console.log("Class A?: " + classA) + " Class B?: " + classB + " Class C?: " + classC + " Class D?: " + classD + " Special: " + special);

    //Logic goes through every car in the JSON and checks it against the selected checkboxes from the HTML
    cars.forEach(car => { 
        if ((((classA === true && car.class === ("A"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classA === true && car.class === ("A"))) && ((special === true))) ||
        (((classB === true && car.class === ("B"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classB === true && car.class === ("B"))) && ((special === true))) ||
        (((classC === true && car.class === ("C"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classC === true && car.class === ("C"))) && ((special === true))) ||
        (((classD === true && car.class === ("D"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classD === true && car.class === ("D"))) && ((special === true))))
        {
            let tempCar = (car.index); // Adds any cars that meet the above criteria to a list
            filteredCars.push((tempCar));
        };
    numCars = filteredCars.length; // Counts how many cars have met the criteria
    });

if (numCars == 0) {
    console.log("oh balls");
    document.getElementById("nameHTML").innerHTML = ("No cars meet the selected criteria. Here's a picture of Tina instead");
    document.getElementById("summaryHTML").innerHTML = ("Sexy AF");
    document.getElementById("baseHPHTML").innerHTML = (69);
    document.getElementById("accelerationHTML").innerHTML = (10);
    document.getElementById("topSpeedHTML").innerHTML = (10);
    document.getElementById("corneringHTML").innerHTML = (10);
    document.getElementById("strengthHTML").innerHTML = (10);
    document.getElementById("carImageHTML").src = ("./wreckfest_cars/tina.jpeg");
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