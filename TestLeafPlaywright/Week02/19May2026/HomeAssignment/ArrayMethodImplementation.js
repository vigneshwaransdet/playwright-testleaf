// Learning Objective:
// Learn to use JavaScript array methods to manipulate and process array data.
// Expected Completion Time:
// Best Case: 20 minutes
// Average Case: 30 minutes
// Assignment Details:
// Write JavaScript programs using different array methods instead of loops.

// Assignment Requirements:
// 1 Use push() to add elements into an array
// 2 Use pop() to remove the last element
// 3 Use shift() to remove the first element
// 4 Use unshift() to add an element at the beginning
// 5 Use includes() to check whether an element exists
// 6 Use indexOf() to find the position of an element
// 7 Use join() to convert array into string
// 8 Use reverse() to reverse the array
// 9 Use sort() to sort the array

let dataArr = []
console.log(dataArr)
dataArr.push("TestLeaf","Playwright",5,3,"",8,2)
console.log("After use the push method : "+dataArr)
dataArr.pop()
console.log("After use the pop method : "+dataArr)
dataArr.shift()
console.log("After use the shift method : "+dataArr)
dataArr.unshift("TestLeaf")
console.log("After use the unshift method : "+dataArr)
console.log("After use the includes array element exists : "+dataArr.includes("TestLeaf"))
console.log("After use the includes  array element not exists : "+dataArr.includes("TestLeaf1"))
console.log("After use the indexOf() method : "+dataArr.indexOf("TestLeaf"))
console.log("After use the indexOf() method : "+dataArr.indexOf("Playwright"))
console.log("After use the join method : "+dataArr.join())
console.log("After use the reverse method : "+dataArr.reverse())
console.log("After use the sort method : "+dataArr.sort())