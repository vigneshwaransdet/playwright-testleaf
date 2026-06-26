// 2.data ["chrome",true,132.8]
// add index 5 -> webkit
// pop->
// use push -> firefox
// use shift ->

let dataArr = ["chrome",true,132.8]
dataArr[5] = "Webkit"
console.log("After adding Webkit in index 5 (i.e., index 5 will be added with Webkit) : "+dataArr)
dataArr.pop()
console.log("After done pop webkit will be removed(i.e., last index will be remove) : "+dataArr)
dataArr.push("firefox")
console.log("After push firefox, firefox will be added in the last index : "+dataArr)
dataArr.shift()
console.log("After shift chrome will be removed : "+dataArr)