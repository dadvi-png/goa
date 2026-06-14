// # Classwork

// 1) შექმენით მაღაზიის საიტი საიტზე გქონდეს 
// 5 პროდუქტი თავისი ინფორმაციით(სახელი, ფასი, აღწერა, ფოტო) 
// ასევე თითოეულ პროდუქტს ქონდეს addtocart ღილაკი რის შემდეგაც 
// პროდუქტი ჩაემატება cart მასივში, შემდეგ კონსოლში გამოიტანეთ ეს cart მასივი
// const divs = document.getElementsByClassName("product")

// function addtocart(productdiv){
//     const obja = {
//         price: item.querySelector("p").textContent,
//         name: item.querySelector("h2").textContent,
//     }
//     cart.push(obja)
//     console.log(cart)
// }
// console.log(addtocart(item))

let cartinHTML = document.getElementById("divz")
let cart = []
const divj = document.querySelectorAll(".product")

divj.forEach((item, index) =>{
    cartinHTML.innerHTML = ""
    let petname = item.firstElementChild
    let price = item.querySelector(".pak")
    let button = item.querySelector("button")
    
    button.addEventListener("click", () =>{
        cart.push(petname.textContent.trim())
        cart.push(price.textContent.trim())
        
        let cartincart = document.createElement("div")
        cartincart.className = "product"
        
        cartincart.innerHTML = `
            <h2>${petname.textContent.trim()}</h2>
            <p>${price.textContent.trim()}</p>
            <button>deletepet</button>
        `
        cartinHTML.appendChild(cartincart)
        console.log(cart)
    });
})

























// 2) თქვენ პროექტს დაუმატეთ დარენდერება და კალათიდან წაშლა