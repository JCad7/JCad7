const prompt = require("prompt-sync")();

let ans1 = prompt("Do you want to play a game? (y/n): ")

if (ans1 == "y") {
    console.log("You have selected yes.")

    let num1 = prompt("Enter a number: ")
        num1 = parseInt(num1)
        if (num1 > 10 && num1 <50) {
            console.log("Your number should be greater than 50. ") 
        }


    let num2 = prompt("Enter another number: ")
        num2 = parseInt(num2)
        if (num2 % 2 == 0) {
            console.log("Your next number should be odd")
        } else if (num2 % 2 == 1) {
            console.log("Your next number should be")
        }
    let num3 = prompt("Enter a third and final number: ")
        num3 = parseInt(num3)
        if (num1 + num2 + num3 + 1 % 10 == 0) {
        console.log("Your numbers are Squirrelly ")
        } else {
        console.log("Your numbers are not Squirrelly ")
        }

    if (num1 % 3 == 0 || num2 % 3 == 0 || num3 % 3 == 0) {
        console.log("Your numbers are Jazzy")
    } else {
        console.log("Your numbers are not Jazzy")
    }

} else if (ans1 == "n") {
    console.log("Ok bye")
} else {
    console.log("That's not 'y' or 'n'.")
}