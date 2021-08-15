// alert("Phuwin")


// DATA Types [syntex : typeof]
var xx = 123;
console.log(typeof xx); //result : number
var yy = "Phuwin"
console.log(typeof yy); //result : string
var zz = xx==yy;
console.log(zz,typeof zz);//result : false boolean
var ar = [1,2,5]
console.log(typeof ar);//result : object(array)
console.log(ar); //result : [ 1, 2, 5 ]
console.log(ar.length); //result : 3

//assign value on ตำแหน่งท้ายสุดของตัว array ได้
ar.push("black");
console.log(ar); //result : [ 1, 2, 5, 'black' ]
console.log(ar.length); //result : 4

var obj = { name:"Micjen",lastname:"Jenarong"}
console.log(obj); 
//result :  { name: 'Micjen', lastname: 'Jenarong' }
console.log(typeof obj);
//result : object
console.log(obj.name); /***** console.log(obj["name"]); *****/
//result : Micjen

// Undefined is datatype
// Null is object

var un = undefined;
var nu = null;
console.log(nu == un); // false == false จะได้ result : true
console.log(nu === un); // === มันจะ check type ของทั้ง 2 อันด้วยเลยได้ false

// ***** DOM(Document Object Model)is access tag on html  ******//
// script.js ต้องย้ายมาอยู่ใต้ body
