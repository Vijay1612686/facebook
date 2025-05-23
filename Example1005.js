//example 

    console.log(typeof "Vijay")
    console.log(typeof 1234,12.45)
    console.log(typeof true,false)
    console.log(typeof 123456789n)

    var aa = 15
    console.log(aa)
    var aa = 25
    console.log(aa)
    
    let b1 = 250
    let b2 = 250
    
    console.log(b1,b2)

    const d1 = 1500
    const d2 = false
    const d3 = "vijay"    
    console.log(d1,d2)

    let ar = ["Playwright",1234, 12.56,null,true,typeof 12345342384n]
    console.log(ar);

    let obj= {
        name : "Vijaya Krishnan",
        age : 30,
        place : "Chennai",
        numb : 985434845,
        id : 34423234,

    }
    console.log(obj)

    //function

function examp (){
    var aa = 15
    console.log(aa)
    var aa = 25
    console.log(aa)
    
    let b1 = 250
    let b2 = 250
    
    console.log(b1,b2)

    const d1 = 1500
    const d2 = false
    
    console.log(d1,d2)


} 
examp();

//example 2

function iphone (){
    console.log("This is iPhone")
}
function Oneplus(){
    console.log("This is Oneplus phone")
}
function Redmi (){
    console.log("This is Redmi phone")
}
function Vivo (){
    console.log("This is Vivo phone")
}
function Samsung(){
    console.log("This is Samsung phone")
}
iphone()
Oneplus()
Redmi()
Vivo()
Samsung()

function func (js){
    console.log(js)
}
func("Javascript");
//with function name

let cal = function board (exp){
    console.log(exp)
}
cal("expression");
//without function name

let sel = function (exp){
    console.log(exp)
}
sel("Expression");

//iife --> all command within bracket
(function(iife){
    console.log(iife)
})
("Immediate invoke function");

//arrow ()=>{}
    let arow = (tent)=>{console.log(tent)}
    arow("Arrow declaration")

    //operator 

    var a = 10
    var b = 20
    console.log(a+b)

    console.log(a-b)

    console.log(a*b)

    console.log(a/b)

    //exercise1

    var price = 500
    var product = "Shampoo"
    var tax = 40
    console.log("Clinicplus")
    console.log(total = price + tax)

    //exercise2

    var fruitname = "Apple"
    var count = 10
    var price = 60
    var total = count*price
    console.log(fruitname)
    console.log(total)

    //exercise

    var a = 15
    var b = 25
    function add (){
        var sum = a+b;
        console.log("The addition of "+a+" and "+b+" is :"+sum)
    }
    add ()

    //exercise

        var factor = "Vijay"
        var fplayer = "Sehwag"
        var fsport = "Cricket"

    function favorite(){
        
        console.log("Favourite actor: "+factor)
        console.log("Favourite player: "+fplayer)
        console.log("Favourite sport: "+fsport)
    }
    favorite()
    
/*increment operator ++
decrement operator --
preincrement operator ++a
post increment operator a++ */

//example 1
var a =15
var b = a++
console.log(b)

//example 2

var a =15
var b = ++a
console.log(b)
