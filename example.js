// 1. Create a Mobile class

// Properties: brand, price

// Method: displayDetails() to show the mobile details.


class Mobile{
    constructor(Brand,Price){
    (this.Brand=Brand),(this.Price=Price)
    }
    displayDetails(){
        console.log("This is the Brand",this.Brand,"And Price is",this.Price)
    }
}
const A= new Mobile("Iphone",60000)

A.displayDetails();




// 2. Create a User class

// Properties: name, email

// Method: greet() to welcome the user.

class User{
    constructor(name,email){
        (this.name=name),(this.email=email)
    }

    greet(){
        console.log("We Welcome ",this.name,"With Email",this.email)
    }
}
const A2= new User("Kartik","kartik07@gmail.com")

A2.greet();





// 3. Create a BankAccount class

// Properties: accountHolder, balance

// Method: deposit(amount) to add money to the account.



// class bankaccount{
//     constructor(accountholder,balance){
//     (this.accountholder=accountholder),(this.balance=balance)
//     }
//     deposit(amount){
//         amount=this.balance-

//         console.log(" Accountholder person is",this.accountholder,"and the balance is",this.balance,)

//     }
// }



// 4. Create a Student class

// Properties: name, grade

// Method: showGrade() to display the student's grade.




class student{
    constructor(name,grade){
        (this.name=name),(this.grade=grade)
    }
    studentgrade(){
        console.log("The student name",this.name,"got",this.grade)
    }
}

const A3= new student("Karan","A")
const A4= new student("Karanveer","B")
const A5= new student("Kartik","C")

A3.studentgrade();
A4.studentgrade();
A5.studentgrade();





// 5. Create a Shape class with a method area()

// Extend it to create Square and Rectangle classes with their own area calculation logic.



class shape{
    constructor(name,sides){
       (this.name=name),(this.sides=sides)
    }
    area(){
        console.log("The Shape Name is",this.name,"And this have ",this.sides,"Sides")
    }
}

class square extends shape{
    area1(){
        console.log("The Shape Name is",this.name,"And this have ",this.sides,"Sides")
    }

}
class rectangle extends square{
    area2(){
        console.log("The Shape Name is",this.name,"And this have ",this.sides,"Sides")

    }
}

const B= new rectangle("square",4)

B.area();
B.area1();
B.area2();





// 6. Create a Book class

// Properties: title, author, year

// Method: showDetails() to display book information.


class Library{
    constructor(Author,IssuedBy,Since,Id){
        (this.Author=Author),(this.IssuedBy=IssuedBy),(this.Since=Since),(this.Id=Id)
    }
    Letfunction(){
        console.log("The Author of Book is",this.Author,"Since:",this.Since ,",Issued By Student Whose Name Is ",this.IssuedBy,"And Student Id is",this.Id)
    }

}

const A7= new Library("William","Sharma",1932,11);
const B2= new Library("Shakespeare","Puneet",1999,12)
const C= new Library("R.d Sharma","Dheeraj",1975,13)
const D=new Library("H.c Verma","Ronak",1817,14)

A7.Letfunction();
B2.Letfunction();
C.Letfunction();
D.Letfunction();





// 7. Create a Vehicle class

// Extend it to create Car and Bike classes.

// Add a method to describe each vehicle's movement.

class Vechile{
    constructor(name){
       (this.name=name)
    }
    ar(){
        console.log("The Vechile Name is",this.name)
    }
}

class Car extends Vechile{
    ar1(){
        console.log("The Vechile Name is",this.name)
    }

}
class Bike extends Car{
    ar2(){
        console.log("The Vechile Name is",this.name)

    }
}


const E= new Bike("Fortuner")
E.ar();
E.ar1();
E.ar2();


// 8. Create a Product class

// Properties: name, price

// Method: applyDiscount(discount) to reduce the product price.


class product{
    constructor(name,price){
        (this.name=name),(this.price=price)
    }
    applyDiscount(discount){
        console.log("discount ---->", discount);
        
        this.price=this.price-discount
        console.log("The actual price",discount,"after Discount",this.price)
    }
}
const Z= new product("H",2000)
Z.applyDiscount(500);







// 9. Create an Employee class

// Properties: name, salary

// Method: increaseSalary(amount) to increase the employee's salary.


class Employe{
    constructor(name,Salary){
        (this.name=name),(this.Salary=Salary)
    }
    increaseSalary(amount){
        this.Salary=this.Salary + amount
        console.log("The boy named",this.name,"got salary incresed by",amount,"and the salary now is",this.Salary)
    }

}
const J= new Employe("Kartik",30000);
J.increaseSalary(5000)



// 10. Create a Pet class



// Extend it with Dog and Cat classes.

// Each should have a sound() method that behaves differently for each pet.



class Pet{
    constructor(Sound){
        (this.Sound=Sound)
    }
    Sound1(){
        console.log(this.Sound,)
    }
}

class Dog extends Pet{
    Sound2(){
        console.log(this.Sound,)
    }
}

class Cat extends Dog{
    Sound3(){
        console.log(this.Sound,)
    }
}

const F= new Cat("cat")
F.Sound1()
F.Sound2()
F.Sound3()









// Super()
//1.
class car{
    constructor(Brand,Model){
        (this.Brand=Brand),(this.Model=Model)

    }
    functionname() {

        console.log("The car brand is",this.Brand,"and Model is ",this.Model)
        
    }
}

class Dealer extends car{
    constructor(Brand,Model,Price,Speed){
        super(Brand,Model);
        this.Speed=Speed;
        this.Price=Price;

    }
    functionName(){
        console.log("The car brand is",this.Brand,"and Model is ",this.Model,"and the price is",this.Price,"& Speed is",this.Speed)
    }
}

const Q=new Dealer("Toyato","Top","50Lakh","200km/hr")
Q.functionName();



//2.

class Employee{
constructor(Id,Salary){
    (this.Id=Id),(this.Salary=Salary)
}
   func(){
    console.log("The employee Id is",this.Id,"and salary is",this.Salary)
   }

    
}
class Manager extends Employee{
    constructor(Id,Salary,Promotion){
        super(Id,Salary);
        this.Promotion=Promotion;
    }
    funct(){
        console.log("The employee Id is",this.Id,"and salary is",this.Salary,"And he got the promotion:",this.Promotion)
    }
}
const M=new Manager(112,"1Lakh","Yes")
M.funct()




