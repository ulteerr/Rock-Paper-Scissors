let x = 20;
let y = 21 ;
let hasCar = true;

if(x > y) {
    console.log("Число Х больше, чем Y ");
} else if (x == y){
    console.log("Числа равные");
} else {
    console.log("Числа не равны");
}

let str = "Petr";

switch (str) {
    case "John":
        console.log("Имя John");
        break;
    case "Bob":
        console.log("Имя Bob");
        break;
    case "George":
        console.log("Имя George");
        break;
    case "Petr":
        console.log("Имя George");
        break;
    case "Alex":
        console.log("Имя Alex");
        break;
    default:
        console.log("Нам не известно имя");
        break;

}

let nums = 23;

let res = "";
if(nums > 26)
    res = "Big";
else
    res = "Small";
console.log(res);

let result = nums > 26 ? "Big" : "Small";
console.log(result);