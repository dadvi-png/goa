const form = document.querySelector('form')
const users = []
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const text = e.target.text.value
    const password = e.target.password.value
    user = {
        email:email,
        text:text,
        password:password
    }
    users.push(user)

    
})
console.log(users)