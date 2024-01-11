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

displayHouses(dataSet);


// Functional Approach (forEach)
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

// Imperative Approach (filter)
// Rent less than 25000
function displayRental(data) {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].Rent <= 25000) {
      count++;
    }
  }

  return ("Number of houses with rent less than 25000: " + count);
}

const numRent = displayRental(dataSet)
console.log(numRent);

// Functional Approach (filter)
function displayRental2(data) {
  let numRent = 0;


  data.filter((house) => {
      if (house.Rent <= 25000) {
          numRent++;
      }
  });
  return ("Number of houses with rent less than 25000: " + numRent);
}

const numRent2 = displayRental2(dataSet);
console.log(numRent2);

// Imperative Approach (sort)
// Sort by Rent in ascending order
function sortRent(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].Rent > data[j + 1].Rent) {
        // Swap elements if they are in the wrong order
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  console.log(data.Rent);
}

sortRent(dataSet);

// Functional Approach (sort)
function sortRent2(data) {
  const sortedRent = data.sort((a, b) => a.Rent - b.Rent);
  console.log(sortedRent);
}

sortRent2(dataSet);

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
const originalHouse = dataSet[0];
console.log(originalHouse);
const updatedHouse = setCity("Bangalore")(dataSet[0]);
console.log(updatedHouse);

// Functional Approach (curry)
const setCity2 = (city) => (house) => ({ ...house, City: city });
const originalHouse2 = dataSet[1];
console.log(originalHouse2);
const updatedHouse2 = setCity2("Bangalore")(dataSet[1]);
console.log(updatedHouse);

});