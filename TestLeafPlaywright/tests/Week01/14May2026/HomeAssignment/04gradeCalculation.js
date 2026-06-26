// Classroom Assignment: Grade Calculation
// Learning Objective:
// Learn to use switch statements in JavaScript to categorize data based on multiple conditions.
// Expected Completion Time:
// Best Case: 10 minutes
// Average Case: 15 minutes
// Assignment Details:
// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.
// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.
// Hints to Solve:
// Use a `switch` statement with `true` for score range checks to assign grades.
// Expected Outcome:
// Upon completion, you should be able to:
// - Understand the functioning of ‘switch’ statement

function fetchGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = "A"
            break;

        case (score >= 80):
            grade = "B"
            break;

        case (score >= 70):
            grade = "C"
            break;

        case (score >= 60):
            grade = "D"
            break;

        case (score >= 50):
            grade = "E"
            break;

        default:
            grade = "F"
            break;
    }
    return grade;
}

console.log(fetchGrade(95));
console.log(fetchGrade(85));
console.log(fetchGrade(45));