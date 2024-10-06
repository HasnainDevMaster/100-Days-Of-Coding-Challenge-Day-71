// 100 Days Of Coding Challenge!

/* Day-71 Task:
Learn about TypeScript classes by using the following guide and coding along with the examples provided in it:

Class Type Annotations in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-71/TS-Class/README.md */

//-------------------------------------------------------------------------------------------------------------------------

/* 1. Class Type Annotations
In TypeScript, you can annotate class properties with types to ensure type safety. */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Bill = new Person("Bill", 30);

//--------------------------------------------------------------------------------------------------------------------------

/* 2. Class Access Modifiers
Access modifiers control the visibility of class members. TypeScript supports public, protected, and private. */

/* Public: Accessible from anywhere.
Protected: Accessible within the class and its subclasses.
Private: Accessible only within the class. */

class Animal {
  public name: string;
  protected age: number;
  private species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, species: string) {
    super(name, age, species);
  }

  getAge() {
    return this.age; // Accessible because it's protected
  }
}

const dog = new Dog("Buddy", 5, "Canine");
// dog.species; // Error: Property 'species' is private

//--------------------------------------------------------------------------------------------------------------------------

/* 3. Class Accessors
Accessors are used to get and set the values of class properties. */

class Employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    }
  }
}

const emp = new Employee(50000);
emp.salary = 60000;
console.log(emp.salary); // 60000

//---------------------------------------------------------------------------------------------------------------------------

/* 4. Class Static Members
Static members belong to the class itself rather than to instances of the class. */

class MathUtils {
  static PI: number = 3.14;

  static calculateCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(MathUtils.calculateCircumference(10)); // 31.4

//---------------------------------------------------------------------------------------------------------------------------

/* 5. Class Implement Interface
Classes can implement interfaces to enforce a contract. */

interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  drive() {
    console.log("Driving a car");
  }
}

const myCar = new Car();
myCar.drive(); // Driving a car

//---------------------------------------------------------------------------------------------------------------------------

/* 6. Abstract Classes and Members
Abstract classes cannot be instantiated and are meant to be subclassed.
They can contain abstract methods that must be implemented by subclasses. */

abstract class AbstractEntity {
  abstract describe(): void;
}

class Entity extends AbstractEntity {
  describe() {
    console.log("I am an entity");
  }
}

const entity = new Entity();
entity.describe(); // I am an entity

//----------------------------------------------------------------------------------------------------------------------------

/* 7. Polymorphism & Method Override
Polymorphism allows methods to do different things based on the object it is acting upon.
Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. */

class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

const shapes: Shape[] = [new Shape(), new Circle()];
shapes.forEach((shape) => shape.draw());
// Output:
// Drawing a shape
// Drawing a circle

//-----------------------------------------------------------------------------------------------------------------------------

/* 8. Usage of Subclasses
Subclasses extend the functionality of base classes. */

class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Bike extends Vehicle {
  move() {
    console.log("Bike is moving");
  }
}

const bike = new Bike();
bike.move(); // Bike is moving
