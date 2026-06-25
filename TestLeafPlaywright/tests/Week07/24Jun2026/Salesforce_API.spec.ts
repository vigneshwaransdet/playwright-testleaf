import test, { expect, request } from '@playwright/test'

import inputValue from '../../../Data/SF_ClientSecrets.json'

let access_Token: any
let instance_Url: any
let token_Type: any
let sys_Id: any

const sf_Client_Secrets = inputValue[0]

test("Generate Token", async ({ request }) => {
    let token = await request.post("https://login.salesforce.com/services/oauth2/token", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        form: {
            "grant_type": "password",
            //Note-Git Hub is not push the actual value of client id & secret, so because of that issue, I'm passing via data params,
            //  also not pushing this file SF_ClientSecrets.json to git
            "client_id": sf_Client_Secrets.client_Id,
            "client_secret":sf_Client_Secrets.client_Secret,
            "username": "vigneshwaransdet.65585ce5b958@agentforce.com",
            "password": "Qazplm!852BfaHyjykKU04vA0kbPYDZo54"
        }
    })
    let response = await token.json()
    console.log(response)
    access_Token = response.access_token
    instance_Url = response.instance_url
    token_Type = response.token_type
})

test("Create New Account", async ({ request }) => {
    let salesForceRequestCreate = await request.post(`${instance_Url}/services/data/v67.0/sobjects/Account`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`,
        },
        data: {
            "name": "testleaf vig"
        }
    })
    let responseCreate = await salesForceRequestCreate.json()
    console.log(responseCreate)

    sys_Id = responseCreate.id
    console.log(sys_Id)

    expect(responseCreate.id).toEqual(sys_Id)
    expect(salesForceRequestCreate.status()).toBe(201)
})

test("Fetch Account", async ({ request }) => {

    let salesForceResponseFetch = await request.get(`${instance_Url}/services/data/v67.0/sobjects/Account/${sys_Id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`,
        },
    })

    let responseFetch = await salesForceResponseFetch.json()
    console.log(responseFetch)
    expect(salesForceResponseFetch.status()).toBe(200)
})

test("Patch Account",async({request}) => {
    let salesForceResponsePatch = await request.patch(`${instance_Url}/services/data/v67.0/sobjects/Account/${sys_Id}`, {
        headers: {
            "Content-Type":"application/json",
            "Authorization": `${token_Type} ${access_Token}`,                       
        },
        data: {
            "name":"testleaf vig b"
        }        
    })    
    const patchStatus = salesForceResponsePatch.status()
    console.log(patchStatus)
    expect(patchStatus).toBe(204)
    expect(salesForceResponsePatch.status()).toBe(204)
})

test("Delete Account", async ({ request }) => {
    let salesForceResponseDelete = await request.delete(`${instance_Url}/services/data/v67.0/sobjects/Account/${sys_Id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token_Type} ${access_Token}`,
        },
    })
    const deleteStatus = salesForceResponseDelete.status()
    console.log(deleteStatus)
    expect(deleteStatus).toBe(204)
    expect(salesForceResponseDelete.status()).toBe(204)
})