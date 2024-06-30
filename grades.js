

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) { 
        return 'B';
    } else if (mark >= 59) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else if (mark < 40) {
        return 'E';
    }
}



const myCalculateGrade = calculateGrade(60);
console.log(myCalculateGrade);