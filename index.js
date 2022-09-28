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

let classA = ''
let classB = ''
let classC = ''
let special = ''

function validate() {
    if (document.getElementById('a-cars').checked) {
        classA = true;
    } else {
        classA = false;
    }
    if (document.getElementById('b-cars').checked) {
        var classB = true;
    } else {
        var classB = false;
    }
    if (document.getElementById('c-cars').checked) {
        var classC = true;
    } else {
        var classC = false;
    } 
    if (document.getElementById('special-cars').checked) {
        var special = true;
    } else {
        var special = false;
    } 
}

// Funtion to create and array of cars. -> Still need to make dynamic and add extra filters





async function renderCars() {
    let cars = await getCars();
    let filteredCars = [];
    let html = '';
    validate();
    cars.forEach(car => {
        if ((classA = true && car.class == ("A"))) {
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