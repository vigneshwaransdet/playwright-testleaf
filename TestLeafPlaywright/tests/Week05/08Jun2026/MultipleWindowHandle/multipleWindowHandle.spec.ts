import test from "@playwright/test"

test("Multiple window",async({page,context})=> {

    await page.goto("https://www.leafground.com/window.xhtml")

    //create promise
    //do tha action
    //resolve promsie

    //create promise

    const [multipleWindows] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()

    ])
    //count the window
    const count = multipleWindows.context().pages()

    console.log(count.length)

    //create variable for 2 child windows -> transfer the control to the child page
    let webTable : any
    let dashboard : any

    // for(let i=0; i<count.length; i++){
    //     const title = await count[i].title()
    //     console.log(title)      
    //     await count[i].waitForTimeout(3000)          
    // }

    for(let i=0; i<count.length; i++){
        const title = await count[i].title()
        if(title==='Web Table'){
            //control webtable
            webTable = count[i]   
            console.log(title)         
        } else if(title==='Dashboard') {
            //control dashboard
            dashboard = count[i]   
            console.log(title)         
        }
    }    

    // await webTable.locator("//input[@name='form:j_idt89:globalFilter']").fill("Japan")
    await webTable.waitForTimeOut(2000)
    await webTable.locator("//input[@placeholder='Search']").fill("Japan")

})