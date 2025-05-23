//if else

const a = 50
if(a>=60){
    console.log("you are old");
    
}
else{
    console.log("you are young");
    
}

//else if can use multiple else if statements but it should starts from if and ends with else

let mark =78;
if (mark >=90){
    console.log("A Grade");
    
}
else if (mark >=80){
    console.log("B Grade");
    
}
else if (mark >=70){
    console.log("C Grade");
}
else if (mark >=60){
    console.log("D Grade");

}
else if (mark >=50){
    console.log("Average");
    
}
else if (mark >=40){

    console.log("Below Average");
}
else {
    console.log("Fail");
    
}

// task

let purchase = 29999

if (purchase>=50000){
    console.log("Premium customer")    
}
else if (purchase>=40000 || purchase>=49999){
    console.log("Diamond Customer");
}
else if(purchase>=30000 || purchase>=39999){
    console.log("Platinum customer");
}
else if(purchase>=20000 || purchase>=29999){
    console.log("Gold customer");
}
else if(purchase>=10000 || purchase>=19999){
    console.log("Silver customer");    
}   
else {
    console.log("Regular customer");    
}

