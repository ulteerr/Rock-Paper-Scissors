let array = [45, true, 6.92, "Hello", 'R'];
console.log(array);
array[1] = false;
array[2] = "Hello";
array[3] += " World";
array[5] = 5;
console.log(array[4]);
console.log(array);
array.pop();
array.push('Bob', "Alex", 1);
array.shift();
array.unshift("1", 2, 4);

//array.length = 2;
delete array [2];

console.log(array);

// console.log(array.length);


let arr = new Array();
console.log (arr);

let matrix = [
    [56,"Hello"],
    [5],
    [8.9, true, false, 56]
];

matrix [2] [1] = "World";
console.log(matrix [2] [1]);

let str = "Hello, world, 5, 0, qwe";
let array_split = str.split(", ");
console.log(array_split);
