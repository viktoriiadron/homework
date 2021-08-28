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
    constructor(nickname, food, location, isHomeless=true) { // по дефолту true
        super(nickname, food, location);
        this.isHomeless = isHomeless;
    }
}

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
        return this.firstName + ' ' + this.lastName;
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
        return this.#findingPetsPeople; //когда get пишем return
    }

    addAnimal(animal) {
       this.#illAnimals.push(animal) //не добавлять return!! иначе возвратится длина массива.
    }

    addPeople(...people) {
        this.#findingPetsPeople.push(...people) // все правильно, всех людей
    }

    findHome(nickname) {
        if (this.#illAnimals.find(nickname)) { //include можно использовать
            return  {
                status: 'restricted',
                message: `We need to heal ${nickname.nickname} firstly`,
            }            
        } else {
            let [person] = this.#findingPetsPeople.splice(
               Math.floor(Math.random() * this.#findingPetsPeople.length()), 1)
            return {
                status: 'success',
                name: person.getFullName(), //person.getFullName()
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
        return `${super.getFullName()} works in ${this.hospital.name}`
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
        } else if (nickname.isHomeless) {
            this.hospital.findHome(nickname);
            return {
                diagnosis: `healthy`,
                info: `change home. Now ${this.firstName} ${this.lastName} have a new friend - ${nickname.nickname}`,
            }
        } else if (!nickname.isHomeless) {
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

    treatAnimal(nickname) {
        this._setDiagnosis(nickname);
        if (nickname.diagnosis === 'ill') {
            this.hospital.addAnimal(nickname);
            return {
                info:  `${nickname.nickname} from ${nickname.location}`,
                fullDiagnos: `${nickname.diagnosis}: ${nickname.info}`,
            }
        }
    }
}