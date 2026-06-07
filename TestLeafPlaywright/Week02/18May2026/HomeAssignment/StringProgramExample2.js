// Home Assignment: String
// Learning Objective:
// Learn how to manipulate strings and use looping statements in a programming language to solve practical
// problems.
// Expected Completion Time:
// Best Case: 10 minutes
// Average Case: 5 minutes
// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Assignment Requirements:
// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

let text = " fly me to the moon "
let trimSpaces = text.trim()
// console.log(trimSpaces)
let afterSplit = trimSpaces.split(" ")
let lenghtOfLastWord = null
for(i=afterSplit.length-1; i>0; i--) {
    console.log(afterSplit[i])
    lenghtOfLastWord = afterSplit[i]
    break;
}
console.log(lenghtOfLastWord.length)