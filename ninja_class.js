function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log('My ninja name is ' + this.name);
        return this;
    };

    this.showStats = function(){
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
        return this;
    };

    this.drinkSake = function(){
        this.health += 10;
        return this;
    };

    this.punch = function(other_ninja){
        if (other_ninja instanceof Ninja){
            other_ninja.health -= 5;
            console.log(other_ninja.name + ' was punched by ' + this.name + ' and lost 5 health!');
        } 
        return this;
    };

    this.kick = function(other_ninja){
        if (other_ninja instanceof Ninja){
            var impact = strength * 5;
            other_ninja.health -= impact;
            console.log(other_ninja.name + ' was kicked by ' + this.name + ' and lost ' + impact + ' health!');
        } 
        return this;    
    };
}

var ninja1 = new Ninja('Hyabusa');

ninja1.sayName();

ninja1.showStats();

ninja1.drinkSake().showStats();

var ninja2 = new Ninja('Alyssa');

ninja2.showStats();


var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);

