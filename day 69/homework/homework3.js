// 1) მომხმარებელს შეამოატანინეთ მისი ინფორმაცია ჩასვით ობიექტში და კონსოლში გამოიტანეთ რამდენი მომხმარებელიც შემოვა ყველა მომხმარებელი გამოიტანეთ ერთ ობიექტში.

// 2) გააკეთეთ counter addEventListener ის გამოყენებით html ში გააკეთეთ ორი ღილაკი "-" და "+" და ერთი პარაგრაფი რიცხვის მთვლელისთვის როდესაც "+" დააკლიკებთ პარაგრაფს მოემატოს რიცხვი ერთით "-" ზეც ანალოგიურად ოღონდ დააკლდეს რიცხვი.

// 3) გააკეთეთ ერთ შავი დივი და ქვემოთ სამი ღილაკი: "მწვანე", 
// "წითელი", "ლურჯი" თითოეულ ღილაკზე დაჭერისას უნდა შეიცვალოს 
// ფერი დივმა და გახდეს ის ფერი რომელზეც დააკლიკეთ აქაც გამოიყენეთ 
// addEventListener.

// 4) დაასრულეთ საკლასო დავალება.

// 5) გადახედეთ ჩანაწერს.
let add = document.querySelector("div")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
a.addEventListener("click", () =>{
    add.style.backgroundColor = "green"
})
b.addEventListener("click", () =>{
    add.style.backgroundColor = "red"
})
c.addEventListener("click", () =>{
    add.style.backgroundColor = "blue"
})

