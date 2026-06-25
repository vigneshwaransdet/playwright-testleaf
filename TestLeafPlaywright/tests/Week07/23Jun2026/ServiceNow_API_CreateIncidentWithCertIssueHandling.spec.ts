import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

/*
If supppose, we face any issue w.r.t certificate issues, we need handle below like this
async kula request ah remove panitu, 
apram intha lines ah add pananum

const apiContext = await request.newContext({
    ignoreHTTPSErrors: true

    apram 
    apiContext ah tan intha below line la use pananum
    let postRequest = await apiContext.post('https://dev212269.service-now.com/api/now/table/incident',

    ipo unaku future la ethachum doubt vanthuchuna
    compare panrathuku 
    in the class file ah refer panikanum
    ServiceNow_API_CreateIncident.spec.ts

    intha class file la without handling cert issues 

    apram intha class file ah kuda add pani handle panalam
    playwright.config.ts    
    use: {        
        ignoreHTTPSErrors: true
  },
*/

test("Create Incident in Service Now", async({}) => {
    const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
});
    let postRequest = await apiContext.post('https://dev212269.service-now.com/api/now/table/incident',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${loginInfo}` 
            },
            //request payload or body
            data:{
                "short_description": "create incident via playwright",
                "caller_id": "Vigneshwaran"
            }
        })
        //response body
        let postResponse = await postRequest.json()
        console.log(postResponse)
        expect(postRequest.status()).toBe(201)               
})