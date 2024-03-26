
//! Day 3 task 1 
//! Method 1 => compare JSON format objects without sorting

var a={name:"person", age:5}
var c={age:5,name:"person"}

var a2=JSON.stringify(a);
var a3=JSON.stringify(c);
var a1=JSON.parse(a2);
var a4=JSON.parse(a3);

let b=Object.values(a1);
let b2=Object.values(a4);

if(b[0]===b2[1]||b[0]===b2[0] && b[1]===b2[0]||b[1]===b2[1])
{
    console.log('The given object values are equal');
}
else{
    console.log("The given object values are not equal");
}


// Day 3 task 1
// Method 2 => Compare JSON format objects using Lodash library instead of sort method

let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

let v=JSON.parse(str1);
let v2=JSON.parse(str2);

var a=v;
var c=v2;
if(_.isEqual(a,c))
{
    console.log("given two object are equal");
}
else
{
    console.log("given two object are not equal");
}