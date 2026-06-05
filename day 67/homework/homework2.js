// 2. ტექსტის შეცვლა (Selection & Content)
// მიზანი: getElementById - ის გამოყენება.

// დავალება: შექმენით HTML ფაილი, სადაც იქნება ერთი <h1> სათაური (აიდით "main-title") და ერთი ღილაკი.

// ინსტრუქცია: ღილაკზე დაჭერისას, JavaScript-ის საშუალებით შეცვალეთ სათაურის ტექსტი და გახადეთ: "ტექსტი წარმატებით შეიცვალა!". გამოიყენეთ ორივე მეთოდი სხვადასხვა ცვლადში შესანახად."

let h1 = document.getElementById("main-title")
let button = document.getElementById("button")
function myfunc(){
   h1.innerHTML = "ტექსტი წარმატებით შეიცვალა!"
}
button.onclick = myfunc