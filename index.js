<!--./index.js-->

// Function to retrieve the car json file

async function getCars() {
    let url = './cars.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


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

// Funtion to create and array of cars. -> Still need to add extra filters

async function renderCars() {
    let cars = await getCars();
    let filteredCars = [];
    let html = '';
    validate();
    cars.forEach(car => {
        if ((((classA == true && car.class == ("A"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classA == true && car.class == ("A"))) && ((special == true && car.specialVehicle == ("Y")))) ||
        (((classB == true && car.class == ("B"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classB == true && car.class == ("B"))) && ((special == true && car.specialVehicle == ("Y")))) ||
        (((classC == true && car.class == ("C"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classC == true && car.class == ("C"))) && ((special == true && car.specialVehicle == ("Y")))) ||
        (((classD == true && car.class == ("D"))) && ((special == false && car.specialVehicle == ("N")))) ||
        (((classD == true && car.class == ("D"))) && ((special == true && car.specialVehicle == ("Y")))))
        {
            var tempCar = (car.index);
            filteredCars.push((tempCar));  
        };
    });
console.log(filteredCars);
}

renderCars();

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