function displayStudentInfo(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(property + ": " + student[property]);
        }
    }
}

// Example usage:
const student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    major: "Computer Science"
};

displayStudentInfo(student);
