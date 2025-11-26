// que1
function createCounter() {
    let count = 0; 

    return {
        increment() {
            count++;
            console.log("Current count:", count);
        },
        decrement() {
            count--;
            console.log("Current count:", count);
        },
        getCount() {
            return count;
        }
    };
}



// que2
function createBankAccount() {
    let balance = 0; 
    return {
        deposit(amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance() {
            return balance;
        }
    };
}
