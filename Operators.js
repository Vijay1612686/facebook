//operators
// six types of operators
// Arithmetic operators +, -, *, /, modulusu %, expond **, increment ++, decrement --
//modulusu to show the remainder value in division
//expond is like squaring the number

var a = 5
var b = 5
console.log(a/b)
console.log(a%b)
console.log(a**b)

// Assignment

let a = 10
a +=10
console.log(a)

// comparison <, >, <=, >=

let b = 10;
let c = 10;
console.log(b<c);
console.log(b<=c);

// Logical AND(&&), OR(||), NOT (!)

console.log(b!=c);

// Strict operators 
// == loose equality/ double equal --> checks only inner body
// === strict equality/ triple equal --> checks both inner and outer body

let d = 20
let e = "20"
console.log(d==e)
console.log(d===e)

// Ternary operators
//variable name = (condition)? "true value": "false value"

var age = 15
var check = (age >=18)? "he is eligible to vote" : "not eligible to vote"
console.log(check)

//And operator && --> it will shows false value if either any one of the condition is satisified

let age = 150
let check = (age >=18 && age <=120)? "he is eligible to vote" : "not eligible to vote"
console.log(check)

//OR operator --> it will shows true value if either any one of the condition is satisified

let mark = 40
let check = (mark >35 || mark <=100)? "pass": "fail"
console.log(check)

//task 1

var a =15
var b = a++
console.log(b)

let f = 10
 f-=
 console.log(f)

 let h =15
 h++
 h--
 console.log(h)

 //task 2

 let marks = 30
 let check = (marks>=35 || marks>=100)? "pass": "fail"
 console.log(check)

 //task 3

  var g = 10
  g-=5
  console.log(g)
  var g = 10
  g+=5
  console.log(g)
  var g = 10
  g*=5
  console.log(g)
  var g = 10
  g/=5
  console.log(g)
  var g = 10
  g%=5
  console.log(g)
  var g = 10
  g**=5
  console.log(g)
  

  
 



