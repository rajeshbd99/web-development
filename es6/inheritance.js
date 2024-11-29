class vehicle{
   constructor(name, price){
    this.name = name;
    this.price = price;
   }  
   move(){
    console.log(`${this.name} is moving`);
   }
}

class car extends vehicle {
    constructor(name,price, seat, engine){
        super(name,price);
        this.seat = seat;
        this.engine = engine;
    }
    move(){
        super.mmove();
        console.log(`${this.name} is moving`);
    }
}

class bike extends vehicle {
    constructor(name,price, seat, engine){
        super(name,price);
        this.seat = seat;
        this.engine = engine;
    }
    move(){
        super.move();
        console.log(`${this.name} is moving`);
    }
}

const car1 = new car ('BMW', 100000, 4 , 'v8');
console.log(car1);