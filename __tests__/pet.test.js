const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fint');
  });
  it('has an initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});

describe('grow up', () => {
  it('ages pet by 1', () => {
    const pet = new Pet('Fido');
    
    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});

describe('pet gets hungry', () => {
  it('makes pet hungry',() => {
    const pet = new Pet('Fido');

    pet.hunger();
    
    expect(pet.hunger).toEqual(5);
  });
});

describe('pets decreasing fitness with age', () => {
  it('pets fitness decreases as it gets older', () => {
    const pet = new Pet('Fido');

    pet.fitness();

    expect(pet.fitness).toEqual(10);
  });
});
