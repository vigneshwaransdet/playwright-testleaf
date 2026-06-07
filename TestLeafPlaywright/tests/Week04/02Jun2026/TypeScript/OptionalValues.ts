//Concept 1:
function data1(name:string, age:number, count:number){
    console.log(name,age,count)
}

data1("Vignesh",36,1)

// Here compilation error throws, due to  Expected 3 arguments, but got 2.
// data("Vignesh",36)



//Concept 2:
// Optional value or parameter -> count?:number
function data2(name:string, age:number, count?:number) {
    console.log(name,age,count)
}

data2("Vignesh",36)

data2("Vignesh",36,1)
