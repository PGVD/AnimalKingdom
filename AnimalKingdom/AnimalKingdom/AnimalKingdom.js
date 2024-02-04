// Encapsulation: Base class for animals
class Animal {
    // Encapsulation: Constructor for initializing the name
    constructor(name) {
      this.name = name;
    }
  
    // Encapsulation: Displaying information about the animal
    displayInfo() {
      console.log(`Name: ${this.name}`);
    }
  }
  
  // Inheritance: Mixin for cold-blooded behavior
  const ColdBloodedMixin = superclass => class extends superclass {
    // Encapsulation: Constructor for setting cold-blooded property
    constructor(name) {
      super(name);
      this.coldBlooded = true;
    }
  };
  
  // Inheritance: Mixin for warm-blooded behavior
  const WarmBloodedMixin = superclass => class extends superclass {
    // Encapsulation: Constructor for setting warm-blooded property
    constructor(name) {
      super(name);
      this.coldBlooded = false;
    }
  };
  
  // Inheritance: Mixin for invertebrate behavior
  const InvertebrateMixin = superclass => class extends superclass {
    // Encapsulation: Constructor for setting backbone property
    constructor(name) {
      super(name);
      this.backbone = false;
    }
  };
  
  // Inheritance: Mixin for vertebrate behavior
  const VertebrateMixin = superclass => class extends superclass {
    // Encapsulation: Constructor for setting backbone property
    constructor(name) {
      super(name);
      this.backbone = true;
    }
  };
  
  // Inheritance: Subclass for Arthropoda (invertebrate and cold-blooded)
  class Arthropoda extends InvertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Inheritance: Subclass for Fish (vertebrate and cold-blooded)
  class Fish extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Inheritance: Subclass for Amphibia (vertebrate and cold-blooded)
  class Amphibia extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Inheritance: Subclass for Reptiles (vertebrate and cold-blooded)
  class Reptiles extends VertebrateMixin(ColdBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Inheritance: Subclass for AVES (vertebrate and warm-blooded)
  class AVES extends VertebrateMixin(WarmBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Inheritance: Subclass for Mammals (vertebrate and warm-blooded)
  class Mammals extends VertebrateMixin(WarmBloodedMixin(Animal)) {
    // Encapsulation: Constructor calling the base class constructor using super()
    constructor(name) {
      super(name);
    }
  }
  
  // Abstraction: Displaying information about each animal using a common method
  function displayAnimalInfo(animal) {
    animal.displayInfo();
  }
  
  // Polymorphism: Creating instances of different classes but using a common interface
  
  // Create instances of each animal class
  const butterfly = new Arthropoda("Butterfly");
  const goldfish = new Fish("Goldfish");
  const frog = new Amphibia("Frog");
  const turtle = new Reptiles("Turtle");
  const eagle = new AVES("Eagle");
  const cat = new Mammals("Cat");
  
  // Polymorphism: Calling the common interface to display information about each animal
  displayAnimalInfo(butterfly);
  displayAnimalInfo(goldfish);
  displayAnimalInfo(frog);
  displayAnimalInfo(turtle);
  displayAnimalInfo(eagle);
  displayAnimalInfo(cat);
  