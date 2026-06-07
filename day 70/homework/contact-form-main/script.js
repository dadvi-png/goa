const form = document.querySelector("form");

const list = [];

form.addEventListener("submit", (e) => {

    e.preventDefault()
    const email = e.target.email.value;
    const username = e.target.name.value;
    
    const lastname = e.target.last.value;
    const message = e.target.mail.value;
    const user = {
        username,
        email,
        lastname,
        message
    }


    const exists = users.some(x => x.email === email)
    if (exists) {
        alert("this email already exists");
        return;
    }

    if (message.length < 20) {
        alert("message has to be 20 letters or more")
        return;
    } else {
        alert("registered")
        list.push(user)
        
    }
    console.log(users)
})



