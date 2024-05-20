"use strict";
/*

I'M THE ONE DOING THE COMMENTS, I PREFER TO COMMENT MY CODE IN ENGLISH BECAUSE PORTUGUESE IS RUBISH

//Dia 3 - Exercicio 1

let pi = "3.14159" //declared as a string, it can be resolved removing the quotation marks or simply by using the method number that converts a string into a number variable
let tau = Number(pi) * 2

console.log(`${tau} is ${pi} times two.`)
*/
/*
//Dia 3 - Exercicio 2

let pie: string //the "problem" should be resolved just by specifying the type of data that the let pie should receive, making it impossible to assign a number to it"

pie = "blueberry"

console.log(`i like to eat ${pie}-flavored pie.`)
*/
/*
//Dia 3 - Exercicio 3
let isDouglas: boolean //the problem should be resolved adding a value to the boolean let "isDouglas"

isDouglas = false

console.log(`${isDouglas ? "Oh, Hi Douglas" : "Who are u ?"}`)
*/
//Dia 3 - Exercicio 4
/*
const integer: number = 6 //the problem should be resolved by specifying every camp to its right type of data (number), changing the type of data accepted into the array and tranforming the index 0 of the array to be a number, instead of a string
const float: number = 6.66
const hex: number = 0xf00d
const binary: number = 0b1010011010
const octal: number = 0o744
const negZero: number = -0
const actuallyNumber: number = NaN
const largestNumber: number = Number.MAX_VALUE
const mostBiglyNumber: number = Infinity

const members: number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber,
]

members[0] = Number("12345")

console.log(members)
*/
/*
// Dia 4 - Exercicio 5
//it is resolved by specifying the type of data accepted into the arrays
const sequence: number[] = Array.from(Array(10).keys())
const animals: string[] = ["pangolin", "aardvark", "echidna", "binturong"]
const stringsAndNumbers: (number | string)[] = [1, "one", 2, "two", 3, "three"]
const allMyArrays: (number | string)[][] = [
  sequence,
  animals,
  stringsAndNumbers,
]

console.log(allMyArrays)
*/
/*
// Dia 5 - Exercicio 1

interface Item {
  id: number
  title: string
  variantId?: number
}

function addToCart(item: Item) {
  console.log(`Adding ${item.title} to cart`)
}

addToCart({ id: 1, title: "banana" })

*/
/*
// Dia 5 - Exercicio 2

interface PersonInt {
  name: string
  age: number
}

class Person implements PersonInt {
  constructor(public name: string, public age: number) {}
}

const jane = new Person("Jane", 31)

console.log(`${jane.name} is ${jane.age} years old.`)
*/
/*
// Dia 5 - Exercicio 3

class MC {
  greet(event: string = "party"): string {
    return `Welcome to the ${event}`
  }
}

const mc = new MC()
console.log(mc.greet("show"))
*/
/*
// Dia 5 - Exercicio 4

class Employee {
  title: string
  salary: number
  constructor(title: string, salary: number) {
    this.title = title
    this.salary = salary
  }
}

class Employee {
  constructor(public title: string, public salary: number) {}
}

const employee = new Employee("Engineer", 100000)

console.log(
  `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`
)
*/
// Dia 5 - Exercicio 5
/*
interface UserSchema {
  id: number
  name: string
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User("Dog", 1)

//console.log(user.id)

user.name = "Harold" // pode mudar
//user.id = 5 // nao pode mudar

console.log(`User:`, user)
*/
// Dia 7 - Exercicio 1
/*
interface User {
  name: string
  age: number
  occupation: string
}

interface Admin {
  name: string
  age: number
  role: string
}

type Person = User | Admin

const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut.",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver.",
  },
]

function logPerson(person: Person) {
  let additionalInformation: string
  if ("role" in person) {
    additionalInformation = person.role
  } else {
    additionalInformation = person.occupation
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`)
}

persons.forEach(logPerson)
*/
// Dia 7 - Exercicio 2
/*
class Animal {
  constructor(public name: string) {}
  move(meters: number) {
    console.log(`${this.name} moved ${meters}m.`)
  }
}

class Snake extends Animal {
  move(meters: number) {
    console.log("Slithering...")
    super.move(meters)
  }
}

class Pony extends Animal {
  move(meters: number) {
    console.log("Galloping...")
    super.move(meters)
  }
}

const sammy = new Snake("Sammy the Snake")
sammy.move(5)

const pokey = new Pony("Pokey the Pony")
pokey.move(34)
*/
// Dia 7 - Exercicio 3
/*
class Furniture {
  constructor(protected manufacturer: string = "IKEA") {}
}

class Desk extends Furniture {
  kind() {
    console.log(`This is a desk made by ${this.manufacturer}`)
  }
}

class Chair extends Furniture {
  kind() {
    console.log(`This is a chair made by ${this.manufacturer}`)
  }
}

const desk = new Desk()
desk.kind()
//desk.manufacturer // Deve retornar um erro

const chair = new Chair()
chair.kind()
//chair.manufacturer // Deve retornar um erro
*/
// Dia 7 - Exercicio 4
/*
let multiply: (val1: number, val2: number) => number
let capitalize: (val: string) => string

capitalize = function (value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

multiply = function (x: number, y: number): number {
  return x * y
}

console.log(capitalize(`nifty ${multiply(5, 10)}`))
*/
// Dia 7 - Exercicio 5
/*
function layEggs(quantity: number, color: string): void {
  console.log(`You just laid ${quantity} ${color} eggs. Good job!`)
}

layEggs(10, "blue")
*/
//# sourceMappingURL=index.js.map