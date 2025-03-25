class Person {

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log('Hello, ' + this.name, "live in " + this.city);
    }
}


let data1 = new Person('John', 30, "FBD");
let data2 = new Person('Hardik', 24,  "Palwal");
let data3= new Person("Kartik",40,"JAIPUR")
let data4 = new Person("Karan",50,"Raipur")
 
data2.greet()