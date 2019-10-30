'use strict'


/*
 take in new people and add them to an array
 have a class constructor to see what they need done
 have access to they're Address, phone number and name
 name encryption ui usability
name it "Tankstelle"
*/





class UsersClass {
    constructor(address, name, phoneNumber){
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

const users2 = new UsersClass("4321 wonderhill rd", "Jonathan Winkles", "(512)815-0495")
const users1 = Object.keys(users2).map(i => users2[i])
const message = ("The address is "+ users2.address +". His/Her name is "+ users2.name)

console.log(message);
//console.log(users1);































