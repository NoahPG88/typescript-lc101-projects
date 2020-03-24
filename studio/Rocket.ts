import {Payload} from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let itemsSum: number = 0
        items.forEach(element => {
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
    }

    currentMassKg(): number {
        let cargoMass = this.sumMass(this.cargoItems);
        let astronautsMass = this.sumMass(this.astronauts);
        let currentMass = cargoMass + astronautsMass;

        return currentMass;
    }

    canAdd(item: Payload): boolean {
        if(this.currentMassKg()+item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    }


    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}