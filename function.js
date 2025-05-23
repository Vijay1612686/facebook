//non-primitve is known as unlimited values (array, object, function)

//array - []
//object - {}
//function

//array []

let ar = ["java",1234, 12.345,true,false,null]
console.log(ar)


//object{} can add key and values

let ob = {

    name  : "Vijay",
    place : "Chennai",
    num : 908798734,
    id : 123489734
}
console.log(ob)

//function (){} it is used to store large data and reusable by a specified name

function mrg(){
var a = 15
var a = 25
console.log(a)

}
mrg();

//4 types of function
//function statement declaration --> parameter & argument
//fun()--> is a parameter
function fun (js){

    console.log(js)

}
fun("javascript");
//value passing place is called argument
//function expression or anonymous function--> storing a function in a variable
//need to declare name for function expression
//for anonymous function, name not required
//function expression

let a = function id (exp){
    console.log(exp);
}
a("expression");
//anonymous function
let b = function (ano){
    console.log(ano);

}
b("function")

//immediate invoke function expression
//entering function within a bracket ()

(function(iife){
    console.log(iife);
})
("IMMEDIATE")

//Arrow function
//syntax  -->  ()=>{}
    let arr = (funt)=>{console.log(funt)}
    arr("arrow function")

//example of arrow function

let arow = (a)=>{console.log(a)}
arow("example of arrow function")

