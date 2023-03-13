const Pet = require('../src/pet');

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
});

describe('pet gets hungry', () => {
  it('makes pet hungry',() => {
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
});

describe('swim', () => {

  it('increases fitness by to a maximum of 10', () => {
    const fin = new Pet('Fin');

    fin.fitness = 8;
    fin.swim();

    expect(fin.fitness).toEqual(10);
  });
});