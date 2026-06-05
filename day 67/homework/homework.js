// 1. ეს კოდი ჩასვი შენს HTML ფაილში. აქ გვაქვს ერთი div (), შიგნით ტექსტი () და ღილაკი ().div p button

// <div id="card" style="border: 2px solid #333; padding: 20px; width: 200px; background-color: #f0f0f0;">
//     <p id="info-text">მოკლე აღწერა: ეს არის სტანდარტული პროდუქტი.</p>
//     <button id="action-btn">დეტალურად</button>
// </div>

// დაწერე JavaScript კოდი, რომელიც ღილაკზე () დაჭერისას შეასრულებს შემდეგ ცვლილებებს:#action-btn

// სიგანის შეცვლა (width):  ბლოკის სიგანე 200px-დან გახდეს 400px.#card

// ფონის ფერის შეცვლა (background-color): ბლოკის ფონი გახდეს მუქი ლურჯი.

// ტექსტის შეცვლა: ტექსტი შეიცვალოს უფრო ვრცელი აღწერით: "სრული აღწერა: ეს პროდუქტი დამზადებულია უმაღლესი ხარისხის მასალისგან და აქვს 2 წლიანი გარანტია!"#info-text

// ტექსტის ფერის შეცვლა (color): ვინაიდან ფონი მუქდება, ტექსტის ფერი თეთრი () გახდეს, რომ გამოჩნდეს.

// ღილაკის ტექსტის შეცვლა: თავად ღილაკზე "დეტალურად"-ის ნაცვლად დაეწეროს "დახურვა".
let p = document.getElementById("info-text")
let div = document.getElementById("card")
let button = document.getElementById("action-btn")
function moreinf(){
    div.style.width = "400px"
    div.style.backgroundColor = "blue"
    p.innerHTML = "სრული აღწერა: ეს პროდუქტი დამზადებულია უმაღლესი ხარისხის მასალისგან და აქვს 2 წლიანი გარანტია!"
}
button.onclick = moreinf
// ვერ გავიგე როგორ დავაყენო მუქი ლურჯი და ლურჯი დავაყენე.

