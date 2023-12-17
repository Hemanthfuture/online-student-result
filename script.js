const students = [
    { roll_number: 1, name: "Alice", marks: 85 },
    { roll_number: 2, name: "Bob", marks: 78 },
    { roll_number: 3, name: "Charlie", marks: 92 }
   
];

function fetchResult() {
    const rollNumber = document.getElementById('rollNumber').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const student = students.find(s => s.roll_number === parseInt(rollNumber));
    
    if (student) {
        resultDiv.innerHTML = `<p>Roll Number: ${student.roll_number}</p><p>Name: ${student.name}</p><p>Marks: ${student.marks}</p>`;
    } else {
        resultDiv.innerHTML = '<p>Student not found for the provided roll number.</p>';
    }
}
