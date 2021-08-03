(function () {
    describe("Account", function () {
        beforeEach(() => {
            account = new Account(1234);
        });

        describe("getNumber", function () {
            it("Returns accounts number", function () {
                assert.equal(account.getNumber(), 1234);
            });
        });

        describe("getBalance", function () {
            it("Returns accounts balance", function () {
                assert.equal(account.getBalance(), 0);
            });
        });

        describe("deposit", function () {
            describe("When the given amount is more than zero", function () {
                it("Increment account balance by given amount", function () {
                    account.deposit(100)
                    assert.equal(account.getBalance(), 100);
                });
            });

            describe("When the given amount is less than zero", function () {
                it("Throws an error",
                    function () {
                        assert.throws(() => { account.deposit(-12) }, Error, "Deposit amount has to be greater than zero");
                    });
            });
        });


        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { account.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws Error with Insufficient funds", function () {
                    assert.throws(() => { account.withdraw(200) }, Error, "Insufficient funds");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    account.deposit(120);
                    account.withdraw(100);
                    assert.equal(account.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            it("Prints details of account", function () {
                assert.equal(account.endOfMonth(), '');
            });
        });

        describe("toString", function () {
            it("Prints account details", function () {
                assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
            });
        });
    });

    describe("SavingsAccount", function () {
        beforeEach(() => {
            savingsAccount = new SavingsAccount(1234, 0.1);
        });

        describe("setInterest", function () {
            it("sets account interest", function () {
                savingsAccount.setInterest(0.15);
                assert.equal(savingsAccount.getInterest(), 0.15);
            });
        });

        describe("addInterest", function () {
            it("deposits balance interest into account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest();
                assert.equal(savingsAccount.getBalance(), 100.1);
            });
        });

        describe("getInterest", function () {
            it("Returns account interest", function () {
                assert.equal(savingsAccount.getInterest(), 0.1);
            });
        });

        describe("endOfMonth", function () {
            it("Prints details of savings account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest();
                assert.equal(savingsAccount.endOfMonth(), 'Interest added SavingsAccount 1234: balance: 100.20009999999999 interest: 0.1');
            });
        });

        describe("toString", function () {
            it("Prints savings account details", function () {
                assert.equal(savingsAccount.toString(), `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: interest ${savingsAccount.getInterest()}`);
            });
        });
    });

    describe("CheckingAccount", function () {
        beforeEach(() => {
            checkingAccount = new CheckingAccount(1234, 1000);
        });

        describe("setOverdraftLimit", function () {
            it("sets account overdraftLimit", function () {
                checkingAccount.setOverdraftLimit(500);
                assert.equal(checkingAccount.getOverdraftLimit(), 500);
            });
        });

        describe("getOverdraftLimit", function () {
            it("Returns account overdraftLimit", function () {
                assert.equal(checkingAccount.getOverdraftLimit(), 1000);
            });
        });

        describe("withdraw", function () {

            describe("When the withdraw amount exceeds overdraft limit", function () {
                it("Throws Error with Over the draft limit", function () {
                    checkingAccount.deposit(100);
                    assert.throws(() => { checkingAccount.withdraw(1101) }, Error, "withdraw amount has exceeded the overdraft limit");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(100);
                    assert.equal(checkingAccount.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            describe("When the balance is less than 0", function () {
                it("Prints warning details of checking account", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(300);
                    assert.equal('Warning, low balance CheckingAccount 1234: balance: -180 overdraft limit: 1000', checkingAccount.endOfMonth());
                });
            });

            describe("When the balance is greater than 0", function () {
                it("Prints details of checking account", function () {
                    assert.equal(checkingAccount.endOfMonth(), '');
                });
            })


        });

        describe("toString", function () {
            it("Prints checking account details", function () {
                assert.equal(checkingAccount.toString(), `Checking Account ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft ${checkingAccount.getOverdraftLimit()}`);
            });
        });
    });

    describe("Bank", function () {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", function () {
            it("adds an account, and returns number of accounts", function () {
                bank.addAccount(12);
                assert.equal(bank.addAccount(111), 2);
            });
        });

        describe("addCheckingAccount", function () {
            it("adds a checking account, and returns number of accounts", function () {
                assert.equal(bank.addCheckingAccount(1000, 111), 1);
            });
        });

        describe("addSavingsAccount", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(0.02, 222), 1);
            });
        });

        describe("accountReport", function () {
            it("Prints details of each existing account", function () {
                bank.addCheckingAccount(111, 2000);
                bank.addAccount(222);
                bank.addSavingsAccount(333, 0.12);
                assert.equal(bank.accountReport(), "Checking Account 111: balance 0: overdraft 2000\nAccount 222: balance 0\nSavings Account 333: balance 0: interest 0.12");
            });
        });
    });
})();