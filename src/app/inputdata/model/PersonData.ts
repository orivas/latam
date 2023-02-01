export class PersonData {
    private name: string;
    private lastName: string;
    age: number;
    location: string;
  
    constructor(name: string, lastName: string, age: number, location: string) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
    
  }