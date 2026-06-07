// # Classwork 

// 1) მომხმარებელს შემოატანინეთ მისი ინფორმაცია 
// სახელი, ემაილი, პაროლი გაუკეთეთ შემოწმებაც ემაილს და პაროლს 
// ჩაამატეთ მასივში და დააკონსოლოგეთ, ასევე დაარენდერეთ თითოეული მომხმარებლის 
// მონაცემი.
const list = [];
const form = document.querySelector("form")
function hick(e){
   e.preventDefault()
   const email = e.target.email.value
   const name = e.target.name.value
   const password = e.target.password.value
   user = {
    email:email,
    name:name,
    password:password
   }
   
   const check = list.some(i => i.email === email)
   if(check=== true){
     console.log("this email already exists")
     return;
   }
   if (password.length < 8){
    console.log("password is to short")
   }
   else{
    console.log("success")
    list.push(user)
   }
   console.log(list)
   const div = document.querySelector("div")


   const p = document.createElement("p");
   p.innerHTML = user.email
   div.appendChild(p)
  const pp = document.createElement("p");
   pp.innerHTML = user.password
   div.appendChild(pp)
   const ppp = document.createElement("p");
   ppp.innerHTML = user.name
   div.appendChild(ppp)
}



form.addEventListener("submit", hick)

