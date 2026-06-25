import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

test("Fetch Incident in Service Now",async({request}) => {

    let getRequest = await request.get('https://dev212269.service-now.com/api/now/table/incident/a32db11783650350c6ae1429feaad301',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${loginInfo}` 
            },
        })
        //response body
        let getResponse = await getRequest.json()
        console.log(getResponse)
        expect(getRequest.status()).toBe(200)
    })
