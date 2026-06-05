let input1 = document.getElementById("name")
let input2 = document.getElementById("last")
let input3 = document.getElementById("email")
let button = document.querySelector("button")
function object(){
    let list = {}
    list.name = input1.value
    list.lastname = input2.value
    list.email = input3.value
    console.log(list)
}
button.addEventListener("click", object)
