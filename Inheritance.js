class Person{
    constructor(){
        this.species = "homo species";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problem, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treats patient");
    }
}
let aryaObj = new Engineer();