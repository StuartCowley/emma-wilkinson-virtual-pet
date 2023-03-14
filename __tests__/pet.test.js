const Pet = require('../src/pet');
const fin = new Pet('Fin');
const child = new Pet('JJ');


describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fin')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const fin = new Pet('Fin');

    expect(fin.name).toEqual('Fin');
  });
  it('has an initial age of 0', () => {
    const fin = new Pet('Fin');
    expect(fin.age).toEqual(0);
  });
});

describe('grow up', () => {
  it('ages pet by 1', () => {
    const fin = new Pet('Fin');

    fin.growUp();

    expect(fin.age).toEqual(1);
  });
  it('throws error if pet is dead', () => {
    const fin = new Pet('Fin');

    fin.age = 30;

    expect(() => fin.growUp()).toThrow('Fin is dead :(');
  });
});

describe('pet gets hungry', () => {
  it('makes pet hungry', () => {
    const fin = new Pet('Fin');

    fin.growUp();

    expect(fin.hunger).toEqual(5);
  });
});

describe('pets decreasing fitness with age', () => {
  it('pets fitness decreases as it gets older', () => {
    const fin = new Pet('Fin');
    fin.growUp();
    fin.fitness;

    expect(fin.fitness).toEqual(7);
  });
});

describe('swim', () => {
  it('increases fitness by 4', () => {
    const fin = new Pet('Fin');

    fin.fitness = 4;
    fin.swim();

    expect(fin.fitness).toEqual(8);

  });

  it('increases fitness by to a maximum of 10', () => {
    const fin = new Pet('Fin');

    fin.fitness = 8;
    fin.swim();

    expect(fin.fitness).toEqual(10);
  });

  it('throws error if pet is dead', () => {
    const fin = new Pet('Fin');

    fin.age = 30;

    expect(() => fin.swim()).toThrow('Fin is dead :(')
  });
});

describe('feed', () => {
  it('decreases hunger by 3', () => {
    const fin = new Pet('Fin');

    fin.hunger = 5;
    fin.feed();

    expect(fin.hunger).toEqual(2);

  });

  it('decreases hunger to a minimum of 0', () => {
    const fin = new Pet('Fin');

    fin.hunger = 1;
    fin.feed();

    expect(fin.hunger).toEqual(0);
  });

  it('throws error if pet is dead', () => {
    const fin = new Pet('Fin');

    fin.age = 30;

    expect(() => fin.feed()).toThrow('Fin is dead :(');
  })
});

describe('if fitness is 3 or less', () => {
  it('returns "I need to swim!"', () => {
    const fin = new Pet('Fin');

    fin.fitness = 3;
    fin.checkUp();

    expect(fin.checkUp()).toEqual('I need to swim!');
  });
});

describe('if hunger is 5 or less', () => {
  it('returns "I need food!"', () => {
    const fin = new Pet('Fin');

    fin.hunger = 5;
    fin.checkUp();

    expect(fin.checkUp()).toEqual('I need food!');
  });
});

describe('if hunger is 5 or less and if exercise is 3 or less.', () => {
  it('returns "I am hungry and I need to swim!"', () => {
    const fin = new Pet('Fin');

    fin.hunger = 5;
    fin.fitness = 3;
    fin.checkUp();

    expect(fin.checkUp()).toEqual('I am hungry and I need to swim!')
  });
});

describe('Pet shows as dead when you do a checkup', () => {
  it('returns "Fin is dead :("', () => {
    const fin = new Pet('Fin');

    fin.age = 30;

    expect(() => fin.checkUp()).toThrow('Fin is dead :(')
  })

})

describe('A child pet is added to the game', () => {
  it('allows your pet to have a child', () => {
    const fin = new Pet('Fin');

    fin.adoptBaby('JJ');

    expect(fin.children[0].name).toEqual('JJ');

  })
})