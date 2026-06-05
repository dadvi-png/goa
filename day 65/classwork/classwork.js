// # Classwork 

// 1) შექმენი constructor სახელით book კონსტრუქტორში უნდა გადაეცეს properties: სათაური, ავტორი, ფასი შიგნით შექმენი მეთოდი getInfo() რომელიც კონსოლში დაბეჭდავს ტექსტს ასე "წიგნის სათაურია [სათაური] ავტორი [ავტორი], და ფასი [ფასი]" შემდეგ გამოიძახე ეს კონსტრუქტორი და გადაეცი ორი მაგალითი
function book(title,act, price){
    this.title = title
    this.act = act
    this.price = price
    this.getinfo = () =>{
        console.log(`book title is ${title} price is ${price} actor is ${act}`)
    }
    
}
const book2 = new book("unknown", "unknown")

// 2) შექმენი ფუნქცია-კონსტრუქტორი სახელით .PiggyBank() ამ ფუნქციის შიგნით შექმენი უბრალო ცვლადი .money = 0; ამავე ფუნქციის შიგნით, შექმენი ორი მეთოდი:this
// this.setMoney — რომელიც შეცვლის ყულაბაში არსებულ თანხას.
// this.getMoney — რომელიც დააბრუნებს ყულაბაში არსებულ თანხას.

// new ოპერატორით შექმენი ახალი ყულაბა.
// setMoney მეთოდით ჩააგდე შიგნით 50 ლარი.
// getMoney მეთოდით შეამოწმე და ეკრანზე გამოიტანე რამდენი ლარია ყულაბაში.

function piggybank(money){
   this.money = 0;
//    set setmoney(money){
//        this.money += 50
//    }
//    get getmoney(){
//        console.log(this.money)
//    }
}
const axalipig = new piggybank()

console.log(piggybank())