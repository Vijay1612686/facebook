//MAP() REDUCE() FILTER () 

//map() --> variable name.map((value,index,acctualarray) => declaration)

let a = [15,25,35,45,55]
let b = a.map((val,ind,acc)=>val+5)
let c = a.map((val,ind,acc)=>ind*2)
console.log(b,c);

//filter() --> variable name.filter((value,index,acctualarray) => declaration)

let f = [10,3,334,34,45,545,765,32,77,85,43,65,90]
let fil = f.filter((x,y,z)=>x>200)
let fi = f.filter((x,y,z)=>y<5)
console.log(fi,fil);

//reduce() --> variablename.reduce((accumulator,acctualarray)=> declaration)

let ac = [10,20,30,40]
let acc = ac.reduce((l,i)=>l+i)
console.log(acc);

//example

let ex = [1+3+5+7+9]
console.log(ex*2);
