const form = document.getElementById("afront")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const inputs = {
        username: form.name.value,
        lastname: form.last.value,
        email: form.email.value,
        message: form.message.value
    }
    localStorage.setItem("inputs", JSON.stringify(inputs))
})

