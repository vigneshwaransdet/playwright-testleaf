import test from "@playwright/test"

test.only("Handle frame with Frame Locator", async({page}) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.waitForTimeout(2000)

    // page.on('dialog',alertType => {
    //     const type=alertType.type()
    //     console.log(type)

    //     const msg=alertType.message()
    //     console.log(msg)

    //     if(type==="confirm"){
    //         alertType.accept()
    //     }
    // })

    page.on('dialog', async(dialog) => {
        console.log("Dialog Type :", dialog.type())
        console.log("Dialog Message :", dialog.message())

        if(dialog.type()==="confirm") {
            await dialog.accept()
        }
    })

    await page.waitForTimeout(2000)

    await page.frameLocator("(//iframe)[1]").locator("//button[text()='Try it']").click()      

    await page.waitForTimeout(2000)
    
})