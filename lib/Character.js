
const randomNumInRange = (min, max) => 
Math.floor(Math.random() * (max - min) + min);

class Character {
    constructor(name = '') {
        this.name = name;
        this.health = randomNumInRange(95, 105);
        this.strength = randomNumInRange(7, 12);
        this.agility = randomNumInRange(7, 12);
    };

    isAlive() {
        if (this.health === 0) {
            return false;
        };
    
        return true;
    };

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
    
        return randomNumInRange(min, max);
    };

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        };
    };
};

module.exports = Character;