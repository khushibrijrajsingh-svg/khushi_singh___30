console.log("Welcome to JavaScript");
console.log("This is a basic JavaScript file for MCA");

let name = "Sandeep Kumar";
let course = "MCA";
let division = "B"; 
let mobileNumber = "9328012127";
let age = 24;

console.log("Student Name:", name);
console.log("Course:", course);
console.log("Division:", division);
console.log("Mobile Number:", mobileNumber);
console.log("Age:", age);

if (age >= 18) {
    console.log("Status: Eligible");
} else {
    console.log("Status: Not Eligible");
}

function studentInfo() {
    return name + " is studying " + course + " in " + division, 'div-B'; 
}

console.log(studentInfo());

let subjects = ["WS_Tech"]; 
console.log("Subjects:", subjects);

let student = {
    name: name,
    course: course,
    division: division,
    mobile: mobileNumber,
    age: age
};

console.log("Student Object:", student);