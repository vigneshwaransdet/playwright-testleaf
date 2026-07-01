"use strict";
/*
ClassRoom:
create abstract class
fill() -> implement
clear()->implement
locator()-> implement
frame() -> unimplement


create class
-> implement methods
-> create object and call the methods

*/
class AbstractionClassToImplement {
    fill() {
        console.log("Fill the data");
    }
    clear() {
        console.log("Clear the data");
    }
    locator() {
        console.log("Locator for the element");
    }
}
class ConcreteClass extends AbstractionClassToImplement {
    frame() {
        console.log("Frame the data");
    }
}
let abstractionNormalClass = new ConcreteClass();
abstractionNormalClass.fill();
abstractionNormalClass.clear();
abstractionNormalClass.locator();
abstractionNormalClass.frame();
