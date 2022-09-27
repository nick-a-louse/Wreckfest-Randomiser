<!--./index.js-->

const url = "./cars.json";

const fetchJson = async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();  
  } catch (error) {
    console.log(error);
  }
 };

 fetchJson();