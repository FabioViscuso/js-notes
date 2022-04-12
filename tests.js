function Person(name, age) {
    this.name = name;
    this.age = age;
}

const peopleContainer = [];

function addPerson(name, age) {
    peopleContainer.push(new Person(name, age));
}

addPerson('Jimmy', 15);
addPerson('Jane', 25);
addPerson('John', 9);
addPerson('Jeremy', 30);

console.log(peopleContainer);

const adultsContainer = peopleContainer.filter((element) => element.age > 17);

console.log(adultsContainer);