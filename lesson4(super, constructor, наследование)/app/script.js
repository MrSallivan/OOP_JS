// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log(this.name + ' Hello ');
//         return this.name;
//     }
// }

// const alex = new User('Alex');
// console.log(alex);

// class Person extends User {
//     constructor(name, email) {
//         super(name);
//         this.email = email;
//     }
//     sayHello() {
//         console.log(super.sayHello());
//         console.log(this.email);
//     }
// }

// const li = new Person('li', 'li@email.ua');
// // console.log(li);
// // console.log(li.sayHello());
// console.log(li.sayHello());

class User {
    sayHello() {
        console.log(this.name + ' Hello ');
        return this.name;
    }
}

const alex = new User();
console.log(alex.sayHello());

class Person extends User {
    constructor(name) {
        super();
        this.name = name;
    }
}

const li = new Person('lu');
console.log(li);