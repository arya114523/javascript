const employee = {
      calcTax() {
        console.log("tax rate is 10%");
      },
};

const karanArjun = {
    salary: 5000,
};

const karanArjun2 = {
    salary: 5000,
};

const karanArjun3 = {
    salary: 5000,
};

const karanArjun4 = {
    salary: 5000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;