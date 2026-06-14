const form = document.querySelector("form")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const list = [];
    let task = e.target.form.input.value;
    list.push(task)
    
    
    const ol = document.querySelector("ol")
    alle()
   function alle(){
      ol.innerHTML = ""
      list.forEach((task, index) =>{
        ol.innerHTML += `<li></li>`
      })
    
   function deletea(){
      list = task.filter((_, i) => index !== i)
      alle()
   }


   }
})