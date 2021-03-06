class User {
    constructor(username, emailAddress) {
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance >= amount ? this.accountBalance -= amount : console.log("Not enough funds available \n")
        return this;
    }
    displayBalance() {
        console.log(`Hello ${this.name} your current balance is: $${this.accountBalance} \n`);
        return this;
    }
    transferMoney(otherUser, amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            otherUser.accountBalance += amount;
            return this;
        }
        else console.log("Not enough funds available \n")
        return this;
    }
}

// Create 3 instances of the User class
const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const michael = new User("Michael Chang", "michael@codingdojo.com");

// Have the first user make 3 deposits and 1 withdrawal and then display their balance
guido.makeDeposit(3250).makeDeposit(2525).makeDeposit(1500).makeWithdrawal(400).displayBalance();

// Have the second user make 2 deposits and 2 withdrawals and then display their balance
monty.makeDeposit(200).makeDeposit(300).makeWithdrawal(50).makeWithdrawal(100).displayBalance();

// Have the third user make 1 deposits and 3 withdrawals and then display their balance
michael.makeDeposit(2500).makeWithdrawal(200).makeWithdrawal(250).makeWithdrawal(100).displayBalance();

// Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
guido.transferMoney(michael, 300).displayBalance();
michael.displayBalance();