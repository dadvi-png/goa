// # Classwork 

// 1) მომხმარებელს ინფუთ თეგის საშუალებით შემოაყვანინეთ რაიმე 
// ფერი და ღილაკზე დაკლიკების შემდეგ მთლიანი საიტის ფერი უნდა შეიცვალოს 
// იმ ფერით რასაც მომხმარებელი შემოიყვანს.
let input = document.getElementById("input")
let button = document.querySelector("button")
let body = document.querySelector("body")
button.addEventListener("click", () =>{
   body.style.backgroundColor = input.value 
})
