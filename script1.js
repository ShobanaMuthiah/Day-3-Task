
// import _ from 'lodash';
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);
var a=obj1;
var b=obj2;
if(_.isEqual(a,b))
{
    console.log("given two object are equal");
}
else
{
    console.log("given two object are not equal");
}

