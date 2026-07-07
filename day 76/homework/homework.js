// # Homework

// 1) აუცილებლად გადახედეთ რესურსებში ჩაგდებულ კოდებს და კარგად გაიაზრეთ

// 2) გაიმეორეთ განვლილი მასალა

// 3) გადახედეთ აუცილებლად ჩანაწერს

// 4) მომხმარებელს შემოაყვანინეთ ინფორმაცია სახელი, გვარი, ემაილი, პაროლი, შეამოწმეთ 
// პაროლი 8 character ზე ნაკლები არ უნდა იყოს შემდეგ ჩაამატეთ ინფორმაცია localstorage ში გააკეთეთ 
// ასევე შემოწმება თუ ემაილი ერთხელ არის უკვე localstorage ში მეორეჯერ აღარ ჩაემატოს

// 5) დაასრულეთ საკლასო დავალება ვისაც არ დაგისრულებიათ
let form = document.querySelector('form')

let user = JSON.parse(localStorage.getItem("user")) || [];
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let code = document.getElementById("password").value
    if(code.length < 8){
        alert("password is to short")
        return;
    }
    let emailExists = user.some(existingUser => existingUser.email === email);
    if(emailExists){
       alert("This email is already registered. Please try another one.");
       return;
    }
    let objx = {
        firstname,
        lastname,
        email,
        code

    }
    user.push(objx)
    localStorage.setItem("user", JSON.stringify(user))
});
