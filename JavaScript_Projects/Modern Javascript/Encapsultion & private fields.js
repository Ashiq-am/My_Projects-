class Account {
     #balance; // Private field
 
     constructor(balance) {
         this.#balance = balance;
     }
 
     getBalance() {
         return `Your balance is ${this.#balance}.`;
     }
 
     deposit(amount) {
         if (amount > 0) {
             this.#balance += amount;
             console.log(`Deposited ${amount}.`);
         } else {
             console.log("Invalid deposit amount.");
         }
     }
 }
 
 const acc = new Account(10000);
 console.log(acc.getBalance()); 
 acc.deposit(500); 
 console.log(acc.getBalance()); 
 acc.deposit(10000); 
 console.log(acc.getBalance()); 