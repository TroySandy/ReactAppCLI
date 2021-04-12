// ES6 JS Classes
class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  //method 1
  greet() {
    console.log(`Welcome back ${this.name}`);
  }
  //method 2
  status() {
    console.log(`Current status: ${this.type}`);
  }
}

class TrialUser extends User {
  trialEnding() {
    console.log(
      `Your trial will be ending soon, ${this.name}. Would you like to join our cult?`
    );
  }
}

//Instance of the class/new object
let anonDude = new User("Anonymous dude");
anonDude.greet();
anonDude.status();


//super
class BronzeLevelUser extends User {
    // we add the cc property to the user here
    constructor(username, password, ccinfo){
        super(username, password);
        this.type = 'Bronze User',
        this.ccinfo = ccinfo
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze God', 'steriods1234', 01234657);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);