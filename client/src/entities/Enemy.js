import Entity from "./Entity.js";

// import monster details (in json format files)
import StrayDogJSON from "../../../server/monnsterAttributes/monstersDirectories/baseMonsters/strayDog.json" assert { type: "json" };
import OverGrownEarthwormJSON from "../../../server/monnsterAttributes/monstersDirectories/baseMonsters/overGrownEarthworm.json" assert { type: "json" };
import MutantMushroomJSON from "../../../server/monnsterAttributes/monstersDirectories/baseMonsters/mutantMushroom.json" assert { type: "json" };
import CommonBirdJSON from "../../../server/monnsterAttributes/monstersDirectories/baseMonsters/commonBird.json" assert { type: "json" };
import SlimySlimeJSON from "../../../server/monnsterAttributes/monstersDirectories/baseMonsters/slimySlime.json" assert { type: "json" };

// monster class
// class Enemy extends Entity {
class Enemy {
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
const enemiesArr = [
    StrayDogJSON,
    OverGrownEarthwormJSON,
    MutantMushroomJSON,
    CommonBirdJSON,
    SlimySlimeJSON,
];

// Generate type of monster randomly
let enemyType = enemiesArr[getRandomValue(enemiesArr.length)];
let levelArrSize = enemyType.attribute.level_details.length;

// Create an object of a random monster with a random level
let enemyDetails = {
    name: enemyType.name,
    level: enemyType.attribute.level_details[getRandomValue(levelArrSize)],
    element: enemyType.attribute.element,
    drops: enemyType.attribute.drops,
    skills: enemyType.attribute.skills,
};

// Enemy object!!!
let TheEnemy = new Enemy(
    enemyDetails.name,
    enemyDetails.level,
    enemyDetails.element,
    enemyDetails.drops,
    enemyDetails.skills
);

console.log(TheEnemy);

export default Enemy;
