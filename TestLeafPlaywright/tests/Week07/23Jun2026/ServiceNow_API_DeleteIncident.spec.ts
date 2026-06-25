import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

test("Delete Incident in Service Now", async({request}) => {
    let deleteRequest = await request.delete('https://dev212269.service-now.com/api/now/table/incident/54728a1383a50350c6ae1429feaad328',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${loginInfo}` 
            },            
        })                
        expect(deleteRequest.status()).toBe(204)               
})
