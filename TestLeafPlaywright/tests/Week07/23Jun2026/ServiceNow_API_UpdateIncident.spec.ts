import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

test("Update Incident in Service Now", async({request}) => {
    let patchRequest = await request.patch('https://dev212269.service-now.com/api/now/table/incident/a32db11783650350c6ae1429feaad301',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${loginInfo}` 
            },
            //request payload or body
            data:{
                "short_description": "create incident via playwright 01",
                "caller_id": "Vigneshwaran Baskaran"
            }
        })
        //response body
        let patchResponse = await patchRequest.json()
        console.log(patchResponse)
        expect(patchRequest.status()).toBe(200)               
})