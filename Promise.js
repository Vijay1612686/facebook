//Promise 
//return new Promise ((resolve, reject) => {})

function go () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Going to shop")
        },5000)
    })
}
function buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bought the product")
        },2000)
    })
}
function change() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Collect the changes")
        },2000)
    })
}
function home(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Back to home")
        },5000)
    })
}
go()
.then(val => {console.log(val);return buy()})
.then(val => {console.log(val);return change()})
.then(val => {console.log(val);return home()})
.then(val => {console.log(val)})

//resolve and rejection
// for resolve --> need to use .then function
// for rejection --> need to use catch function

function go () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop=true
            if(shop){
            resolve("Going to shop")
            }
            else{
                reject("Not going to shop")
            }
        }, 5000);
    })
}
function buy() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const get=true
            if(get){
            resolve("Bought the product")  
            }
            else {
            reject("Not buy the product")
            }
    }, 2000);
    })
}
function change() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const collect=false
            if (collect){
            resolve("Collect the changes")
            }
            else {
                reject("Forgot to collect the change")
            }
        }, 2000);
    })
}
function home(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const back=false
            if(back){
            resolve("Back to home")  
            }
            else {
                reject("Not returned to home")
            }
        }, 2000);            
    })
}

async function output() {
    try {
        const a = await go();
        console.log(a);
        const b = await buy();
        console.log(b);
        const c = await change();
        console.log(c);
        const d = await home();
        console.log(d);
        
    } catch (er) {
        console.log(er);        
    }
}
output();

//go()
// .then(val => {console.log(val);return buy()})
// .then(val => {console.log(val);return change()})
// .then(val => {console.log(val);return home()})
// .then(val => {console.log(val)})

// if statement is false and result produced in incorrect statement need to use async await function with the help of try and catch function

//example 1

function noball() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const height= true
            if(height){
                resolve("It is correct ball")
            }
            else{
                reject("It is no ball")
            }
        }, 2000);
    })
}
function wide() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const long= true
            if(long){
                resolve("It is wide")
            }
            else{
                reject("It is not a wide")
            }
        }, 2000);
    })
}
function byes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const by = false
            if(by){
                resolve("Hitted on pad")
            }
            else{
                reject("Not on pad")
            }
        }, 2000);
    })
}
async function result () {
    try {
        const x= await noball();
        console.log(x);
        const y= await wide();
        console.log(y);
        const z=await byes();
        console.log(z);     
    } 
    catch (err) {
        console.log(err);
        
    }
}
result();
