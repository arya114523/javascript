function asyncFun1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log("some data1");
          resolve("success");
        },4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log("some data2");
          resolve("success");
        },4000);
    });
} 

/*console.log("fetching data1...........");
let p1 = asyncFun1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2............");
let p2 = asyncFun2();
p2.then((res) => {
    console.log(res);
}); */                                                      //OR

/*console.log("fetching data1...........");
let p1 = asyncFun1();
p1.then((res) => {
    console.log("fetching data2............");
let p2 = asyncFun2();
p2.then((res) => {});
}); */                                                     //OR

/*console.log("fetching data1...........");
asyncFun1().then((res) => {
console.log("fetching data2............");
asyncFun2().then((res) => {});
}); */
