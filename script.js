function fetchResult() {
    const rollNumber = document.getElementById('rollNumber').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    const student = students.find(s => s.roll_number === parseInt(rollNumber));
    
    if (student) {
        resultDiv.innerHTML = `<p>Roll Number: ${student.roll_number}</p><p>Name: ${student.name}</p><p>Marks: ${student.marks}</p>`;
    } else {
        resultDiv.innerHTML = '<p>Student not found for the provided roll number.</p>';
    }
}
