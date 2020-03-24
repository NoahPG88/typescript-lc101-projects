"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var itemsSum = 0;
        items.forEach(function (element) {
            itemsSum += element.massKg;
        });
        //alt code
        /*
        let itemsSum: number = 0;
        for (let item of items) {
            itemsSum+= element.massKg;
        }
        */
        return itemsSum;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoMass = this.sumMass(this.cargoItems);
        var astronautsMass = this.sumMass(this.astronauts);
        var currentMass = cargoMass + astronautsMass;
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
