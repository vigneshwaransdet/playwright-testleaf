import { Parent } from "./Parent.js";

class Child extends Parent {   
    phone() {
        // super.phone()
        //super -> parent instance
        console.log("iPhone")
    }

    // Duplicate function implementation.
    // overriding method
    // phone(l:string) {
    //     console.log("iPhone"+l)
    // }
}

let child = new Child()

child.phone()
//Output: with super keyword
//  Oppo
//  iPhone

//Output: without super keyword
//  iPhone

