//Breakout Session:
/*
Assignment Requirements:
1. Declare a var name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript
*/

var browserVersion = "Chrome" // global variable
function getBrowserVersion() {    
    if(browserVersion==="Chrome") {// intha line la browserVersion ngrathu undefined la tan irukum, bcoz function la varum bothu,
        //so inga undefined==="Chrome" nu check panum
        //apo if block execute agathu, athunala tan print agathu
        var browserVersion = "Google Chrome"        
        console.log(browserVersion) //not printed due to above reason
    }    
    console.log(browserVersion) // undefined, intha line print agum, but undefined nu print agum, reason already mela sollitan, check it
}
getBrowserVersion()