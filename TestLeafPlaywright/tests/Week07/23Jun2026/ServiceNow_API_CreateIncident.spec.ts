import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

test("Create Incident in Service Now", async({request}) => {

    let postRequest = await request.post('https://dev212269.service-now.com/api/now/table/incident',
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