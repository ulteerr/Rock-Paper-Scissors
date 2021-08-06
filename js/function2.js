var i = 0;
function show() {
    var el = "Element";
    console.log(el);
}

show();

function calc(a=12, b = 10) {
    // if(b == undefined)
    //     b= 10;
    var res = a + b;
    console.log(res);
}
calc();
calc(56, 6);
calc(56);
// let func = calc;
// func(5, 10);
let func = function (mess = "Боб" ) {
  console.log("Привет: " + mess)
};
func();
func("Алекс");

function multiplay(a, b, c){
    var res = a * b * c;
    return res;
}

let mult = multiplay(5, 2 , 2);
console.log(mult);

function arrayEven(array){
    let isEven = true;
    array.forEach(function (item, i, arr){
        if(item % 2 !=0)
            isEven = false;
    });
    return isEven;
}
let arr = [5, 9, 0, 4];
let arr_2 = [6, 8, 0, 4];
let isEven = arrayEven(arr);
console.log(isEven);


function test (){
    console.log("Hello World")
}
setTimeout(test, 1500);

setTimeout("console.log('привет')", 1500);

// setInterval(test, 2000, "setInterval");

let interval = setInterval(function (){
   console.log('Привет');
}, 2000);

setTimeout(function (){
    clearInterval(interval);
    console.log('Стоп');
}, 5000);