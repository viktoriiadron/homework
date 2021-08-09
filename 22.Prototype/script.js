// 1

let student = {
    firstName: 'Billie',
    lastName: 'Jean',
    averageScore: 4.8,
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    isGrantHolder() {
        if (this.averageScore >= 4) {
            return true
        } else return false
    }
}

console.log(student.isGrantHolder()); 

function Aspirant(dissertationTopic, isDissertationComplete) {
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.isGrantHolder = function () {
        if (this.avarageScore >= 4.5 && this.isDissertationComplete === true) {
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
//     }
//         isGrantHolder() { 
//         if (this.avarageScore >= 4.5 && this.isDissertationComplete === true) {
//             return true
//         } else return false
//     }    
// }

// let aspirant = new Aspirant('some topic', true);
// aspirant.__proto__ = student;
// console.log(aspirant.isGrantHolder());
// console.log(aspirant.getFullName());

// 2


