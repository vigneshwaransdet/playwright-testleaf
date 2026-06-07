import test from "@playwright/test"

// test("Auto Dismiss Alert", async({page})=> {
    
//     await page.goto("https://www.leafground.com/alert.xhtml")

//     await page.locator("(//span[text()='Show'])[2]").click()

    // page.on('dialog',alertType => {
    //     const type=alertType.type()
    //     console.log(type)
    //     const msg=alertType.message()
    //     console.log(msg)
    //     //if(msg.contain("Did you"){alertType.accept()}else{alertType.dismiss()})
    //     if(type==="confirm") {
    //         alertType.dismiss()
    //     }   
    //     else if(type==="prompt") {
    //     alertType.accept("Playwright")
    //     }
    // })
// })

test("Handle alert with Page.once", async({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml")

    page.once('dialog', alertType => {
        const type = alertType.type()
        console.log(type)

        const msg = alertType.message()
        console.log(msg)

        alertType.accept()

    })

    //confirm alert - 1st alert
    await page.locator("(//span[text()='Show'])[2]").click()

    await page.waitForTimeout(2000)

    //prompt alert - 2nd alert - will do as auto dismiss
    await page.locator("(//span[text()='Show'])[5]").click()

    await page.waitForTimeout(2000)

    page.on('dialog',alertType=> {
    const type=alertType.type()
    console.log(type)

    const msg=alertType.message()
    console.log(msg)

    if(type==="confirm"){
        alertType.dismiss()
    }else if(type==="prompt"){
        alertType.accept("Playwright")
    }
    })

})