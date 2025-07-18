let arr=["hello",23,15,true,'data',null,100,'array',undefined,'javascript',25,'view'];
console.log(arr);
arr.sort();
console.log(arr); //sort

arr.reverse()
console.log(arr); //reverse

arr.pop()
console.log(arr); 

arr.push("srushti")
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(false)
console.log(arr);

let arr1=[500,650,700,800];
let s = arr.concat(arr1);  //we cant directly concat data . for concat data we have to use new variable and store data in new variable.
console.log(s);

let demo = arr.join('@');
console.log(demo);  //use to give another symbol instead of comma

let hello=arr.slice(3,9);
console.log(hello);       //only access the data between 3 to 8

arr.splice(4,12,200,300,400,500);
console.log(arr);    // it remove the element from 4to 12 and add new element
  