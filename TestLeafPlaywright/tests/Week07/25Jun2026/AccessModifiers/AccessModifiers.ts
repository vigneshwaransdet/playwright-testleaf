class Modifier {

    public fill() {
        console.log("Fill value")
    }

    private clear() {
        console.log("clear value")
    }

    protected locator() {
        console.log("Xpath")
    }

    static url = "https://www.google.com"

    static first() {
        console.log("choose first value")
    }

    readonly pi = 3.14

    public read() {
        this.clear()
        this.locator()
    }

}

let m = new Modifier()
m.fill()
console.log(m.pi)
m.read()

// call static property or methods
//className.propertyName or methodName

Modifier.first()
console.log(Modifier.url)

