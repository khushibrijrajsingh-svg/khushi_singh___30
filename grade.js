function grade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else {
        return "C";
    }
}

console.log(grade(85));  
console.log(grade(70));  
console.log(grade(50)); 
