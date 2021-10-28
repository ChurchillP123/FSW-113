// Declare any necessary variables.
//const Student = require('./student.js');
let student;

const name = document.querySelector('#studentName');
const className = document.querySelector('#className');
const studentScores = document.querySelector('#studentScores');
const possibleScores = document.querySelector('#possibleScores');

const certName = document.querySelector('#certStudentName');
const certClass = document.querySelector('#certClassName');
const certGrade = document.querySelector('#certGrade');

// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector('#print').addEventListener('click', () => {
    toNumArray();
});
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector('#reset').addEventListener('click', () => {
    name.value = "";
    className.value = "";
    studentScores.value = "";
    possibleScores.value = "";
    certName.innerText = "";
    certClass.innerText = "";
    certGrade.innerText = "";
});
// Create a function that instantiates a new student object with the input from the HTML form.
function createStudent(name, className, student, possible) {
    student = new Student(name, className, student, possible);
    fillCertificate(student);
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function fillCertificate(student) {
    certName.innerText = student.getName();
    certClass.innerText = student.getClass();
    certGrade.innerText = student.getLetterGrade();
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toNumArray() {
    let studentScoresArr = studentScores.value.split(',').map(score => Number(score.trim()));
    let possibleScoresArr = possibleScores.value.split(',').map(score => Number(score.trim()));
    createStudent(name.value, className.value, studentScoresArr, possibleScoresArr);
}