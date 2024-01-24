const fs = require('fs');

// Read the content of the 'HouseRentDataset.json' file
fs.readFile('HouseRentDataset.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
    const dataSet = JSON.parse(data);


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
const displayRental2 = data => {
  if (!data || data.length === 0) {
    console.log("No data or empty dataset");
    return;
  }
  const filteredData = data.filter((house) => house && house.Rent && house.Rent <= 25000);
  return `Number of houses with rent less than 25000: ${filteredData.length}`;
}

const numRent2 = displayRental2(dataSet);
console.log(numRent2);

// Imperative Approach (sort)
// Sort by Rent in ascending order
function sortRent(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j].Rent > data[j + 1].Rent) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

const sortedRent = sortRent(dataSet);
console.log(sortedRent);

// Functional Approach (sort)
const sortRent2 = (data) => {
  if (!data || data.length === 0) {
    console.log("No data or empty dataset");
    return [];
  }

  // Create a new array with the sorted values
  const sortedRent = [...data].sort((a, b) => a.Rent - b.Rent);
  return sortedRent;
}


const sorted = sortRent2(dataSet);
console.log(sorted);

// Imperative Approach (reduce)
// Calculate BHK that are less than 3
function totalData(data){
  let total = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i].BHK < 3){
      total++;
    }
  }
  return `Houses with less than 3 BHK is: ${total}`;
}

const total = totalData(dataSet)
console.log(total);

// Functional Approach (reduce)
const totalData2 = (data) => {
  if (!data || data.length === 0) {
    console.log("No data or empty dataset");
    return;
  }

  const total = data.reduce((accumulator, currentValue) => 
    currentValue && currentValue.BHK && currentValue.BHK < 3 ? accumulator + 1 : accumulator,
    0
  );

  return `Houses with less than 3 BHK is: ${total}`;
}

const total2 = totalData2(dataSet);
console.log(total2);

// Imperative Approach (map)
// Display all the cities in the dataset once
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
const displayCity2 = (data) => {
  if (!data || data.length === 0) {
    console.log("No data or empty dataset");
    return;
  }

  const uniqueCities = new Set(
    data
      .map((house) => house && house.City) // Extract city values
      .filter((city) => city !== null && city !== undefined)
  );

  uniqueCities.forEach((city) => {
    console.log(city);
  });
}


// displayCity2(dataSet);

// Imperative Approach (curry)
// Update the city of the first house in the dataset to 'Bangalore'
function setCity(city) {
  return function (house) {
      return {
          ...house,
          City: city,
      };
  };
}
const originalCity = dataSet[0];
console.log(originalCity);
const updatedCity = setCity("Bangalore")(dataSet[0]);
console.log(updatedCity);

// Functional Approach (curry)
const setCity2 = (city) => (house) => {
  if (house && typeof house === 'object') {
    // Use Object.assign to ensure immutability
    const updatedHouse = Object.assign({}, house, { City: city });

    // Recursively apply setCity2 to nested objects
    for (const prop in updatedHouse) {
      if (updatedHouse.hasOwnProperty(prop) && typeof updatedHouse[prop] === 'object') {
        updatedHouse[prop] = setCity2(city)(updatedHouse[prop]);
      }
    }

    return updatedHouse;
  } else {
    // Handle the case where house is not a valid object
    return { City: city };
  }
};

const originalCity2 = dataSet[0];
console.log(originalCity2);
const updatedCity2 = setCity2("Bangalore")(dataSet[0]);
console.log(updatedCity2);

});