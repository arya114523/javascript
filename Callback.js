//sychtonous callback
function sum(a, b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
   sumCallback(a, b);
}
calculator(1,2,sum); //or

/*calculator(1,2,(a,b) => {
    console.log(a+b);
    }) */

const hello = () => {
    console.log("hello");
}
setTimeout(hello, 3000);  //too iss taarike se callback synchronous aur set timeout ke aander aschronous taarike se bhi kaam krte hai
// So, hello() function khud synchronous hai, lekin uska execution asynchronously hota hai because it's passed into an asynchronous function (setTimeout).

