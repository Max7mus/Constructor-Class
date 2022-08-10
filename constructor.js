//1.Напиши свойства-конструктор Account, создает который объект совладения loginи email.
//  В prototypeфункции-конструктора добавлен метод getInfo(), который выводит значения в консольных полях loginи emailкоторые его вызывают.

// function Account({ login, email }) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email:${this.email}`);
// };

// console.log(Account.prototype.getInfo);

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo();

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo();

// 2.Напиши класс User для создания пользователя по назначению:

// name- строка
// age- число
// followers- число
// Добавь метод getInfo(), который выводит документ: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor({ name, age, followers }) {
//     (this.name = name), (this.age = age), (this.followers = followers);
//   }
// }

// User.prototype.getInfo = function () {
//   console.log(
//     `Name: ${this.name}, Age:${this.age}, Followers:${this.followers}`
//   );
// };

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// 3.Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получен один аргумент - начальный массив его товаров, и записывается в свойство items.

// Добавь методы класса:

// getItems()-возвращается массив текущих товаров
// addItem(item)- получает новый товар и производит его к текущим
// removeItem(item)- получетный товар и, если он есть, проверка его наличия

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     for (let i = 0; i < this.items.length[i]; i++) {
//       if (item === this.items[i]) {
//         this.items.splice(i, 1);
//       }
//     }
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// console.log(storage);

// console.table(storage.getItems);

// storage.addItem('Дроид');
// console.table(storage.items);

// storage.removeItem('Пролонгер');
// console.table(storage.items);

// class Car {
/*
 * Добавь статический метод `getSpecs(car)`,
 * который принимает объект-машину как параметр и выводит
 * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
 */

/*
 * Конструктор получает объект настроек.
 *
 * Добавь свойства будущеего экземпляра класса:
 *  speed - текущая скорость, изначально 0
 *  price - цена автомобиля
 *  maxSpeed - максимальная скорость
 *  isOn - заведен ли автомобиль, значения true или false. Изначально false
 *  distance - общий киллометраж, изначально 0
 */
// constructor() {}

/*
 * Добавь геттер и сеттер для свойства price,
 * который будет работать с свойством цены автомобиля.
 */

/*
 * Добавь код для того чтобы завести автомобиль
 * Записывает в свойство isOn значение true
 */
// turnOn() {}

/*
 * Добавь код для того чтобы заглушить автомобиль
 * Записывает в свойство isOn значение false,
 * и сбрасывает текущую скорость в 0
 */
// turnOff() {}

/*
 * Добавялет к свойству speed полученное значение,
 * при условии что результирующая скорость
 * не больше чем значение свойства maxSpeed
 */
// accelerate(value) {}

/*
 * Отнимает от свойства speed полученное значение,
 * при условии что результирующая скорость не меньше нуля
 */
// decelerate(value) {}

/*
 * Добавляет в поле distance киллометраж (hours * speed),
 * но только в том случае если машина заведена!
 */
//     drive(hours) {}
//   }

class Car {
  static getSpecs(car) {
    console.log(
      `Max Speed:${car.maxSpeed}, speed:${car.speed}, is On:${car.isOn}, distance:${car.distance}, price${car.price}`
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    (this.speed = speed),
      (this.price = price),
      (this.maxSpeed = maxSpeed),
      (this.isOn = isOn),
      (this.distance = distance);
  }

  set price(newPrice) {
    this._price = newPrice;
  }
  get price() {
    return this._price;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.distance = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn) this.distance += hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
