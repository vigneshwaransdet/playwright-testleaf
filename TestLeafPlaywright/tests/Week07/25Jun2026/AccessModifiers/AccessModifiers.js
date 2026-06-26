"use strict";
class Modifier {
    fill() {
        console.log("Fill value");
    }
    clear() {
        console.log("clear value");
    }
    locator() {
        console.log("Xpath");
    }
    static url = "https://www.google.com";
    static first() {
        console.log("choose first value");
    }
    pi = 3.14;
    read() {
        this.clear();
        this.locator();
    }
}
let m = new Modifier();
m.fill();
console.log(m.pi);
m.read();
// call static property or methods
//className.propertyName or methodName
Modifier.first();
console.log(Modifier.url);
