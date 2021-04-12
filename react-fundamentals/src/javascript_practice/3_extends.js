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

class TrialUser extends User {
    trialEnding(){
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our cult?`);
    }
}

//Instance of the class/new object
let anonDude = new User('Anonymous dude');
anonDude.greet();
anonDude.status();

//Instance of Trial user class
let trialUser = new TrialUser('Troy');
trialUser.greet();
trialUser.status();
trialUser.trialEnding();

class BannedUser extends User {
    banHammer(){
        console.log(`${this.name}, you are hearby banned from this cult.  Take your things and go!`);
    }
}

let bannedUser = new BannedUser('Bob')
bannedUser.banHammer();