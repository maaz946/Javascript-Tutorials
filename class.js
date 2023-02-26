            // class
            //oop with defination of class and object and 
            // inheritance 
            //  encapsulation and 
            
            // polymorphism is when you have a parent class and a child class and the child class has the same method as the parent class 
            //      but it does something different
            //  abstraction  and 
            //  method overriding and method overloading

            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                // this is a static method and can be called without instantiating the class

                greeting() {
                    return `my name is ${this.name} and i am ${this.age}`;
                }
            }

            const person1 = new Person('john', 30);
            console.log(person1.greeting());

            // subclass is a class that inherits from another class (parent class)

            class Customer extends Person {
                constructor(name, age, balance) {
                    super(name, age);
                    this.balance = balance;
                }

                info() {
                    return `${this.name} owes ${this.balance}`;
                }
            }
        
            const customer1 = new Customer('kevin', 32, 300);
            console.log(customer1.info());

            // es6 classes

            class Person3 {
                constructor(name, dob) {
                    this.name = name;
                    this.birthday = new Date(dob);
                }

                calculateAge() {
                    const diff = Date.now() - this.birthday.getTime();
                    const ageDate = new Date(diff);
                    return Math.abs(ageDate.getUTCFullYear() - 1970);
                }

                getsMarried(newLastName) {
                    this.lastName = newLastName;
                }

                static addNumbers(x, y) {
                    return x + y;
                }
            }

            const mary = new Person3('mary', '11-13-80');

            mary.getsMarried('williams');

            console.log(mary);

            console.log(Person3.addNumbers(1, 2));

            // es6 subclasses

            class Person4 {
                constructor(name, dob) {
                    this.name = name;
                    this.birthday = new Date(dob);
                }

                calculateAge() {
                    const diff = Date.now() - this.birthday.getTime();
                    const ageDate = new Date(diff);
                    return Math.abs(ageDate.getUTCFullYear() - 1970);
                }
            }

            class Customer extends Person4 {
                constructor(name, dob, phone, membership) {
                    super(name, dob);
                    this.phone = phone;
                    this.membership = membership;
                }

                static getMembershipCost() {
                    return 500;
                }
            }

            const john3 = new Customer('john', '8-12-90', '555-555-5555', 'standard');

            console.log(john3);

            console.log(Customer.getMembershipCost());

            // es6 classes with inheritance

            class Person5 {
                constructor(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }

                greeting() {
                    return `hello there ${this.firstName} ${this.lastName}`;
                }
            }

            class Customer2 extends Person5 {
                constructor(firstName, lastName, phone, membership) {
                    super(firstName, lastName);
                    this.phone = phone;
                    this.membership = membership;
                }

                static getMembershipCost() {
                    return 500;
                }
            }

            const john4 = new Customer('john', 'doe', '555-555-5555', 'standard');

            console.log(john4.greeting());

            // getters and setters

            const person6 = {
                firstName: 'steve',
                lastName: 'smith',
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                },
                set fullName(value) {
                    const parts = value.split(' ');
                    this.firstName = parts[0];
                    this.lastName = parts[1];
                }
            }

            person6.fullName = 'john doe';

            console.log(person6);

            // oop
            //data Abstraction, Encapsulation, Inheritance, and Polymorphism,

            // data abstraction example of office 

            class Employee {
                constructor(name, salary) {
                    this.name = name;
                    this.salary = salary;
                }

                responsibilities() { }

                work() {
                    return `${this.name} do ${this.responsibilities()}`;
                }

                getPaid() {
                    return `${this.name} has salary ${this.salary}`;
                }
            }

            class Developer extends Employee {
                constructor(name, salary) {
                    super(name, salary);

                }

                responsibilities() {
                    return 'programming';
                }
            }

            class Tester extends Employee {
                constructor(name, salary) {

                    super(name, salary);
                }

                responsibilities() {
                    return 'testing';
                }
            }


            const dev = new Developer('john', 10000);
            console.log(dev.getPaid());
            console.log(dev.work());

            const tester = new Tester('john', 10000);
            console.log(tester.getPaid());
            console.log(tester.work());

            // encapsulation

            class User {
                constructor(name, age) {
                    this.name = name;
                    this._age = age;
                }

                #surname = 'smith';

                say = () => {
                    console.log(`user name is ${this.name} ${this.#surname}, age is ${this._age}`);

                }

                get age() {
                    return this._age;
                }

                set age(age) {
                    if (typeof age === 'number' && age > 0 && age < 110) {
                        this._age = age;
                    } else {
                        console.log('not valid age');
                    }
                }

            }

            const user1 = new User('john', 25);


            user1.say();
            user1.age = 99;
            user1.say();

            // polymorphism is when you have a parent class and a child class and the child class has the same method as the parent class but it does something different

            class Animal {
                constructor(name) {
                    this.name = name;
                    this.speed = 0;
                }

                run(speed) {
                    this.speed = speed;
                    console.log(`${this.name} runs with speed ${this.speed}`);
                }

                stop() {
                    this.speed = 0;
                    console.log(`${this.name} stands still`);
                }
            }

            const animal = new Animal('animal');

            class Rabbit extends Animal {
                hide() {
                    console.log(`${this.name} hides`);
                }

                stop() {
                    super.stop();
                    this.hide();
                }
            }   
        
            const rabbit = new Rabbit('rabbit');

            rabbit.run(5);
            rabbit.stop();

            
            // defination of design patterns is a general reusable solution to a commonly occurring problem within a given context in software design
            
            // module pattern is a way to encapsulate data and methods in a single unit of code
            // uictrl is a module that is used to control the ui


            const UICtrl = (function () {
                let text = 'hello world';

                const changeText = function () {
                    const element = document.querySelector('h1');
                    element.textContent = text;
                }

                return {
                    callChangeText: function () {
                        changeText();
                        console.log(text);
                    }
                }
            })();
            UICtrl.callChangeText();

            // revealing module pattern is a way to encapsulate data and methods in a single unit of code and also revealing the public methods

            const ItemCtrl = (function () {
                let data = [];

                function add(item) {
                    data.push(item);
                    console.log('item added');
                }

                function get(id) {
                    return data.find(item => {
                        return item.id === id;
                    })
                }

                return {
                    add: add,
                    get: get
                }
            })();

            ItemCtrl.add({ id: 1, name: 'john' });

            // singleton pattern is a way to create an instance of an object and return it every time it is called without creating a new instance

            const Singleton = (function () {
                let instance;

                function createInstance() {
                    const object = new Object({ name: 'john' });
                    return object;
                }

                return {
                    getInstance: function () {
                        if (!instance) {
                            instance = createInstance();
                        }
                        return instance;
                    }
                }
            })();

            const instanceA = Singleton.getInstance();
            const instanceB = Singleton.getInstance();

            console.log(instanceA === instanceB);

            // factory pattern

            function MemberFactory() {
                this.createMember = function (name, type) {
                    let member;

                    if (type === 'simple') {
                        member = new SimpleMembership(name);
                    } else if (type === 'standard') {
                        member = new StandardMembership(name);
                    } else if (type === 'super') {
                        member = new SuperMembership(name);
                    }

                    member.type = type;

                    member.define = function () {
                        console.log(`${this.name} (${this.type}): ${this.cost}`);
                    }

                    return member;
                }
            }

            const SimpleMembership = function (name) {
                this.name = name;
                this.cost = '$5';
            }

            const StandardMembership = function (name) {
                this.name = name;
                this.cost = '$15';
            }

            const SuperMembership = function (name) {
                this.name = name;
                this.cost = '$25';
            }

            const members = [];
            const factory = new MemberFactory();

            members.push(factory.createMember('john doe', 'simple'));

            console.log(members);

            members.forEach(function (member) {
                member.define();
            })

            // constructor pattern is a way to create an object and also to create a blueprint for creating other objects of the same type

            function Person(name, dob) {
                this.name = name;
                this.birthday = new Date(dob);
                this.calculateAge = function () {
                    const diff = Date.now() - this.birthday.getTime();
                    const ageDate = new Date(diff);
                    return Math.abs(ageDate.getUTCFullYear() - 1970);
                }
            }

            const john = new Person('john', '8-12-90');
            console.log(john.calculateAge());

            // constructor pattern with prototype

            function Person2(name, dob) {
                this.name = name;
                this.birthday = new Date(dob);
            }

            Person2.prototype.calculateAge = function () {
                const diff = Date.now() - this.birthday.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }

            const john2 = new Person2('john', '8-12-90');
            console.log(john2.calculateAge());



