// # classwork
// 1) კომენტარებით ახსენით რას ნიშნავს increment და decrement
// 2) მოიყვანეთ ორ-ორი მაგალით თითოეულ მათემატიკურ ოპერაციაზე
// 3) if,else ი გააკეთეთ და შეამოწმეთ არის თუ არა რიცხვი ლუწი თუ არის გამოიტანეთ 
// "Even" თუ არის ნული გამოიტანეთ "Zero" და თუ არის კენტი გამოიტანეთ "Odd" 

// increment არის გაზრდა რიცხვისა და ++ ით იწერება რომელიც რიცხვს 1-ით ზრდის
// decrement არის რიცხვის შემცირება და -- ით აღინიშნება რომელიც რიცხვს 1-ს აკლებს

//  +-ის მაგალითი _ console.log(1+1) output; 2    console.log(4+1) output; 5

// - ის მაგალითი _ console.log(10-7) output; 3    console.log(3-2) output; 1

// * ის მაგალითი _ console.log(2*3) output; 6 console.log(10*3) output 30;

// / ის მაგალითი _ console.log(10/5) output; 2 console.log(6/3) output 2;

// % ის მაგალითი _ console.log(10%2) output 0;  console.log(5%3) output 2;

const num = 5;
if(num === 0){
    console.log("Zero")
}

else if(num % 2 === 0){
    console.log("Even")
}

else{
    console.log("Odd")
}

// 4) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი 
// სახელი,გვარი,საყვარელი სპორტი, სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.

let name = "davit";
let lastname = "dolidze";
let sport = "football";
console.log(`my name is ${name} lastname is ${lastname} sport is ${sport}`)