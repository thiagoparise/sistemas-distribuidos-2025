const persons = require('./constants.js');
const _ = require("lodash");

function getOldestPerson(persons) {
    return _.maxBy(persons, "edad");
}

function getTallestPerson(persons) {
    return _.maxBy(persons, "altura");
}

function printWithFormat() {
    console.log(`La persona mas vieja es ${getOldestPerson(persons).nombre}`);
    console.log(`La persona mas alta es ${getTallestPerson(persons).nombre}`);
}

printWithFormat();