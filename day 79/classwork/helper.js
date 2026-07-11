// 1) გააკეთეთ ორი ფაილი helper.js და script.js 

// helper.js ში შექმენით სხვადასხვა ფუნქციები და დააიმპორტეთ ისინი script.js ში და გატესტეთ მისი მუშაობა.
let multiplied = (num1,num2) =>{
    return num1 * num2
}
let sum = (num3,num4) =>{
    return num3 + num4
}
let evenorodd = (num5) =>{
    if(num5 % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}
let greet = (ahuman) =>{
    return `hello ${ahuman}`
}
let stockorno = (item, stock) =>{
    if(stock <= 0){
        return `${item} isnt in stock`
    }
    else{
        return `${item} is in stock`
    }
}
let minus = (num6, num7) =>{
    return num6 - num7
}
module.exports = {
    multiplied,sum,evenorodd,greet,stockorno,minus
}

