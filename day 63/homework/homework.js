// # Homework 

// 1. შექმენი ფუნქცია , რომელიც იღებს ორ პარამეტრს:  და .robotFactorymodelmobile

// ფუნქციამ უნდა დააბრუნოს ობიექტი.

// დაამატე მეთოდი , რომელიც კონსოლში დაწერს: "Beep Boop! მე ვარ [model]".beep()

// 2. შექმენი ობიექტი , რომელსაც ექნება თვისება  და მეთოდი . მეთოდმა -ის გამოყენებით უნდა დაპრინტოს თქვენი სახელი.personfirstNamesayHellothis

// 3. შექმენი ობიექტი  (მართკუთხედი), რომელსაც ექნება  (სიგანე) და  (სიმაღლე). დაამატე Getter სახელად , რომელიც დააბრუნებს მათ ნამრავლს.rectanglewidthheightarea (ფორმულ არის სიგანე გამრავლებული სიმაღლეზე)

function robotFactorymodelmobile(name, model){
    return{
        name,
        model,
    }
    beep();{

        console.log("Beep Boop! მე ვარ" + this.model)
    }

}
console.log(robotFactorymodelmobile("Alice", "BMW").beep())



const person = {
    name: "giorgi",
    hello: function(){
        console.log("hello" + this.name)
    }
}
console.log(person.hello())

const samkutxedi = {
    width: 10,
    height: 50,
    get area(){
        return this.width * this.height
    }
}
console.log(samkutxedi.area)


