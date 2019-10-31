'use strict'


/*
 take in new people and add them to an array
 have a class constructor to see what they need done
 have access to they're Address, phone number and name
 name encryption ui usability
name it "Tankstelle"
*/



let newClientLs = [];

class UsersClass {
    constructor(address, name, phoneNumber){
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

const users2 = new UsersClass("4321 wonderhill rd", "Jonathan Winkles", "(512)815-0495")
newClientLs.push(users2);
const message = ("The address is "+ users2.address +". His/Her name is "+ users2.name +". His/Her number is "+ users2.phoneNumber +".")

//console.log(message);
console.log(newClientLs);


/*
function movePiece(clientLs){
    clientLs.forEach(element => {
        console.log("element = ", element);
        newClientLs.push(element);
    })       
    return newClientLs
    
}
*/

//console.log(movePiece(newClientLs) + 'is your new client')






















