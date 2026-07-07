// 2) html ში შექმენით ერთი პარაგრაფი და 2 ღილაკი "+" და "-" 
// პლიუსზე დაჭერისას უნდა უნდა გაიზარდოს პარაგრაფის ფონტ საიზი და - 
// ზე დაჭერისას უნდა დააკლდეს თან რანდომულად უნდა ცვლიდეს ტექსტის ფერს.

let button1 = document.querySelector("button")
let button2 = document.getElementById("plus")
let par = document.querySelector("p")
let count = 16
button1.addEventListener("click", () =>{
    count--
    const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]
    const Indexz = Math.floor(Math.random() * colors.length)
    par.style.fontSize = `${count}px`
    par.style.color = colors[Indexz]
})
button2.addEventListener("click", () =>{
    count++
    const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]
    const Indexz = Math.floor(Math.random() * colors.length)
    par.style.fontSize = `${count}px`
    par.style.color = colors[Indexz]
})

