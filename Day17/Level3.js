const personAccount = {
    // Properties
    firstname: 'John',
    lastname: 'Doe',
    incomes: {
        'Salary': 5000,
        'Freelance': 1000,
        'Investments': 500
    },
    expenses: {
        'Rent': 1500,
        'Utilities': 200,
        'Groceries': 400,
        'Transport': 150
    },

    // Method: Calculate total income
    totalIncome: function() {
        return Object.values(this.incomes).reduce((sum, income) => sum + income, 0);
    },

    // Method: Calculate total expense
    totalExpense: function() {
        return Object.values(this.expenses).reduce((sum, expense) => sum + expense, 0);
    },

    // Method: Account balance (income - expenses)
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    },

    // Method: Add new income
    addIncome: function(description, amount) {
        this.incomes[description] = amount;
        return `Added income: ${description} - $${amount}`;
    },

    // Method: Add new expense
    addExpense: function(description, amount) {
        this.expenses[description] = amount;
        return `Added expense: ${description} - $${amount}`;
    },

    // Method: Account information
    accountInfo: function() {
        return `
            Account Information
            ====================
            Name: ${this.firstname} ${this.lastname}
            Total Income: $${this.totalIncome()}
            Total Expenses: $${this.totalExpense()}
            Account Balance: $${this.accountBalance()}
        `;
    }
};

// Stringifying the Object 
const personAccountJSON = JSON.stringify(personAccount);
window.localStorage.setItem('account', personAccountJSON);

console.log(window.localStorage.getItem('account'));
