// 1) დაამთავრეთ საკლასო დავალება


// დავალება 1: "წიგნების ბიბლიოთეკა" (მარტივი)
// ეს დავალება დაეხმარებათ კონსტრუქტორის და მარტივი მეთოდების გათავისებაში.

// შექმენით კლასი Book.
class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
    }
    getSummary(){
        console.log(`book ${tittle} written by ${author} and written in ${year}`)
    }
    getAge(){
        console.log(2026 - year)
    }

}

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height

    }
    get area(){
        return this.width * this.height
    }
    get perimiter(){
        return 2 * (this.width + this.height)
    }
    set width(newwidth){
        if(newwidth <= 0){
            this.width = 1;

        }
        else{
            this.width = newwidth
        }
    }
    set height(newheight){
        if(newheight <= 0){
            this.width = 1;

        }
        else{
            this.width = newwidth
        }
    }
}
// კონსტრუქტორი: უნდა იღებდეს წიგნის სათაურს (title), ავტორს (author) და გამოცემის წელს (year).

// მეთოდი getSummary(): უნდა აბრუნებდეს ტექსტს: "წიგნი 'სათაური' დაწერილია 'ავტორი'-ს მიერ 'წელი' წელს."

// მეთოდი getAge(): უნდა აბრუნებდეს, რამდენი წლისაა წიგნი (მიმდინარე წელს გამოკლებული გამოცემის წელი).


// დავალება 2: "მართკუთხედის კალკულატორი" (Getter/Setter)
// აქ სტუდენტებმა უნდა ისწავლონ, როგორ გამოიყენონ get და set მონაცემების ვალიდაციისთვის.

// შექმენით კლასი Rectangle.

// კონსტრუქტორი: იღებს სიგანეს (width) და სიმაღლეს (height).

// Getter-ები: area (ფართობი) და perimeter (პერიმეტრი). ეს მნიშვნელობები არ უნდა იყოს შენახული როგორც ცვლადები, არამედ უნდა ითვლებოდეს დინამიურად.

// Setter-ები: სიგანის და სიმაღლის შეცვლისას დაამატეთ შემოწმება: თუ გადაცემული მნიშვნელობა ნაკლებია ან ტოლია 0-ზე, გამოიტანეთ შეცდომა (ან დააყენეთ დეფოლტ მნიშვნელობა 1).


// დავალება 3: "მომხმარებლის პროფილი" (კომპლექსური)
// ეს დავალება აერთიანებს ყველაფერს და ამატებს უსაფრთხოების ელემენტს.

// შექმენით კლასი User.
class User{
    constructor(username, email, password){
        this.username = username
        this._password = password
        this.email = email
    }
    get secure(){
        return "*".repeat(this.password.length)
    }
    set password(newpassword){
        if(newpassword <= 8){
            console.log("password is to short please try again")
        }
        else{
            this.password = newpassword
        }
    }
    changeemail(newemail){
        for(i of newemail){
            if(i === "@"){
                email = newemail
            }
            
        }
    }

}
// პარამეტრები: username, email და _password (ქვედა ტირე მიანიშნებს, რომ ეს "Private" ცვლადია).

// Getter password: პაროლის წაკითხვის მცდელობისას უნდა აბრუნებდეს დაფარულ ტექსტს (მაგ: "********"), 
// უსაფრთხოების მიზნით.

// Setter password: პაროლის შეცვლამდე უნდა ამოწმებდეს, არის თუ არა ახალი პაროლი მინიმუმ 8 სიმბოლო. თუ არ არის, 
// დაბეჭდოს: "პაროლი ძალიან მოკლეა!".

// მეთოდი changeEmail(newEmail): რომელიც შეცვლის იმეილს მხოლოდ იმ შემთხვევაში, თუ ახალი იმეილი შეიცავს @ სიმბოლოს.