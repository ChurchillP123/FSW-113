// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Student {

    constructor(studentName, className, allScores = [], allPossible = []) {
        this.name = studentName;
        this.class = className;
        this.studentScores = allScores;
        this.possibleScores = allPossible;
    }
    getName() {
        return this.name;
    }
    getClass() {
        return this.class;
    }
    // - a method that adds up all the student's scores
    addAllScores() {
        return this.studentScores.reduce((sum, curr) => sum + curr);
    }    
    // - a method that adds up all the possible scores
    addAllPossible() {
        return this.possibleScores.reduce((sum, curr) => sum + curr);
    }
    // - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    getNumberGrade() {
        return this.addAllScores() / this.addAllPossible() * 100;
    }
    getLetterGrade() {
        if (this.getNumberGrade() >= 90) {
            return 'A';
        } else if (this.getNumberGrade() >= 85) {
            return 'B+';
        } else if (this.getNumberGrade() >= 80) {
            return 'B';
        } else if (this.getNumberGrade() >= 75) {
            return 'C+';
        } else if (this.getNumberGrade() >= 70) {
            return 'C';
        } else if (this.getNumberGrade() >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}
