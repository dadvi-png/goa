
let p = document.querySelector("p")
let up = document.getElementById("max")
let down = document.getElementById("min")
let count = 0

up.addEventListener("click", () =>{
    count += 1
    p.innerText = count
})
down.addEventListener("click", () =>{
    
    count -= 1
    p.innerText = count
})
