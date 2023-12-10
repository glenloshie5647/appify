Filename: complexCode.js

/* File: complexCode.js
   Description: This is a complex code example that demonstrates advanced JavaScript concepts and techniques.
*/

// Define a class for a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Calculate the age of the car
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  // Generate a unique identifier for the car
  generateUID() {
    let uid = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 6; i++) {
      uid += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return uid;
  }
}

// Create instances of the Car class
const car1 = new Car("Toyota", "Camry", 2018);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("Ford", "Mustang", 2020);

// Store the cars in an array
const cars = [car1, car2, car3];

// Print the details of each car
for (let car of cars) {
  console.log(`Brand: ${car.brand}`);
  console.log(`Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log(`Age: ${car.getAge()}`);
  console.log(`UID: ${car.generateUID()}`);
  console.log("------------------");
}

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage of the calculateSum function
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(`Sum of numbers: ${sum}`);

// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// Example usage of the filterEvenNumbers function
const filteredNumbers = filterEvenNumbers(numbers);
console.log(`Even numbers: ${filteredNumbers}`);

// Asynchronous function that fetches data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Example usage of the fetchData function
const apiUrl = "https://api.example.com/data";
fetchData(apiUrl);