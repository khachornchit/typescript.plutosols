class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
};

interface Person {
    firstName: string;
    lastName: string;
};

function greeter(person: Person, student: Student) {
    return "Hello Person : " + person.firstName + " " + person.lastName + ", Hello Student : " + student.fullName;
};

function addStudent(student: Student) {
    return "Hello" + student.fullName;
};

let user = { firstName: "Jane", lastName: "User" };
let student = new Student("Jane", "M.", "Freshy");

document.body.innerHTML = greeter(user, student);