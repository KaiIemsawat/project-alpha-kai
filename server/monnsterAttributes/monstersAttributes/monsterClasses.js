// import monster details (in json format files)
const StrayDogJSON = require("../monstersDirectories/baseMonsters/strayDog.json");
const OverGrownEarthwormJSON = require("../monstersDirectories/baseMonsters/overGrownEarthworm.json");
const MutantMushroomJSON = require("../monstersDirectories/baseMonsters/mutantMushroom.json");

// monster class
class Monster {
    constructor(name, level, element, drops, skills) {
        this.name = name;
        this.level = level;
        this.element = element;
        this.drops = drops;
        this.skills = skills;
    }
}

// function used for generate ramdom number
// Used to get a random monster from monster array. Also used to get a random monster level
function getRandomValue(attributeArrLength) {
    return Math.floor(Math.random() * attributeArrLength);
}

// Array of monsters
// Once we create a new monster in json, we can import the file and add the monster into this array to be part of generating
const monsterArr = [StrayDogJSON, OverGrownEarthwormJSON, MutantMushroomJSON];

// Generate type of monster randomly
let monsterType = monsterArr[getRandomValue(monsterArr.length)];
let levelArrSize = monsterType.attribute.level_details.length;

// Create an object of a random monster with a random level
let monDetails = {
    name: monsterType.name,
    level: monsterType.attribute.level_details[getRandomValue(levelArrSize)],
    element: monsterType.attribute.element,
    drops: monsterType.attribute.drops,
    skills: monsterType.attribute.skills,
};

// Monster object!!!
let TheMonster = new Monster(
    monDetails.name,
    monDetails.level,
    monDetails.element,
    monDetails.drops,
    monDetails.skills
);

console.log(TheMonster); // verify if the monster created randomly
