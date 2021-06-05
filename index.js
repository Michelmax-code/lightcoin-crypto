let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
  } // Calculate the balance

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('miguelcount');
console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(200.00, myAccount);
t1.commit();

const t2 = new Withdrawal(55.00, myAccount);
t2.commit();

const t3 = new Deposit(100.00, myAccount);
t3.commit();

console.log('Balance:', myAccount.balance);
