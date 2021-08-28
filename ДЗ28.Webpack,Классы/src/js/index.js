
import { Animal, Dog, Cat, Person, Hospital, Veterinarian } from './text-export-default.js';


function main() {
    let hospital = new Hospital('Cool clinic');
    let person1 = new Person('Alex', 'Grey');
    let person2 = new Person('Lara', 'Brown');
    let person3 = new Person('Mila', 'Red');
    let doctor = new Veterinarian('Katy', 'Smith', hospital);
    let animal1 = new Animal('Misha', 'normal', 'street');
    let animal2 = new Dog('Jerry', 'normal food', 'street', 21);
    let animal3 = new Cat('Mr. White', 'normal food', 'street', false);

    console.log(hospital);
    console.log(person1);
    console.log(person2);
    console.log(doctor);
    console.group(doctor.getFullName());
    console.log(doctor._setDiagnosis(animal3));
    console.log(animal1);
    console.log(doctor._setDiagnosis(animal1));
    console.log(doctor._setDiagnosis(animal2));
    


    let illAnimalNicknames = hospital.getAnimals().map(function (elem) {
       return elem.nickname
    })
    
    console.log('Animals in the hospital: ' + illAnimalNicknames);
}

main();
