let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Sam', lastName: 'Brown', age: 19, grade: 'C' }
];

function addStudent(firstName, lastName, age, grade) {
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id: newId, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log('Student added successfully:', newStudent);
}

function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log('Student updated successfully:', students[studentIndex]);
    } else {
        console.log('Student not found with id:', id);
    }
}

function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        const removedStudent = students.splice(studentIndex, 1);
        console.log('Student deleted successfully:', removedStudent[0]);
    } else {
        console.log('Student not found with id:', id);
    }
}

function listAllStudents() {
    console.log('List of students:');
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

function findStudentsByGrade(grade) {
    const studentsWithGrade = students.filter(student => student.grade === grade);
    console.log(`Students with grade ${grade}:`);
    studentsWithGrade.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
    });
}

function calculateAverageAge() {
    if (students.length === 0) return 0;
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of students: ${averageAge.toFixed(2)}`);
}

// Example usage
listAllStudents();
addStudent('Alice', 'Johnson', 21, 'A');
updateStudent(2, { age: 23, grade: 'A+' });
deleteStudent(1);
listAllStudents();
findStudentsByGrade('A');
calculateAverageAge();
