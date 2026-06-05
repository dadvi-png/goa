const h1id = document.getElementById("ang");
h1id.style.color = "red";
h1id.style.backgroundColor = "yellow";
// 3) შექმენი ფუნქცია სახელით . შიგნით ჩაწერე ცვლადი .Box()x = 0;

// ამავე ფუნქციაში შექმენი:this
// this.setX(value) — რომელიც ჩაწერს ახალ რიცხვს.x

// this.getX() — რომელიც დააბრუნებს ჩაწერილ რიცხვს.x

// შექმენი ახალი ყუთი -ის გამოყენებით.new Box()

// setX მეთოდით შიგნით ჩაწერე რიცხვი 10.

// getX მეთოდით წაიკითხე ეს რიცხვი და დაბეჭდე ეკრანზე.

const box = (Value) => {
    x = 0;
    
    set(Value);{
        x = Value
    }
    get();{
        this.x = x
        return x
    }
}

// function box(Value){
//     let x = 0;
//     return{
//        set(Value){
//         x = Value;
//     }, 
//     get(){
        
//         return this.x
//      }
//     }
// }

// 4) შექმენი ფუნქცია-კონსტრუქტორი სახელით .Profile(name)

// მას პარამეტრად გადაეცი მხოლოდ ერთი რამ —  (სახელი).name

// ფუნქციის შიგნით შექმენი ორი მეთოდი:this

// this.setName(newName) — რომელიც ძველ სახელს შეცვლის ახალი სახელით.

// this.getName() — რომელიც უბრალოდ დააბრუნებს მიმდინარე სახელს.

// new Profile("Giorgi")-ით შექმენი ახალი მომხმარებელი (სახელით გიორგი).

// ეკრანზე გამოიტანე სახელი  მეთოდით (უნდა დაწეროს "Giorgi").getName()

// ახლა  მეთოდით შეცვალე სახელი.setName("Anano")

// ხელახლა გამოიტანე სახელი ეკრანზე  მეთოდით (ახლა უნდა დაწეროს "Anano").getName()
function profile(name){
    this.name = name
    return{
      
      set(name){
        name = "luka"
      }
    }
}


// function profile(name){
//    this.name = name,
//    set(name)
//     this.name = "luka"
    
       
// }

// console.log(profile("gio"))