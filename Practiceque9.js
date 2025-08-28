let DATA = "secrete information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data=",DATA);
    }
}

let student1 = new User("arya", "aryapadole7@gmail.com");
let student2 = new User("ankita", "ankita1234@gmail.com");

let teacher1 = new User("Dean", "dean@gmail.com");