// Home Assignment: String
// Learning Objective:
// Learn how to manipulate strings and use looping statements in a programming language to solve practical
// problems.
// Expected Completion Time:
// Best Case: 10 minutes
// Average Case: 5 minutes
// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

let expected = "listen"
let actual = "silent"

let sortExp = expected.split('').sort().join('')
console.log(sortExp)

let sortAct = expected.split('').sort().join('')
console.log(sortAct)

isAnagram(sortExp,sortAct)

function isAnagram(sortExp, sortAct) {
    if(sortExp===sortAct) {
        console.log("Expected and Actual texts are Anagram")
    }
}