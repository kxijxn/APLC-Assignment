const fs = require('fs');

// Read the content of the 'HouseRentDataset.json' file
fs.readFile('HouseRentDataset.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
    const dataSet = JSON.parse(data);



// Imperative Approach (forEach)
// Display number houses that are in Hyderabad
function displayHouses(data) {
    let hyderabadCount = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].City === "Hyderabad") {
            hyderabadCount++;
        }
    }

    console.log(`Number of houses in Hyderabad: ${hyderabadCount}`);
}

displayHouses(dataSet)

// // Functional Approach (forEach)
function displayHouses2(data) {
  let hyderabadCount = 0;

  data.forEach((house) => {
      if (house.City === "Hyderabad") {
          hyderabadCount++;
      }
  });

  console.log(`Number of houses in Hyderabad: ${hyderabadCount}`);
}

displayHouses2(dataSet);

// // Imperative Approach (filter)
// // Display the rentals that are less than or equal to 25000
function displayRental(data){
  const numRent = [];

  for (let i = 0; i < data.length; i++){
    if (data[i].Rent <= 25000){
        numRent.push(data[i]);
    }
  }
  return numRent;
}

const numRent = displayRental(dataSet)
console.log(numRent);

// // Functional Approach (filter)
function displayRental2(data) {
  const numRent = [];


  data.filter((house) => {
      if (house.Rent <= 25000) {
          numRent.push(house);
      }
  });
  console.log(numRent);
}

displayRental2(dataSet);

// Imperative Approach (reduce)
// Calculate BHK that are less than 3
function totalData(data){
  let total = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i].BHK < 3){
      total++;
    }
  }
  console.log(`Houses with less than 3 BHK is: ${total}`);
}

totalData(dataSet)

// Functional Approach (reduce)
function totalData2(data) {
  const total = data.reduce((accumulator, currentValue) => {
    return currentValue.BHK < 3 ? accumulator + 1 : accumulator;
  }, 0);

  console.log(`Houses with less than 3 BHK is: ${total}`);
}

totalData2(dataSet);

// Imperative Approach (map)
// Slice the City from the dataset
function displayCity(data){
  const city = [];
  for (let i = 0; i < data.length; i++) {
    const currentCity = data[i].City;
    if (!city.includes(currentCity)) {
      city.push(currentCity);
      console.log(currentCity);
    }
  }
}

displayCity(dataSet);

// Functional Approach (map)
// Slice the City from the dataset
function displayCity2(data) {
  const uniqueCities = new Set(data.map((house) => house.City));
  uniqueCities.forEach((city) => {
    console.log(city);
  });
}
displayCity2(dataSet);

// Imperative Approach (curry)
function setCity(city) {
  return function (house) {
      return {
          ...house,
          City: city,
      };
  };
}
const updatedHouse = setCity("Bangalore")(dataSet[0]);
console.log(updatedHouse);

// Functional Approach (curry)
const setCity2 = (city) => (house) => ({ ...house, City: city });
const updatedHouse2 = setCity2("Bangalore")(dataSet[1]);
console.log(updatedHouse);

});