// 1) შექმენი Arrow Function, რომელიც მიიღებს ცელსიუსს (C), გადაიყვანს ფარენჰაიტში (F) ფორმულით: F = C * 1.8 + 32.

// 2) შექმენი Arrow Function, რომელიც გამოითვლის ყოველთვიურ გადასახადს. ფუნქციამ უნდა მიიღოს ორი პარამეტრი: amount (მთლიანი თანხა) და years (წლების რაოდენობა). გაყავი თანხა თვეების რაოდენობაზე და მიღებულ შედეგს დაუმატე მომსახურების საკომისიო — ფიქსირებული 5 ლარი.

// 3) შექმენი Arrow Function, რომელიც მიიღებს ერთ სტრიქონს (password). ფუნქციამ უნდა დააბრუნოს true, თუ პაროლის სიგრძე არის 8 სიმბოლოზე მეტი. სხვა შემთხვევაში დააბრუნოს false.



const cel = (C, F) => {
    return C * 1.8 + 32

}

const passisstrong = password => {
    
    if(password.length() > 8){
        return true
    }
    else{
        return false
    }
}

const bank = (moneyamount, years) =>{
    years*=12
    return moneyamount/years + 5

}

