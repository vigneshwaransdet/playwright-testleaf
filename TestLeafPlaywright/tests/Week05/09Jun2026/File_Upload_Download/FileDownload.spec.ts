import test from '@playwright/test'

test("File Download", async({page}) => {

    await page.goto("https://www.leafground.com/file.xhtml")

    //create promise
    const download = page.waitForEvent('download')

    //do the action
    await page.locator("//span[text()='Download']").click()

    //resolve the promise
    const fileDownload = await download

    await fileDownload.saveAs('TestData/'+fileDownload.suggestedFilename())    

})