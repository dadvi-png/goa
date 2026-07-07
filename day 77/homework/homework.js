// # Homework 

// 1) გადახედეთ რესურსებში ჩაგდებულ კოდებს და გაიაზრეთ

// 2) დაასრულეთ საკლასო ვისაც არ დაგისრულებიათ

// 3) შექმენი კლასი Product თვისებებით: name (დასახელება) და price (ორიგინალი ფასი).
// applyDiscount(percentage) — იღებს ფასდაკლების პროცენტს (მაგალითად 20 ნიშნავს 20%-იან ფასდაკლებას) და აკლებს ამ პროცენტს პროდუქტის არსებულ ფასს (price).
// getInfo() — ბეჭდავს ტექსტს: "[პროდუქტის სახელი] ღირს [მიმდინარე ფასი] ლარი".
// შექმენი პროდუქტი 100 ლარიანი ფასით. აამუშავე 15%-იანი ფასდაკლება და გამოიძახე getInfo(), რომ ნახო ახალი ფასი.
class product{
    constructor(name, price){
        this.price = price
        this.name = name
    }
    applydiscount(percentage){
        this.price *= percentage / 100
    }
    getInfo(){
        console.log(`${this.name} ღირს ${this.price} ლარი`)
    }
}
let apple = new product("apple", 1000000000000000000000000000000000000000000000000000)
apple.applydiscount(15)
console.log(apple)
// 4) შექმენი კლასი SmartPhone თვისებებით: model (მოდელი) და battery (ელემენტის პროცენტი, საწყისი მნიშვნელობა 50).
// charge() — ზრდის ბატარეის მუხტს 15-ით. მნიშვნელოვანია: თუ ბატარეა 100-ს გადასცდება, მნიშვნელობა მაინც 100-ზე გააჩერე.
// showStatus() — კონსოლში ბეჭდავს: "[model]-ის ბატარეა არის [battery]%".
// შექმენი ტელეფონი, გამოიძახე charge() რამდენჯერმე და ნახე, გაჩერდება თუ არა მაქსიმუმ 100-ზე.
class smartphone{
    constructor(model, battery = 50){
        this.model = model
        this.battery = battery
    }
    charge(){
        this.battery+=15
    }
    showstatus(){
        console.log(`${this.model}-ის ბატარეა არის ${this.battery}%`)
    }
}
let phone1 = new smartphone("samsung")
phone1.charge()
phone1.charge()
console.log(phone1.showstatus())
// 5) შექმენი კლასი SchoolPupil თვისებებით: name (სახელი) და gradeLevel (კლასი, მაგალითად 5 — ანუ მეხუთე კლასელი).
// promote() — ზრდის gradeLevel-ს 1-ით (გადადის შემდეგ კლასში).
// getInfo() — აბრუნებს ტექსტს: "[name] არის მე-[gradeLevel] კლასის მოსწავლე".
// შექმენი მოსწავლე, რომელიც არის მე-6 კლასში, გამოიძახე promote() და შემდეგ დაბეჭდე getInfo().
class SchoolPupil{
    constructor(name, gradelevel){
        this.name = name
        this.gradelevel = gradelevel
    }
    promote(){
        this.gradelevel += 1
    }
    getinfo(){
        console.log(`${this.name} არის მე-${this.gradelevel} კლასის მოსწავლე`)
    }
}
let random = new SchoolPupil("daviti", 6)
random.promote()
console.log(random.getinfo)
// 6) შექმენი კლასი PiggyBank. მას აქვს მხოლოდ ერთი თვისება: coins (მონეტების რაოდენობა, თავიდან არის 0).
// addCoins(amount) — ყულაბაში ამატებს მითითებულ რაოდენობა მონეტას.
// buyToy(cost) — პარამეტრად იღებს სათამაშოს ფასს.
// თუ ყულაბაში საკმარისი მონეტებია (coins >= cost), მონეტებს აკლდება სათამაშოს ფასი და ბეჭდავს: "სათამაშო ნაყიდია!".
// თუ მონეტები არ გეყოფა, ბეჭდავს: "არ გაქვს საკმარისი მონეტები!".
// ჩააგდე ყულაბაში 10 მონეტა, სცადე 15-მონეტიანი სათამაშოს ყიდვა, შემდეგ დაამატე კიდევ 10 და სცადე თავიდან.
class piggybank{
    constructor(coins = 0){
        this.coins = coins
    }
    addCoins(amount){
        this.coins+=amount
    }
    buyToy(cost){
        if(coins>=cost){
           console.log("სათამაშო ნაყიდია!") 
        }
        else{
            console.log("არ გაქვს საკმარისი მონეტები!")
        }
    }
}
let bank = new piggybank()
bank.addCoins(10)
bank.buyToy(15)
bank.addCoins(10)
bank.buyToy(15)
