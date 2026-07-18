// გააკეთეთ ფუნქციონალი სადაც პროდუქტებს 
// ჩაამატებთ კალათაში, როცა ორჯერ ან მეტჯერ დავაწვებით პროდუქტის
//  დამატებას უნდა შეიცვალოს რაოდენობა და აღარ უნდა ჩაემატოს ახლიდან 
//  მასივში, უნდა დაარენდეროთ კალათაში ჩამატებული პროდუქტები და უნდა შეგეძლოთ წაშლა კალათიდან
const productz = Array.from(document.getElementsByClassName("product"))
let cart = []
let cartdiv = document.getElementById("cart")
const add = () =>{
    button = productz.queryselector("button")
    button.addEventListener("click", () =>{
        let objectz = {
        name: productz.queryselector("h2").textContent,
        price: productz.queryselector("p").textContent,
        quantity: 1
    }
    exists = objectz.find(elem => elem == cart.name)
    if(exists){
        exists.quantity+=1
    }
    else{
        cart.push(objectz)
    }
    
    })
    
    
}
let renderitem = () =>{

}
