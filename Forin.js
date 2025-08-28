let student = {
    name: "Arya Padole",
    age: 21,
    cgpa: 7,
    isPass : true
};

for(let key in student){
    console.log("key=", key,"value=", student[key]);// key is variable not a string value
}
