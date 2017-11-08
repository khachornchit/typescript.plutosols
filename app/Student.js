var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
;
;
function greeter(person, student) {
    return "Hello Person : " + person.firstName + " " + person.lastName + ", Hello Student : " + student.fullName;
}
;
function addStudent(student) {
    return "Hello" + student.fullName;
}
;
var user = { firstName: "Jane", lastName: "User" };
var student = new Student("Jane", "M.", "Freshy");
document.body.innerHTML = greeter(user, student);

//# sourceMappingURL=Student.js.map
