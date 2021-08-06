/*
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.
*/

class School {
  constructor(name, level, studentCount) {
    this._name = name;
    this._level = level;
    this._studentCount = studentCount; 
  }

  get name() { return this._name; }
  
  get level() { return this._level; }

  get studentCount() { return this._studentCount; }

  set studentCount(num) {
    if(typeof num === 'number'){
      this._studentCount = num;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._studentCount} students at the ${this._level} school level.`)
  }

  static pickSubTeacher(teachers) {
    const index = Math.floor(Math.random() * teachers.length)
    return teachers[index];
  }
}

class Primary extends School {
  constructor(name, studentCount, pickUpPolicy) {
    super(name, 'primary', studentCount);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() { return this._pickUpPolicy; }
}

class High extends School {
  constructor(name, studentCount, sports) {
    super(name, 'high', studentCount);
    this._sportsTeams = sports;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}


const hansBury = new Primary('Lorraine HansBury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

hansBury.quickFacts();

const teachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

console.log(School.pickSubTeacher(teachers));

const sports = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
const alSmith = new High('Al E. Smith', 415, sports);

console.log(alSmith.sportsTeams);
