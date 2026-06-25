import test, { expect } from '@playwright/test'


let username = "admin"
let password = "FGf1Zodo==R5"
let login = `${username}:${password}`
//btoa
let loginInfo = btoa(login)
console.log(loginInfo)


let sys_Id: any
//17e88e5f83a50350c6ae1429feaad325

test("Post Request In SN", async ({ request }) => {
    let postReq = await request.post('https://dev212269.service-now.com/api/now/table/incident', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${loginInfo}`
        },

        //request body -> raw/ json
        data: {
            "short_description": "Create Incident vai postman",
            "caller_id": "Dilip",
        }
    })


    //response body
let res= await postReq.json()
console.log(res)


sys_Id=res.result.sys_id
//console.log(sys_Id)


expect(postReq.status()).toBe(201)
//ae2d359f83250350c6ae1429feaad362

}
)

test("Get Request", async ({ request }) => {
    let getReq = await request.get(`https://dev212269.service-now.com/api/now/table/incident/${sys_Id}`, {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${loginInfo}`
        }
    })
    //response body
    let getRes = await getReq.json()
    console.log(getRes)
})

