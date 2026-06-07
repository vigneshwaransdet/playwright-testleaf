// Note:
// This concept we never use in playwright, so just for a information, we are learning this in typescript

//Intersection -> AND condtion (&)

let val:string&number

// Type 'number' is not assignable to type 'never'.
// val='f'&6

// Note:
// Intersection never used in real time scenario

//type alias -> custom type for data structure
type admin={adminId:string, password:string}
type customer={customerId:string,passwordcus:string}

type v=admin&customer
let user:v = {
    adminId:'tl@56',
    password:'1234',
    customerId:'tl@56',
    passwordcus:'1234'
}

console.log(user)