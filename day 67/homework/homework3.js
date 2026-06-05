// 3. სტილების მასიური შეცვლა (Class)
// მიზანი: getElementsByClassName - ის გამოყენება.

// დავალება: შექმენით 3 პარაგრაფი (<p>) ერთი და იგივე კლასით "text-item".

// ინსტრუქცია: JavaScript-ით იპოვეთ ყველა ეს პარაგრაფი კლასის მიხედვით და თითოეულს შეუცვალეთ ფერი (მაგალითად, გახადეთ წითელი).
let ps = document.getElementsByClassName("text-item")
console.log(ps)

ps[0].style.color = "red"
ps[1].style.color = "red"
ps[2].style.color = "red"
