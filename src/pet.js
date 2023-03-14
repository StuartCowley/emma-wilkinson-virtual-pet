
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}


Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Fin is dead :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.swim = function () {
    if (!this.isAlive) {
        throw new Error('Fin is dead :(');
    }
    const MAXIMUM_FITNESS = 10;
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Fin is dead :(');
    }
    const MINIMUM_HUNGER = 0;
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;

    };
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Fin is dead :(');
    }
    if (this.hunger >= 5 && this.fitness <= 3) {
        return 'I am hungry and I need to swim!';
    } else if (this.fitness <= 3) {
        return 'I need to swim!';
    } else if (this.hunger >= 5) {
        return 'I need food!'
    } else return 'I am great.'
};


module.exports = Pet;
