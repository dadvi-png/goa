const form = document.querySelector("form")
const input = document.querySelector("input")
let tasks = JSON.parse(localStorage.getItem("tasks")) || []
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const task = input.value

    tasks.push(task)
    console.log(tasks)
    
    localStorage.setItem("tasks",JSON.stringify(tasks))
    rendertask()
})
const ol = document.querySelector("ol")
function rendertask(){
    ol.innerHTML = ""
    tasks.forEach((task, index) =>{
        ol.innerHTML += `
        <li onclick="deletea(${index})">${task}</li>
        `

    })
        
    
}
function deletea(index){
    tasks = tasks.filter((_,i) => i !== index )
    localStorage.setItem("tasks",JSON.stringify(tasks))
    rendertask()
}
rendertask()