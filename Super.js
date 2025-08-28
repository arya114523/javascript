class Person{
    constructor(){
         console.log("enter parent constructor");
        this.species = "homo species";
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
     super();  //invoke parent class constructor
     this.branch = branch;
     console.log("exit child constructor");
    }
    work(){
        super.eat(); //because can't access parent class directly
        console.log("solve problem, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treats patient");
    }
}
let engObj = new Engineer("chemical engineering");