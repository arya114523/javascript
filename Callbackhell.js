function getData(dataId, getNextData){
 //2s
 setTimeout(() => {
    console.log("data", dataId);
    if (getNextData){
        getNextData();
    }
 },2000);
}
//callback hell
getData(1, () => {
    console.log("getting data2............");
    getData(2, () => {
        console.log("getting data3............");
        getData(3);
           console.log("getting data4............");
            getData(4);
    });
});

//promise

/*function getData(dataId){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
    },3000);
    });
}


console.log("getting data1...........")
getData(1)
.then((res) => {
    console.log("getting data2...........")
    return getData(2);
})
.then((res) => {
    console.log("getting data3...........")
     return getData(3);
})
.then((res) => {
     console.log(res);
}); */

