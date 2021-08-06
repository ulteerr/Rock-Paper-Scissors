let arr = ["BMW", "Mercedes", "Audi", "Volvo" ];

// arr.forEach(function (item, i, arr){
//    console.log("Index: "+ i + ":" + item + ". Массив:" + arr);
// });

// let newArr = arr.filter(function (el){
//    return el.length == 3 || el.length == 4;
// });
//
// console.log(newArr);
//
// var arr_2 =[1, -1, 2, 3, -3];
// var positive = arr_2.filter(function (el){
//     return el > 0;
// });
//
// console.log(positive);

// let neaArr = arr.map(function (el){
//    return el.toLowerCase();
// });
//
// console.log(neaArr);

// function elLength(el) {
//     return el.length == 3;
// }
//
// console.log(arr.every(elLength));
// console.log(arr.some(elLength));

let nums =[1, 2, 3, 4, 5];

let summa = nums.reduce(function (sum, el)
{
    return sum + el;
});
console.log(summa);

let currency = [23.5, 4.56, 33.5,];
let average = currency.reduce(function (total, el, index, array){
    total += el;
    if(index === array.length - 1)
        return total / array.length;
    else
        return total;
});
console.log(average);