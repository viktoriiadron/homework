import {condidateArr}  from '/candidates.js';

// 1

function removeUser(arr, index) {
    arr.splice(index, 1);
    return arr;
}

const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']

// 2

class Candidate {
    constructor(candidate) {
        this.candidate = candidate;
    }

    state() {
        return this.candidate.address.split(',')[2];
    }
}

const candidate = new Candidate(condidateArr[0]);

console.log(candidate.state());

// 3

function getCompanyNames(array) {
    let set = new Set();
    array.forEach(element => set.add(element.company))
    return [...set];
}

console.log(getCompanyNames(condidateArr));

// 4

function getUsersByYear(year, array) {
    let res = array
        .filter(element =>
            new Date(element.registered).getFullYear() === year)
        .map(element => element._id);
    return res;
}

console.log(getUsersByYear(2017, condidateArr));

// 5

function getCandidatesByUnreadMsg(unreadMsgNumber, array) {
    let res = array.filter(element => String(element.greeting.match(/\d+/g)) === String(unreadMsgNumber));
    return res;
}

console.log(getCandidatesByUnreadMsg(4, condidateArr));

// 6

const searchCandidatesByPhoneNumber = phone => {

    let res = condidateArr.filter(element =>
        element.phone
            .replace(/[\s+()-]/g, '')
            .includes(
                phone.replace(/[\s+()-]/g, '').toString()
            ));
    return res;
}

console.log(searchCandidatesByPhoneNumber('1(869)40839-82'));

// 7

const getEyeColorMap = () => {
    let map = new Map();
    condidateArr.forEach(element => map.set(element.eyeColor, element));
    let res = Object.fromEntries(map)
    return res;

}

console.log(getEyeColorMap());