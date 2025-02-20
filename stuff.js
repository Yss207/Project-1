const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 },
    { name: "David", score: 95 },
    { name: "Eve", score: 90 }
];

function findTopStudent(students, callback) {
    // Find the student with the highest score
    const topStudent = students.reduce((max, student) => {
        if (student.score > max.score) {
            max = student;
        }
        return max;
    }, students[0])

    callback(topStudent);
};

function displayTopStudent(student) {
    console.log(`Top Student: ${student.name}, Score: ${student.score}`);
}

// Print the result
findTopStudent(students, displayTopStudent);