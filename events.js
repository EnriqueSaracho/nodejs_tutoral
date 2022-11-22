// Events module
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 * num2);
});

eventEmitter.emit("tutorial", 2, 3);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let kiki = new Person("Kiki");
let katara = new Person("Katara");
katara.on("name", () => {
  console.log("My name is " + katara.name);
});
kiki.on("name", () => {
  console.log("My name is " + kiki.name);
});

kiki.emit("name");
katara.emit("name");
kiki.emit("name");
