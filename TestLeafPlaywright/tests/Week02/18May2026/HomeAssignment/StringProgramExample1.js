// Home Assignment: String
// Learning Objective:
// Learn how to manipulate strings and use looping statements in a programming language to solve practical
// problems.
// Expected Completion Time:
// Best Case: 10 minutes
// Average Case: 5 minutes
// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Assignment Requirements:
// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

let text = "hello world"
let afterSplit = text.split(" ")
let lenghtOfLastWord = null
for(i=afterSplit.length-1; i>0; i--) {
    console.log(afterSplit[i])
    lenghtOfLastWord = afterSplit[i]
    break;
}
console.log(lenghtOfLastWord.length)