export class SampleClass1 {
    //property
    label = 'username';
    label1 = 'password';
    admin;
    //method
    fill() {
        console.log("Fill method");
    }
    clear() {
        console.log("Clear method");
    }
    //ERROR: ithu vanthu global ah tan declare pana mudium, class kula use pana mudiathu
    // function add(){
    // }
    //ERROR: inside the class, we can't create the object
    // let obj = new LoginPage()
    //ithu vanthu explicit ah create paniruku, default constructor tan epavume 1st execute agum,
    //  atha understand panikrathuku tan intha line add panirukan
    // constructor() {
    //     console.log("Default Constructor")
    // }
    //ERROR: multiple constructor ah use pana mudiathu at a time la, either we can one constructor tan use pana mudium
    constructor(admin) {
        this.admin = admin;
        console.log(admin);
    }
}
function sample() {
    console.log("call sample method");
}
//Syntax:
// let userdefined name = new className()
let obj1 = new SampleClass1("Sample Class 1");
obj1.fill();
console.log(obj1.label);
console.log(obj1.label1);
