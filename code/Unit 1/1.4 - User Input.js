const prompt = require("prompt-sync")();
// Variables 

let birthYear = prompt("What year were you born in? ")
    birthYear = parseInt(birthYear)
let age = 2024 - birthYear 

let name = prompt("What is your name? ")
let x = name.length

// F to C stuff
let C = 100
let F = 0

F = prompt("Type any tempurature in Fahrenheit to convert it into Celsius: ")

C = (F - 32) * 5/9

// Outputs

console.log("Hello, " + name+". You were born in " + birthYear + " and you are likely " + age + " years old.")
console.log("Your name is " + x + " letters long.")
console.log (F+"°F is equal to", C+"°C")
