// # Classwork

// 1) გააკეთეთ სარეგისტრაციო ფორმა მნიშნველობები შეინახეთ ობიექტში და ფორმის დადასტურების შემდეგ დამოიტანეთ ინფორმცია localstorage ში

// 2) კომენტარებით ახსენით რა არის json და რაშ გამოიყენება და ასევე ახსენით ქვემოთ მოცემული მეთოდები

// // localStorage.setItem() - რომ დააყენო რამე იმპუტი ან შეცვალო JSON-ში
// // localStorage.getItem() - რომ აიღო json-დან ჯავასკრიპტში

// // JSON.stringify()  - რომ გადდააქცია ჯავასკრიპტის მონაცამები json'sI
// // JSON.parse() - რომ გადმოაქცია რაყაცა JSonიდან ჯავასკრიპტში

const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    
    const login = {
        email:form.email.value,
        password:form.password.value
       
    }


    localStorage.setItem("login", JSON.stringify(login))
})
console.log("mtredi")
