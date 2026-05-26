//Variables
let name = "Gouranshi";
const age = 20;

//Loop
for(let i = 1; i <= 5; i++){
    console.log("Number:", i);
}

//Function
function greet(name){
    return "Hello " + name;
}
console.log(greet("Gouranshi"));

//Array
let skills = ["HTML", "CSS", "JavaScript"];
skills.forEach(skill => console.log(skill));

//Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log("My name is " + this.name + " and I am " + this.age + " years old");
    }
}

let s1 = new Student("Gouranshi", 20);
s1.introduce();


try {
    let num = parseInt("123");
    if(isNaN(num)) {
        throw new Error("That's not a number!");
    }
    console.log("Number:", num);
} catch(error) {
    console.log("Error caught:", error.message);
}