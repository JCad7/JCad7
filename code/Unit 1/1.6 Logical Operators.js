const prompt = require("prompt-sync")();

let ans1 = prompt("Do you want to play a game? (y/n): ").toLowerCase()

if (ans1 == "y" || ans1 == "yes") {
    console.log("You have selected yes.")

    let num1 = parseInt(prompt("Enter a number: "))
        if (num1 > 10 && num1 <50) {
            console.log("Your number should be greater than 50. ") 
        }


    let num2 = parseInt(prompt("Enter another number: "))
        if (num2 % 2 == 0) {
            console.log("Your next number should be odd")
        } else if (num2 % 2 == 1) {
            console.log("Your next number should be")
        }
    let num3 = parseInt(prompt("Enter a third and final number: "))
        if ((num1 + num2 + num3 + 1) % 10 == 0) {
        console.log("Your numbers are Squirrelly ")
        } else {
        console.log("Your numbers are not Squirrelly ")
        }

    if (num1 % 3 == 0 || num2 % 3 == 0 || num3 % 3 == 0) {
        console.log("Your numbers are Jazzy")
    } else {
        console.log("Your numbers are not Jazzy")
    }

} else if (ans1 == "n" || ans1 == "no") {
    console.log("Ok bye")
} else {
    console.log("That's not 'y' or 'n'.")
}
