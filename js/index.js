let obj = '{"name" : "Alex","age" : 45, "hasCar" : true}';
obj = JSON.parse(obj);
console.log(obj);

let array = '[56, 7, 2, 89]';
array = JSON.parse(array);

console.log(array);

var object = {
    name : "Андрей",
    age : 45,
    state : "UA"
 };
let str = JSON.stringify(object,"", 4);
console.log(str);