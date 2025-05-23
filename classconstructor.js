//constructor 

class model {
    constructor(brand,price,color) {
        this.brand=brand;
        this.price=price;
        this.color=color;
                
    }
    //need to use back tick (`)
    output(){console.log(`I like ${this.brand} \nThe price amount is ${this.price} \nI need ${this.color} color`)
    }
}
const car = new model ("BMW","75 Lakhs","White");
car.output();

//example

class laptop {
    constructor(brand,price,processor) {
        this.brand=brand;
        this.price=price;
        this.processor=processor;
    }
    output() {console.log(`Need to buy ${this.brand} \nAmount is ${this.price} \nThe processeor should be ${this.processor}`);
        }
}
const pur = new laptop("DELL","50000","I8");
pur.output();

//example

