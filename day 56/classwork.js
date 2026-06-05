// 2)ახსენით რა არის block scope, global scope და მოიძიეთ ინფორმაცია lexical scope ზე და ეგეც ახსენით

// block scope არის {}-ამ ბრჩხილებში შენახული რამე მაგ. if(){}  let scope = (h1, h2) =>{} 

// გააკეთეთ თითო მაგალითი თითო scope ზე და ახსენით კომენტარებით 

// მაგ გლობალი 
let color = "hi"
console.log(color)
// golobal - ყველგან შეგვილია გამოვიყენოთ ხოლო local მხოლოდ ფუნქციაში
function hey(h){
    let cl2 = "hi"
    return cl2
}
// errorი არის თუ ფუნქციის გარეთ გამოვიძახებთ