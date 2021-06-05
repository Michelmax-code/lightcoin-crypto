
class Account {

  constructor() {
    this.transactions = [];
  }
  get balance() { // Calculate the balance
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) return false;
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('miguelcount');
console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(200.00, myAccount);
console.log('Commit result:', t1.commit());
console.log('New Balance: ', myAccount.balance);


const t2 = new Withdrawal(55.00, myAccount);
console.log('Commit result:', t2.commit());
console.log('New Balance: ', myAccount.balance);


const t3 = new Deposit(100.00, myAccount);
console.log('Commit result:', t3.commit());
console.log('New Balance: ', myAccount.balance);

console.log('Account Transactions: ', myAccount.balance);
console.log('Balance:', myAccount.balance);
