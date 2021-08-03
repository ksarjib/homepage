"use strict";


    /**
     * Class CheckingAccount a type of Account
     * 
     * Inherits Account class and provides the basic functionality that a CheckingAccount should have
     */
class CheckingAccount extends Account {
    constructor(accountNumber, overdraft) {
        super(accountNumber);
        this._overdraft = overdraft;
    }

    /**
     * Method to set the overdraft amount limit
     * 
     * @param {overdraft}  overdraft the overdraft limit
     * 
     */
    setOverdraftLimit(overdraft) {
        this._overdraft = overdraft;
    }

    getOverdraftLimit() {
        return this._overdraft;
    }

    /**
     * Method to withdraw from the checking account
     * 
     * @param {amount}  amount the amount to withdraw
     * 
     */
    withdraw(amount) {
        if(amount > this._overdraft + this._balance) {
            throw Error('withdraw amount has exceeded the overdraft limit');
        }
        this._balance -= amount;
    }

    endOfMonth() {
        if(this._balance < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
        } else {
            return '';
        }
    }

    /**
     * @returns {string} representation of this checking account
     */
    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft " + this.getOverdraftLimit();
    }
}