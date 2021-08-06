// let mySet = new Set();
// mySet.add(5);
// mySet.add(5,4);
// mySet.add("5");
// mySet.add({"name" : "Alex"});
// mySet.add(55);
//
// mySet.delete(5);
// console.log(mySet.has(5));
// mySet.add(true);
// mySet.add(5);
//
// mySet.forEach(function (el){
//     console.log(el);
// })
// // for (let el of mySet)
// //     console.log(el);

let map = new Map();
map.set("first", "str1" );
map.set(2, "str2");
map.set(true, "str3");
map.set({"name" : "alex"}, "str4")
// map.delete(2);
// map.size;
// console.log(map.has(2));

// console.log(map);

// for(let el of map.keys())
// for(let el of map.values())
for(let el of map)
    console.log(el);
