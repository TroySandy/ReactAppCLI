class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne.email);


class Player {
    constructor(name, number, avgPoints){
        this.n = name;
        this.num = number;
        this.p = avgPoints;
    }
}

let newPlayer = new Player("Troy", "16", "1")

console.log(newPlayer);