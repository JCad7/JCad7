const prompt = require("prompt-sync")();
// Age stuff
let age = parseInt(prompt("How old are you? "))

if (age >= 50) {
    console.log("You qualify for the senior discount!")
}
if (age < 16) {
    console.log("You're not old enough to drive yet.")
}
// Name stuff
let username = prompt("What's your name? ")

if (username == "Mr.Squirrel") {
    console.log("🐿️")
}
if (username.length > 7) {
    console.log("You have a long name.")
}

// Username length guess
let namecharacters = prompt("How many characters is your name? ")

if (namecharacters == username.length) {
    console.log("That's correct! ✔️")
}
if (namecharacters > username.length) {
    console.log("Too high ✖️")
}
if (namecharacters < username.length) {
    console.log("Too low ✖️")
}

// Checking if age is even or odd
let x = age % 2
x = parseInt(x)

if (x === 1) {
    console.log("Your age is an odd number")
}
if (x === 0) {
    console.log("Your age is an even number")
}
