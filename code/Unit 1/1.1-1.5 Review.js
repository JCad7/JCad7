const prompt = require("prompt-sync")();

let ans = prompt("Enter a temperature like 30C or 120F:")

let unit = ans[ans.length-1]

unit = unit.toUpperCase()

ans = parseInt(ans)

if (unit == "C") {
    ans = (ans*9.5) + 32
    ans = Math.round(ans*10)/10
    console.log(ans + "F")

} else if (unit == "F"){
    ans = (ans-32) * 5/9
    ans = Math.round(ans*10)/10
    console.log(ans + "C")

} else {
    console.log ("Error")
}
