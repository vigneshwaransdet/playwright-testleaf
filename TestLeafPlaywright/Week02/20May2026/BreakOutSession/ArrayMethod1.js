// 1. PrintDuplicate [56,78,90,23,90,76,43,56]

let numArr = ['56','78','90','23','90','76','43','56'];
console.log(numArr.sort())
for(let i=0; i<numArr.length;i++){
    if(numArr[i]===numArr[i+1]){
        console.log(numArr[i])
    }
}

