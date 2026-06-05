list = []
const numbers = [15, 2, 8, 33, 20, 7, 44, 11];
for(let i of numbers){
    console.log(list)
    if(i > 10){
        list.unshift(i)
    }

}
let password="asrda"
let input = prompt("enter a password")
while(password == input){
    input = prompt("enter a password")
}
let random = Math.random(1, 2)
let input2 = prompt("enter a num")
while(random == input2){
    input2 = prompt("enter a num")
}



let in3 = prompt("enter a number 10-20")
while (in3 < 10 || in3 > 20){
    in2 = prompt("enter a number 10-20")
} 