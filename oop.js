class product {
    constructor (pname, price){
        this.productName = pname;
        this.productPrice = price;
        console.log(`This is ${this.productName} and its price is ${this.productPrice}`);
    }
    static productDescription(){
        console.log("Best for shoes");
    }
}

let cherry = new product("Black", 20);
// static funtion calling
product.productDescription()