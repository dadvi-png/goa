class pigeonstype{
    constructor(babypigeon, pigeon){
        this.babypigeon = babypigeon
        this.pigeon = pigeon
    }
    greetpigeon(){
        console.log(`hi ${this.babypigeon} and ${this.pigeon}`)
    }

}
class duckstypes{
    constructor(duck, mysteryduck, rubberduck){
        this.duck = duck
        this.mysteryduck = mysteryduck
        this.rubberduck = rubberduck
    }
    greettoy(){
        console.log(`hi ${this.rubberduck}`)
    }
}
class user{
    constructor(firstname, lastname, password){
        this.password = password
        this.firstnamename =firstname
        this.lastname=lastname
    }
    greetuser(){
        console.log(`hi ${this.firstnamename}`)
    }
}
class market{
    constructor(item, price){
        this.item = item
        this.price = price
    }
    getprice(){
        console.log(`this ${this.item}s price is ${this.price}`)
    }
}

class countries{
    constructor(georgia, chad, germany){
        this.georgia = georgia
        this.chad = chad
        this.germany = germany
    }
    getcountries(){
        console.log(`countries ${this.georgia,this.germany,this.chad}`)
    }
}

let pigeons = new pigeonstype("pigeon", "pigeonnormal")
console.log(pigeons)
let duckspart = new duckstypes("duck", "golden duck", "toy duck")
console.log(duckspart)
let userinfo = new user("duck", "golden", "duck1231456765432")
console.log(userinfo)

