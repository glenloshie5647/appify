/* 
Filename: complex_program.js

Description: This complex program demonstrates advanced JavaScript techniques and implements a sophisticated algorithm for solving a complex mathematical problem.
*/

// Define a class for handling complex numbers
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  subtract(other) {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  divide(other) {
    const denominator = Math.pow(other.real, 2) + Math.pow(other.imaginary, 2);
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  magnitude() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  toString() {
    if (this.imaginary >= 0) {
      return `${this.real} + ${this.imaginary}i`;
    } else {
      return `${this.real} - ${Math.abs(this.imaginary)}i`;
    }
  }
}

// Main program starts here
function complexProgram() {
  // Generate two random complex numbers
  const complex1 = new ComplexNumber(getRandomNumber(), getRandomNumber());
  const complex2 = new ComplexNumber(getRandomNumber(), getRandomNumber());

  // Perform arithmetic operations on the complex numbers
  const additionResult = complex1.add(complex2);
  const subtractionResult = complex1.subtract(complex2);
  const multiplicationResult = complex1.multiply(complex2);
  const divisionResult = complex1.divide(complex2);

  // Calculate the magnitude of the complex numbers
  const magnitude1 = complex1.magnitude();
  const magnitude2 = complex2.magnitude();

  // Print the results
  console.log("Complex Number 1:", complex1.toString());
  console.log("Complex Number 2:", complex2.toString());
  console.log("Addition:", additionResult.toString());
  console.log("Subtraction:", subtractionResult.toString());
  console.log("Multiplication:", multiplicationResult.toString());
  console.log("Division:", divisionResult.toString());
  console.log("Magnitude 1:", magnitude1);
  console.log("Magnitude 2:", magnitude2);
}

// Helper function to generate random numbers between -10 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 21) - 10;
}

// Execute the complexProgram function
complexProgram();