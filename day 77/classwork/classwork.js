// # Classwork

// 1)შექმენი კლასი Book, რომელსაც ექნება შემდეგი თვისებები:
// title (სათაური)
// author (ავტორი)
// isRead (წაკითხულია თუ არა, საწყისი მნიშვნელობა false)
// მეთოდები:
// read() — ცვლის isRead-ს true-ზე და კონსოლში ბეჭდავს: "თქვენ წაიკითხეთ წიგნი: [სათაური]".
// getDetails() — აბრუნებს ტექსტს: "[სათაური]" - [ავტორი], [წაკითხულია/არ არის წაკითხული].
// შექმენი 2 წიგნის ობიექტი, ერთ-ერთზე გამოიძახე read() მეთოდი და ბოლოს ორივეს getDetails() დალოგე.
class Book{
    constructor(title,author,isRead){
        this.title=title;
        this.author = author;
        this.isRead = isRead;
    }

    set read(newValue){
        this.isRead = newValue
        console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`)
    }

    getDetails(){
        console.log(`${this.title} - ${this.author}, ${this.isRead}`)
    }
}


const book1 = new Book("asdadsad", "sasdada", false)
const book2 = new Book("asdadsadasdasda", "sasdadasssssssads", false)
book1.read = true;
book1.getDetails()
book2.read = true;
book2.getDetails()
console.log(book1)
console.log(book2)
// 2) შექმენი კლასი Student, რომელსაც ექნება თვისებები: name (სახელი) და grades (ნიშნების მასივი, რომელიც თავიდან ცარიელია []).
// მეთოდები:
// addGrade(grade) — ამოწმებს, არის თუ არა ნიშანი 1-დან 10-მდე. თუ არის, ამატებს მასივში. თუ არა, ბეჭდავს შეტყობინებას: "არასწორი ნიშანია!".
// getAverage() — ითვლის და აბრუნებს სტუდენტის საშუალო ნიშანს (ყველა ნიშნის ჯამი გაყოფილი მათ რაოდენობაზე).
// შექმენი სტუდენტი, დაუმატე ნიშნები: 8, 9, 10 და გამოიტანე მისი საშუალო.
class Student{
    constructor(name,grades){
        this.name = name;
        this.grades = grades;
    }

    addGrade(grade){
        if(grade >=1 && grade <= 10){
            this.grades.push(grade)
        }else{
            console.log("არასწორი ნიშანია")
        }
    }

    getAverage(){
        const sum = this.grades.reduce((acc,i) => acc + i,0)
        return sum / this.grades.length
    }

    
}



const student1 = new Student("daviti",[])


student1.addGrade(10)
student1.addGrade(9)


console.log(student1.getAverage())


// 3) შექმენი კლასი Movie თვისებებით: title (ფილმის სახელი), price (ბილეთის ფასი) და availableSeats (თავისუფალი ადგილების რაოდენობა, მაგალითად 5).
// მეთოდები:
// buyTicket(quantity) — პარამეტრად იღებს ბილეთების რაოდენობას, რომლის ყიდვაც სურთ.
// თუ თავისუფალი ადგილები საკმარისია (availableSeats >= quantity), დააკელი ადგილებს ეს რაოდენობა და დალოგე: "თქვენ წარმატებით შეიძინეთ [quantity] ბილეთი. გადასახდელია: [ფასი * რაოდენობა] ლარი".
// თუ ადგილები არ არის საკმარისი, დაბეჭდე: "სამწუხაროდ, მხოლოდ [availableSeats] ადგილია დარჩენილი".
// სცადე ჯერ 3 ბილეთის ყიდვა, მავე ფილმზე შემდეგ კიდევ 3-ის ყიდვა და ნახე რა მოხდება.
class Movie{
    constructor(title,price,availableSeats){
        this.title = title;
        this.price = price;
        this.availableSeats = availableSeats;
    }

    buyTicket(quantity){
        if(this.availableSeats > quantity){
            this.availableSeats -=quantity
            console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${quantity * this.price} ლარი`)
        }else{
            console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`)
        }
    }
}

const movie1 = new Movie("Godfather", 5, 10)

movie1.buyTicket(5)

console.log(movie1)
// 4) შექმენი კლასი Car თვისებებით: brand (მარკა) და speed (სიჩქარე, რომელიც საწყის ეტაპზე ყოველთვის არის 0).
// მეთოდები:
// accelerate() — ზრდის სიჩქარეს 20-ით.
// showSpeed() — კონსოლში ბეჭდავს: "[brand]-ის სიჩქარეა: [speed] კმ/სთ".
// შექმენი მანქანა (მაგ: "BMW"). გამოიძახე accelerate() ორჯერ და შემდეგ შეამოწმე სიჩქარე showSpeed()-ით.
class Car{
    constructor(brand, speed = 0){
        this.brand = brand
        this.speed = speed
    }
    accelerate(){
        this.speed+=20
    }
    showSpeed(){
        console.log(`${this.brand}-ის სიჩქარეა ${this.speed} km/st`)
    }
}
let bmw = new Car("BMW")
bmw.accelerate()
bmw.accelerate()
console.log(bmw.showSpeed())