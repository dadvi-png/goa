const form = document.querySelector("form");

const users = [];

form.addEventListener("submit", (e) => {

    e.preventDefault()
    const username = e.target.name.value;
    const email = e.target.email.value;
    const lastname = e.target.last.value;
    const message = e.target.mail.value;
    const user = {
        username,
        email,
        lastname,
        message
    }


    const exists = users.some(single => single.email === email)
    if (exists) {
        alert("User with this email already exists");
        return;
    }

    if (message.length < 20) {
        alert("message has to be 20 letters or more")
        return
    } else {
        alert("successfully registered")
        users.push(user)
        
    }
    console.log(users)
})



