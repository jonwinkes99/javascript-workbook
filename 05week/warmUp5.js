
/*
 for your account class attributes:
 - account Number
 - holder
 - balance
 - type
*/




class Account {
    bAccountNumber = null;
    bHolder = null;
    bBalance = null;
    bType = null;

    constructor(bAccountNumber, bHolder, bType){
        this.accountNumber = bAccountNumber;
        this.holder = bHolder;
        this.balance = 0;
        this.type = bType;
        this.transaction = [];
    }


    // return a description of the account
    info() {
        var description = "account number = "+this.accountNumber;
        description += "balance = "+ this.balance;
        description += "type = "+ this.type;
        return description;
    }



    updatedBalance(description, amount) {
        let newTransaction = new Transaction(description, amount);
        this.transaction.push(newTransaction);
        this.balance = this.balance + amount;
    }


}


class Transaction {
    constructor(aDescription, aAmount){
    this.description = aDescription;
    this.amount = aAmount;
    }
    
}








var acc1 = new Account(1234, "Jon", "checking")
var acc2 = new Account(1212, "Mark", "savings")
var acc3 = new Account(4321, "Lucas", "savings")


acc1.updatedBalance("deposit ", 10);
acc2.updatedBalance("deposit ", 10);
acc3.updatedBalance("withdraw ", -5);



console.log("acc1 info = ", acc1.info());
console.log("acc2 info = ", acc2.info());



// add 2 methods to our class
// 1. called "info", it does not take any input
//       and it returns a string describing the account.

// 2. called "updatedBalance": takes in 1 number as input
//       and it adds that input to the balance
//       and it does not re urn anything


for(let i = 0;i<acc1.transaction.length; i++){
    console.log(`t# ${i}: ${acc1.transaction[i].description}`);
}

acc1.transaction.forEach(function(transaction, index){
    console.log(`${index}: ${transaction.description} -> ${transaction.amount}`);
})








