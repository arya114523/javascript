let obj = {
     item: "pen",
     price: 10,
}

//console.log("the cost of ", obj.item , "is", obj.price , "rupees"); aur yaaha pr highlight hua

let output = `the cost of ${obj.item} is ${obj.price} rupees`; //number string ka part baana isiliye yaaha highlight nhi hua
console.log(output);                                           //string interpolation

//template literals
let specialString = `This is a template literals`;
console.log(typeof specialString);