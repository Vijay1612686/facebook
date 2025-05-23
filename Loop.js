//loop types
//for loop
//syntax (initialization;condition : iteration)

for(let a =1;a<=5;a++){
    console.log(a);
    
}

for(b =1;b<=5;b++){
 console.log("Vijay");   
}


//while loop
//sy(ntax initialization-->condition-->output-->code run
let c = 1
while(c<=6){
    console.log(c);
    
}

//do whille loop--> if the condition is false it will print the first value alone
let d = 1
do{
    console.log(d);
    d++
}while(d>=5)

//for off --> it is used to display as a single line item in output

let fruit =["apple","mango","banana","orange","kiwi","grapes"]
for(sap of fruit){
    console.log(sap);
}

//for in --> used to show only key values

let obj ={
    name : "John",
    place : "Chennai",
    age : 26,
    number : 8987987984
}
for(details in obj){
    //console.log(details)
    console.log(details+" : "+obj[details]);
    
}

//task number reverse from 10 to 1 in loop

for(a=10;a>=1;a--)
    console.log(a);

//print even numbers

for(a=2;a<=20;a+=2)
    console.log(a);

//sum numbers

    let sum = 0;
    for ( i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log("Sum:", sum);
    
//array elements

let arr = ["apple","pineapple","butterfruit"]
for (i=0;i<arr.length;i++){
    console.log(arr[i]);   
}

