let p = document.querySelector("p")
let button = document.querySelector("button")

function change(){
    p.innerHTML = "big"
    p.style.color = "red"
}
button.onclick = change