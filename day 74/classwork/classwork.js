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



let pigeons = new pigeonstype("pigeon", "pigeonnormal")
console.log(pigeons)
let duckspart = new duckstypes("duck", "golden duck", "toy duck")
console.log(duckspart)
let userinfo = new user("duck", "golden", "duck1231456765432")
console.log(userinfo)

