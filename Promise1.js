const getPromise = () => {
    return new Promise((resolve, reject) => {
       console.log("I am a promise");
       //resolve("success");
       reject("network error");
    });
    }

let promise = getPromise();
/*promise.then((res)  => {
    console.log("promise fulfilled");
});*/
promise.catch((err)  => {
    console.log("rejected");
});
