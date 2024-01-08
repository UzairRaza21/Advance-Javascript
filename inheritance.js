class TourPackage{
    constructor(packagePlace){
        this.place = packagePlace;
        console.log(`Your selected package is ${this.place}`);
    }
}

class TourDetails extends TourPackage{
    constructor(packagePrice){
        super();
        this.price = packagePrice;
        console.log(`Price of your selected plan is ${this.price}`)
    }
}
let TourDes = new TourPackage("Sawat");
let TourPlan = new TourDetails("Sawat");