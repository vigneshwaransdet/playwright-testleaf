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

abstract class AbstractionClassToImplement {

    fill() {
        console.log("Fill the data")
    }  
    
    clear() {
        console.log("Clear the data")
    }   

    locator() {
        console.log("Locator for the element")
    }   

    abstract frame(): void;
}

class ConcreteClass extends AbstractionClassToImplement {
    frame(): void {
        console.log("Frame the data")
    }
}

    
let concreteClass = new ConcreteClass()
concreteClass.fill()
concreteClass.clear()
concreteClass.locator()
concreteClass.frame()  