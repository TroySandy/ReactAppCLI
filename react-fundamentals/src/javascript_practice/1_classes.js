// ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = 'Trial User'
    };
    //method 1
    greet(){
        console.log(`Welcome back ${this.name}`);
    };
    //method 2
    status(){
        console.log(`Current status: ${this.type}`);
    };
};

//Instance of the class/new object
let anonDude = new User('Anonymous dude');

//we can now use the instance and the . opterator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User('Anonymous Lady');
anonLady.greet();
anonLady.status();

//another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();


let troy = new User('Troy');
let bob = new User('Bob');
troy.greet();
troy.status();
bob.greet();
bob.status();