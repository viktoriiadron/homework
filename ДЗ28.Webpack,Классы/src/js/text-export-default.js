export class Animal {
    constructor(nickname, food, location) {
        this.nickname = nickname;
        this.food = food;
        this.location = location;
    }
    changeFood(food) {
        this.food = food;
    }
}

export class Dog extends Animal {
    constructor(nickname, food, location, weight) {
        super(nickname, food, location);
        this.weight = weight;
    }
}

export class Cat extends Animal {
    constructor(nickname, food, location, isHomeless) {
        super(nickname, food, location);
        this.isHomeless = true;
    }
}

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
        return firstName + ' ' + lastName;
    }
}

export class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];
    constructor(name) {
        this.name = name;
    }

    getAnimals() {
        return this.#illAnimals;
    }

    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    }

    addAnimal(animal) {
        this.#illAnimals.push(animal)
    }

    addPeople(...people) {
        this.#findingPetsPeople.push(...people)
    }

    findHome(nickname) {
        if (this.#illAnimals.find(nickname)) {
            return  {
                status: 'restricted',
                message: `We need to heal ${nickname.nickname} firstly`,
            }            
        } else {
            this.#findingPetsPeople.splice(
                Math.random() * this.#findingPetsPeople.length(), 1)
            return {
                status: 'success',
                name: `${this.firstName} ${this.lastName}`,
            };
        }

    }
}

export class Veterinarian extends Person {
    #diagnosis = { ill: 'ill', healthy: 'healthy' };
    constructor(firstName, lastName, hospital) {
        super(firstName, lastName);
        this.hospital = hospital;

    }

    getFullName() {
        return `${this.firstName} ${this.lastName} works in ${this.hospital}`
    }

    _setDiagnosis(nickname) {
        if (nickname.weight > 20) {
            return {
                diagnosis: `ill`,
                info: `overweight`,
            } 
        } else if (nickname.food === 'корм') {
            nickname.changeFood('meal with rice');
            return {
                diagnosis: `ill`,
                info: `change food. Now ${nickname.nickname} eats ${nickname.food}`,
            }
        } else if (nickname.isHomeless === true) {
            findHome(nickname);
            return {
                diagnosis: `healthy`,
                info: `change home. Now ${this.firstName} ${this.lastName} have a new friend - ${nickname.nickname}`,
            }
        } else if (nickname.isHomeless === false) {
            return {
                diagnosis: `ill`,
                info: `${nickname.nickname} has a home`,
            }
        } else {
            return {
                diagnosis: `healthy`,
                info: `${nickname.nickname} is healthy`,
            }
        }
    }

    treatAnimal(nickname, location) {
        _setDiagnosis(nickname);
        if (nickname.diagnosis === 'ill') {
            addAnimal(nickname);
            return {
                info:  `${nickname} from ${location}`,
                fullDiagnos: `${nickname.diagnosis}: ${nickname.info}`,
            }
        }
    }
}