const User = require("./user");
const Worker = require("./worker");

var Anna = new User("Anna", 27, "+375(29)1815219");
var Andrey = new User("Andrey", 25, "+375(33)4548575");

console.log(Anna.getAge());
Andrey.AllAboutUser();

var worker = new Worker("Alexsandr", "Doctor", "Surgery");
console.log(worker.toString());
console.log(worker.getDepartment());