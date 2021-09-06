import { students } from './students.js';

function getOwnId() {
    let id = 0;
    return function () {
        id += 1;
        return id;
        };
}

let getId = getOwnId();

class Student {
    constructor({ name, surname, ratingPoint, schoolPoint } = enrolle) {
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
    }

    static id = 1;

    id = getId();
    isSelfPayment = true;
}

class University {
    constructor(name) {
        this.name = name;
    }
    students = [];


    addStudent(student) {
        
        this.students.push(student);
        this.students.sort((a, b) =>
            (a.ratingPoint + a.schoolPoint) - (b.ratingPoint + b.schoolPoint) 
        ).reverse();
       
        for (let i = 0; i <= 4; i++) {
            if (student.ratingPoint >= 800) {
                newGroup[i].isSelfPayment = false; 
            }
        }
    }

    getAllStudents() {
        return this.students;
    }

    getBugjetStudents() {
        return this.students.filter(student => !student.isSelfPayment);
    }
}

let university = new University('KhNEU');



let newGroup = students.map(function (enrolle) {
    let newStudent = new Student(enrolle);
    return newStudent;
});

newGroup.map(function (student) {
    university.addStudent(student)
} )

console.log(newGroup);

console.log(university.getAllStudents());
console.log(university.getBugjetStudents());

