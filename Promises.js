/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve(123);
});*/

/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occured");
}); */

//here we have not started dealing with api amd not with other system that's why we are creating by our own. But in genaral programming 
//other api's other systems create promises for us and we just handle them.

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

