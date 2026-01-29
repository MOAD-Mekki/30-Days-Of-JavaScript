const personAccount = {
    firstName: 'Mekki',
    lastName: 'Moad',

    incomes: {
        Salary: 2500,
        Freelance: 150,
        Gifts: 50,
    },

    expenses: {
        Rent: 1500,
        Food: 200,
        Internet: 25,
    },

    totalIncome: function(){
        let total = 0;
    for (const key in this.incomes){
        total += this.incomes[key];
    }
    return total;
    },

    totalExpenses: function(){
        let total = 0;
    for (const key in this.expenses){
        total += this.expenses[key];
    }
    return total;
    },

    addIncome: function(description , amount){
        this.incomes[description] = amount;
    },

    addExpenses: function(description , amount){
        this.expenses[description] = amount;
    },

    accountBalance: function(){
        return this.totalIncome - this.totalExpenses;
    },

    accountInfo: function(){ 
        return `${this.firstName} ${this.lastName} , Total Income: ${this.totalIncome} , Total Expenses: ${this.totalExpenses} , Balance: ${this.accountBalance}`; 
    }
}

