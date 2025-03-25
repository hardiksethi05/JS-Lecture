class UserProfile{
    constructor(name,age){
        (this.name=name),(this.age=age)
    }
    letfunction() {
        console.log("Name is :", this.name, "and age is", this.age )
    }
}

const First = new UserProfile("Hardik",22)
const Second= new UserProfile("Sidharth",22)

First.letfunction();
Second.letfunction();




class classname{
    constructor(Name,AccountNo,Address){
        (this.Name=Name),(this.AccountNo=AccountNo),(this.Address=Address)
    }
    FunctionName() {
        console.log("Name is",this.Name,",Account No. is",this.AccountNo,",And Age is",this.Address)
    }
}
const One= new classname("Harsh",12345,"70L,Palwal")
const Two = new classname("Kumar",24367,"6D,Faridabad")
const Three = new classname("Keshav",54324,"4E2,Badarpur")


One.FunctionName();
Two.FunctionName();
Three.FunctionName();




































class Library{
    constructor(Author,IssuedBy,Since,Id){
        (this.Author=Author),(this.IssuedBy=IssuedBy),(this.Since=Since),(this.Id=Id)
    }
    Letfunction(){
        console.log("The Author of Book is",this.Author,"Since:",this.Since ,",Issued By Student Whose Name Is ",this.IssuedBy,"And Student Id is",this.Id)
    }

}

const A= new Library("William","Sharma",1932,11);
const B= new Library("Shakespeare","Puneet",1999,12)
const C= new Library("R.d Sharma","Dheeraj",1975,13)
const D=new Library("H.c Verma","Ronak",1817,14)

A.Letfunction();
B.Letfunction();
C.Letfunction();
D.Letfunction();














class User{
    constructor(Name,Grade,Marks,Totalmarks,Fail){
            (this.Name=Name,this.Grade=Grade,this.Marks=Marks,this.Totalmarks=Totalmarks,this.Fail=Fail)
        
    }
    functionName(){
        console.log("My Name is",this.Name,"And I am in ",this.Grade,"Class, Marks:",this.Marks,"Out of",this.Totalmarks,"And I am",this.Fail)


    }
}
const Student1= new User("Hardik","12th",93,100,"PASS")
const Student2= new User("Rahul","12th",14,100,"FAIL")
const Student3= new User("Bhoomika","12th",3,100,"FAIL")
const Student4= new User("Swati","12th",10,100,"FAIL")
const Student5= new User("Kaushal","12th",79,100,"PASS")

Student1.functionName();
Student2.functionName();
Student3.functionName();
Student4.functionName();
Student5.functionName();











class Disturb{
    constructor(Name,Section){
        (this.Name=Name),(this.Section=Section)
       
    }
    Func(){
        console.log(this.Name,this.Section)
    }

}

const a= new Disturb("Harshit","A")
const b= new Disturb("Harshita","B")

a.Func()
b.Func()





// Inheritance 1


class Animal{
    constructor(Name){
        (this.Name=Name)
    }
    Run(){
        console.log(this.Name)
    }
}

class Dog extends Animal{

    Bark(){
        console.log(this.Name)
    }
}

const A1= new Dog("German Shephard")

A1.Run()
A1.Bark()


//Inheritance 2

class Bird{               //parent 
    constructor(Name){
        (this.Name=Name)
    }
    Sing(){
        console.log(this.Name,"Grand Parent")
    }
}

class Peacock extends Bird{     //2nd time as a parent 
    Speak(){
        console.log(this.Name,"Parent")
    }
}
class Sher extends Peacock{
    Roar(){
        console.log(this.Name,"Child")
    }
}

const A2= new Sher("Pigeon")

A2.Sing()
A2.Speak()
A2.Roar()



// class Factory{
    
// }
// class SubFactory extends Factory{
  
//     Thing(Name){
//         console.log(Name)
//     }

// }

// const A3=new SubFactory();

// A3.Thin();
// A3.Thing("Kongsberg");


class FactoryGet {
    manufacture(){
        console.log("this is under manufacturing ......");
        
    }

}

class product extends FactoryGet{
    ready(name){
        console.log(`ready ${name}`);
        
    }
}

const readyOne = new product();


readyOne.manufacture();
readyOne.ready("Bike");




