// ## Add method and property to coffee maker
// Improve the pre-made coffee maker code below: add the public method `stop()` to 
// the coffee maker, which will stop boiling (via clearTimeout).


function CoffeeMachine(power) {
	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
		setTimeout(onReady, getBoilTime());
	};
    this.stop= function(){
        clearTimeout(this.timerId);
        console.log('coffee isn\'t ready');
    }
}



var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready

// P.S. *Don't need to calculate and store the current water temperature.*

// P.P.S. *For resolving, you will most likely need to add the private property timerId, 
// which will store the current timer.*

// ## Add getter for power
// Add a getter for the private property `power`, so that the external code can get the power of 
// the coffee maker.


function CoffeeMachine(power, capacity) {
    this.power=power
    this.waterAmount = 0;
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
    this.getPower= function(){
        return power;
    };

}
// # Add public method to coffee maker
// Add a public method `addWater(amount)` to the coffee machine that will add water.

// At the same time, of course, all necessary checks should be carried out - for positiveness and capacity.

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
    this.addWater=function(amount){
        if (amount < 0) {
            throw new Error("Value has to be positive.");}
        else if (waterAmount+amount>capacity){
            throw new Error("You can't put more water, than " + capacity);
        }
        else{
            waterAmount+=amount;
        }
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};

    function onReady() {
		console.log('Coffee is ready');
    }
	this.run = function() {
		setTimeout(onReady, getTimeToBoil());
	};
}
var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // You can't put more water, than 400
coffeeMachine.run();

// ## Add method isRunning
// From the external code, we would like to be able to understand whether the coffee maker is running or not.

// To do this, add a public `isRunning()` method to the coffee maker, which will return true if it is running and false if not.

// Next code should work for you: 


function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    this.timerId = null;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water than " + capacity);
        }
        waterAmount = amount;
    };

    this.onReady = function() {
        console.log("Coffee is ready");
        this.timerId = null;
    };

    this.run = function() {
        this.timerId = setTimeout(() => this.onReady(), getTimeToBoil());
    };

    this.isRunning = function() {
        return this.timerId !== null;
    };
}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});












