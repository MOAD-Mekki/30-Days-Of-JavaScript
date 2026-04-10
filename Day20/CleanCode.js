// This Section talked mainly about: How to write a clean code? and why this is important?

// Variables:
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81

// Arrays -> We chose plural name 
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// Functions -> They should describe there use cases
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square = (n) => n * n

// Loops -> There are siviral types: for, while, for of ...
for (let i = 0; i < n; i++){
    console.log()
}

// Objcts -> We declare them literal with 'const'
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}

// Conditional -> if, if else, switch & ternay operators
if (condition) {
  // this part of code run for truthy condition
} else {
  // this part of code run for false condition
}

// Classes -> They are declared with CamelCase (starts with capital letter)
class ClassName {
    // code goes here
}

// The type of style guid followed is not the key point, the important thing is that the code must be clear, readble and strict to the point