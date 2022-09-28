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

// Funtion to create and array of cars. -> Still need to make dynamic and add extra filters

var filteredCars = [];

async function renderCars() {
    let cars = await getCars();
    let html = '';

    cars.forEach(car => {
        if (car.Class == "A") {
            var tempCar = (car.Index);
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