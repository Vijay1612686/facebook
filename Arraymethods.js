/* push () - Adds a new element to the end of the array
pop() - Removes the last element from the array
shift() -  Removes the first element from the array
unshift() - Adds a mew element to the beginning of the array
splice() - Adds or removes elements from the array
splice(add, remove, replace)
sort() - Sorts the element of the array
reverse() - Reverse the order of elements in the array*/

//push()

let a = [10,20,30,40,50]
a.push(60)
console.log(a);

//pop()

let b =[10,20,30,40,50]
b.pop()
console.log(b);


//shift()

let c = [10,20,30,40,50]
c.shift()
console.log(c);

//unshift()

let d = [10,20,30,40,50]
d.unshift(5)
console.log(d);


//splice()
//syntax --> variable name.splice(index,splice,value)
//0 -->it use to add a particular value in the given index space and move forward already specified value
//1 -->it use to add a particular value in the given index space and remove the already specified value

let days = ["sunday","monday","tuesday","thursday","friday","saturday"]
days.splice(3,0,"wednesday")
//days.splice(3,1,"wednesday")
console.log(days);

//sort()

let ab = ["orange","banana","mango","apple","pineapple","grapes"]
console.log(ab.sort());

//reverse()

let rev = "hcraes"
console.log(rev.split("").reverse().join(""));

//task reverse the name and number

let name = "yajiv"
console.log(name.split("").reverse().join(""));
/*
    const arr = [1, 2, 3, 4, 5];
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr); */

    let arr = [1,2,3,4,5,6,7,8,9,]
    let reversedArr = [];
    for (let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr);
    



//task splice

let month = ["january","february","march","april","may","june","july","august","september","december"]
month.splice(9,0,"october")
month.splice(10,0,"november")
console.log(month);




