import { Parent } from "./Parent.js";
class Child extends Parent {
    //overriding method
    // phone(l:string) {
    //     console.log("iPhone"+l)
    // }
    phone() {
        // super.phone()
        //super -> parent instance
        console.log("iPhone");
    }
}
let child = new Child();
// child.phone("14 Pro Max")
child.phone();
//Output: with super keyword
//  Oppo
//  iPhone
//Output: without super keyword
//  Oppo
//  iPhone
