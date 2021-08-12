/*
This project uses JavaScript to randomly create a three-course meal based on what is available on a menu.
*/

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() { 
    return this._courses.appetizers; 
  },
  set appetizers(dish) { 
    this._courses.appetizers.push(dish); 
  },
  get mains() { 
    return this._courses.mains; 
  },
  set mains(dish) { 
    this._courses.mains.push(dish); 
  },
  get desserts() { 
    return this._courses.desserts; 
  },
  set desserts(dish) { 
    this._courses.desserts.push(dish); 
  },
  get courses() {
    return {
      appetizer: '',
      main: '',
      dessert: '' 
    }
  },
  addDishToCourse(course, name, price ) {
    const dish = {name, price};
    this._courses[course].push(dish);
  },
  getRandomDish(course) {
    const dishes = this._courses[course];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  genRandomMeal() {
    const appetizer = this.getRandomDish('appetizers');
    const main = this.getRandomDish('mains');
    const dessert = this.getRandomDish('desserts');
    const total = appetizer.price + main.price + dessert.price;

    return {
      appetizer,
      main,
      dessert,
      total
    }
  }
};

menu.addDishToCourse('appetizers', 'fries', 3.00);
menu.addDishToCourse('appetizers', 'wings', 5.00);
menu.addDishToCourse('appetizers', 'veggie rolls', 4.50);

menu.addDishToCourse('mains', 'Burger', 11.00);
menu.addDishToCourse('mains', 'Pizza', 8.75);
menu.addDishToCourse('mains', 'Pasta', 10.00);

menu.addDishToCourse('desserts', 'pie', 3.00);
menu.addDishToCourse('desserts', 'ice cream', 1.50);
menu.addDishToCourse('desserts', 'cake', 2.00);

const meal = menu.genRandomMeal();

console.log(meal);
