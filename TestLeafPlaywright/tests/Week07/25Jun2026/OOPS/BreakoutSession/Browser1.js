export class Browser1 {
    url = 'https://www.google.com/';
    username = 'vignesh';
    companyName = 'norton';
    loadUrl() {
        console.log("load url:" + this.url);
    }
    close() {
        console.log("close the page");
    }
    constructor(companyName) {
        this.companyName = companyName;
        console.log(companyName);
    }
}
let browserObj = new Browser1("TestLeaf");
browserObj.loadUrl();
browserObj.close();
console.log(browserObj.url);
console.log(browserObj.username);
console.log(browserObj.companyName);
