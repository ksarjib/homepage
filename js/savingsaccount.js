"use strict";

class SavingsAccount extends Account {

    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {accountNumber} accountNumber the number for this account
     * @param {interest} interest the interest for this account
     * 
     */
    constructor(accountNumber, interest){
        super(accountNumber);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    /**
     * @param {number} the interest for this account
     */
    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100)
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._interest}`;
    }

    /**
     * @returns {string} representation of this saving account
     */
    toString() {
        return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": interest " + this.getInterest();
    }
}