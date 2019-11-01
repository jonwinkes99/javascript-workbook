'use strict'


/*
 take in new people and add them to an array
 have a class constructor to see what they need done
 have access to they're Address, phone number and name
 name encryption ui usability
name it "Tankstelle"
*/

class Client {
    constructor(address, name, phoneNumber){
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}


let newClientLs = [{
    name: "Jon Winkles",
    address: "4721 wonderhill rd",
    phoneNumber: 1"(512)995-0995"
},{
    name: "Mimi Winkles",
    address: "4771 house hill rd",
    phoneNumber: "(979)767-6767"
},{
    name: "Grandad Winkles",
    address: "4721 house hill rd",
    phoneNumber: "(767)234-2342"
},{
    name: "Momma Winks",
    address: "868 plitz ln",
    phoneNumber: "(888)121-2323"
},{
    name: "Ashley linkles",
    address: "111 genius blvd",
    phoneNumber: "(777)098-0988"
},{
    name: "Faif Stanks",
    address: "123123 lame rd",
    phoneNumber: "(767)454-4545"
}]
*/


//const users2 = new UsersClass("4321 wonderhill rd", "Jonathan Winkles", "(512)815-0495")
//newClientLs.push(users2);
//const message = ("The address is "+ users2.address +". His/Her name is "+ users2.name +". His/Her number is "+ users2.phoneNumber +".")

//console.log(message);
console.log(`${newClientLs.name} needs some more. this is where they live ${newClientLs.address}. Here call'em ${newClientLs.phoneNumber}.`);


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






















