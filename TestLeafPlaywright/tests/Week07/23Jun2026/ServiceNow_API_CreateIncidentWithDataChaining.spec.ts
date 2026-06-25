import test, { expect, request } from '@playwright/test'

let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

let sys_Id:any

/*
    before script ah run panrathuku munadi, 
    
    intha class file la 
    playwright.config.ts

    export default defineConfig({      
      fullyParallel: false,
    });

    fullyParallel: false ah irukanu check panitu tan execute pananum, ilana script work agauthu, get request 1st execute agitu sysid ah expect panum,
    aprm sys_id post request run ana apram tan sys_id generate agum, so intha issue vantha avoid panthuku tan parallel -> false uh nu set pananum
*/

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
        // console.log(postResponse)

        sys_Id = postResponse.result.sys_id
        console.log(sys_Id)

        expect(postRequest.status()).toBe(201)               
})

test("Fetch Incident in Service Now",async({request}) => {

    let getRequest = await request.get(`https://dev212269.service-now.com/api/now/table/incident/${sys_Id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${loginInfo}` 
            },
        })
        //response body
        let getResponse = await getRequest.json()
        // console.log(getResponse)
        expect(getRequest.status()).toBe(200)
    })

    test("Update Incident in Service Now", async({request}) => {
        let patchRequest = await request.patch(`https://dev212269.service-now.com/api/now/table/incident/${sys_Id}`,
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
            // console.log(patchResponse)
            expect(patchRequest.status()).toBe(200)               
    })

    test("Delete Incident in Service Now", async({request}) => {
        let deleteRequest = await request.delete(`https://dev212269.service-now.com/api/now/table/incident/${sys_Id}`,
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Basic ${loginInfo}` 
                },            
            })                
            expect(deleteRequest.status()).toBe(204)               
    })
