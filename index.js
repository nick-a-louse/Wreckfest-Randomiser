<!--./index.js-->

// Missing the bus in the JSON!!

// Function to get checkbox values

var classA = true;
var classB = true;
var classC = true;
var classD = true;
var special = false;

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

// Funtion to create and array of cars. -> Still need to add extra filters

async function renderCars() {

    let cars = await getCars();
    let filteredCars = [];
    let numCars = 0;
    let html = '';
    // console.log("special: "+ special);
    // console.log("classs A: " + classA);
    validate();
    cars.forEach(car => {
        if ((((classA == true && car.class == ("A"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classA == true && car.class == ("A"))) && ((special == true))) ||
        (((classB == true && car.class == ("B"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classB == true && car.class == ("B"))) && ((special == true))) ||
        (((classC == true && car.class == ("C"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classC == true && car.class == ("C"))) && ((special == true))) ||
        (((classD == true && car.class == ("D"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classD == true && car.class == ("D"))) && ((special == true))))
        {
            var tempCar = (car.index);
            filteredCars.push((tempCar));  
        };
    numCars = filteredCars.length;
   
    });

// Choosing a random number car from the array
// console.log("Array Length: " + numCars); 
chosenCar = Math.floor(Math.random() * (numCars+1));
// console.log("Random Car Number: " + chosenCar);
// console.log(filteredCars);

console.log(cars[chosenCar].name);
console.log("./wreckfest_cars"+cars[chosenCar].carImage);
console.log(cars[chosenCar].summary);
}

//renderCars();

// async function getCars() {
//     let url = './cars.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderCars() {
//     let cars = await getCars();
//     let html = '';
//     let filteredCars = '';
//     cars.forEach(car => {
//         let htmlSegment = `<div class="user">
//                             <h2>${car.Index} ${car.Name}</h2>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderCars();