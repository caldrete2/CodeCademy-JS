/*
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. 
*/

class Media {
  constructor(person, title) {
    this._person = person;
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get person() {
    return this._person;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    let sum = 0;
    this._ratings.forEach(e => {
      sum += e;
    })
    return sum / this._ratings.length;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(score) {
    if(typeof score === 'number') {
      this._ratings.push(score);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(author, title);
    this._pages = pages
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(director, title);
    this._runtime = runtime;
  }

  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(artist, title) {
    super(artist, title);
    this._songs = [];
  }

  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
