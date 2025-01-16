const bankAccount = {
    accountNumber: 758,
    accountHolderName: '',
    balance: 1000,
    accountType: '',

    createAccount: function() {
        let accountHolderName = '';
        let accountType = '';

        while (accountHolderName.trim() === '') {
            accountHolderName = prompt("Enter account holder name:");
        }

        while (accountType.trim() === '') {
            accountType = prompt("Enter account type:");
        }

        bankAccount.accountHolderName = accountHolderName;
        bankAccount.accountType = accountType;

        alert(`Account created successfully for ${accountHolderName} with account type: ${accountType}`);
    },

    withdraw: function() {
        let amount = 0;

        do {
            amount = prompt("Enter amount to withdraw:");
            amount = parseFloat(amount);
        } while (amount <= 0);

        if (amount > bankAccount.balance) {
            alert("Insufficient balance.");
        } else {
            bankAccount.balance -= amount;
            alert(`Withdrawal successful. Remaining balance: ${bankAccount.balance}`);
        }
    },

    deposit: function() {
        let amount = 0;

        do {
            amount = prompt("Enter amount to deposit:");
            amount = parseFloat(amount);
        } while (amount <= 0);

        bankAccount.balance += amount;
        alert(`Deposit successful. New balance: ${bankAccount.balance}`);
    }
};

// Usage
bankAccount.createAccount();
bankAccount.withdraw();
bankAccount.deposit();
