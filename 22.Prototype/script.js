// 1

let student = {
    firstName: 'Billie',
    lastName: 'Jean',
    averageScore: 4.8,
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    isGrantHolder() {
        return this.averageScore >= 4;
        // if (this.averageScore >= 4) {
        //     return true
        // } else return false
    }
}

console.log(student.isGrantHolder()); 

function Aspirant(dissertationTopic, isDissertationComplete) {
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.isGrantHolder = function () {
        if (this.averageScore >= 4.5 && this.isDissertationComplete) {
            return true
       } else return false
    }
}

Aspirant.prototype = student;
let aspirant = new Aspirant('some topic', true);
console.log(aspirant)
console.log(aspirant.isGrantHolder());

// class Aspirant {
//     constructor(dissertationTopic, isDissertationComplete) {
//         this.dissertationTopic = dissertationTopic;
//         this.isDissertationComplete = isDissertationComplete;
//         this.__proto__ = student;
//     }
//     isGrantHolder() {
//             return this.avarageScore >= 4.5 && this.isDissertationComplete
//         // if (this.averageScore >= 4.5 && this.isDissertationComplete === true) {
//         //     return true
//         // } else return false
//     }    
// }

// let aspirant = new Aspirant('some topic', false);
// //aspirant.__proto__ = student;
// console.log(aspirant)
// console.log(aspirant.isGrantHolder());
// console.log(aspirant.getFullName());

// 2

class Plane {
    constructor (name) {
        this.name = name;
        this.isFlying = false;
    }
    takeOff() {
        this.isFlying = true;
    }
    land() {
        this.isFlying = false;
    }
}

let airport = {
    planes: [],
    getFlyingPlanes() {
        // let flying = this.planes.filter(function isFlyingFunc(plane) {
        //     return plane.isFlying === true;
        // });
        // //console.log(flying)
        // return flying.length
        return this.planes.filter(plane => plane.isFlying)
    }
}

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
// console.log(airport.planes)
console.log(airport.getFlyingPlanes());