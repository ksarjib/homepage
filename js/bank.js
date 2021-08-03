"use strict";

class Bank {
    static nextNumber;
    constructor(){
        this._accounts = [];
    }

    addAccount(accountNumber){
        this._accounts.push(new Account(accountNumber));
        return this._accounts.length;
    }

    addSavingsAccount(accountNumber, interest) {
        this._accounts.push(new SavingsAccount(accountNumber, interest));
        return this._accounts.length;
    }

    addCheckingAccount(accountNumber, overdraft) {
        this._accounts.push(new CheckingAccount(accountNumber, overdraft));
        return this._accounts.length;
    }

    closeAccount(number) {
        this._accounts.map( account => {
            if(account.accountNumber === number) {
                this._accounts.pop(account);
            }
        } );
    }

    accountReport() {
        return this._accounts.map(accounts => accounts.toString()).join('\n');
    }

    endOfMonth() {
        for(eachAccount in this._accounts) {
            eachAccount.endOfMonth();
        }
    }
}