class car{
    constructor(brand,model){
        this.brand = brand
        this.model = model
    }
    static compare(car1, car2) {
        if(car1.brand ===car2.brand){
            return "ეს მანქანები ერთი ბრენდისაა"
        }
    }
}
module.exports = {
    car
}