class Ninja {
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        console.log(this.name);

    }
    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);

    }

    drinkSake(){
        this.health +=10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom=10;
    }

    speakWisdom(){
        console.log("Knowing yourself is the beginning of all wisdom");
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
