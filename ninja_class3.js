class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.speed + ', Strength: ' + this.strength);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        this.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.');
        return this;
    }
}

// example output
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"