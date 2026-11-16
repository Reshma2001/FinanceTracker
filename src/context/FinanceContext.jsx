import { createContext, useContext, useMemo, useState, useEffect } from "react";

const FinanceContext = createContext(null);
const STORAGE_KEY = "financeTransactions";
const CATEGORIES_KEY = "financeCategories";

function getStoredTransactions() {
    try {
        const storedTransactions = sessionStorage.getItem(STORAGE_KEY);
        return storedTransactions ? JSON.parse(storedTransactions) : [];
    }
    catch {
        return [];
    }
}

function getStoredCategories() {
    const defaultCategories = [
        { category: "Salary", transactionType: "Income" },
        { category: "Freelance", transactionType: "Income" },
        { category: "Part Time", transactionType: "Income" },
        { category: "Food", transactionType: "Expense"},
        { category: "Shopping", transactionType: "Expense"},
        { category: "Bills", transactionType: "Expense"},
        { category: "Entertainment", transactionType: "Expense"},
        { category: "Health", transactionType: "Expense" }
    ];

    try {
        const storedCategories = sessionStorage.getItem(CATEGORIES_KEY);
        return storedCategories ? JSON.parse(storedCategories) : defaultCategories;
    }
    catch {
        return defaultCategories;
    }
}

export function FinanceProvider({ children }) {
    const [categories, setCategories] = useState(getStoredCategories);
    const [transactions, setTransactions] = useState(getStoredTransactions);

    useEffect(() => {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    },[transactions]);

    useEffect(() => {
        sessionStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
    }, [categories]);

    const addCategory = (category) => {
        const isCategoryExist = categories.filter(item => item.category === category.name);

        if (isCategoryExist.length > 0)
            return "Category already exist";

        const newCategory = {
            category: category.name,
            transactionType: category.transactionType
        }

        setCategories((currentCategories) => [
            newCategory,
            ...currentCategories
        ])
    }

    const addTransaction = (transaction) => {
        const newTransaction = {
            id: crypto.randomUUID(),
            title: transaction.title,
            category: transaction.category,
            transactionType: transaction.transactionType,
            date: transaction.date,
            amount: Number(transaction.amount)
        }

        setTransactions((currentTransactions) => [
            newTransaction,
            ...currentTransactions
        ]);
    };

    const deleteTransaction = (transactionId) => {
        setTransactions((currentTransactions) => 
            currentTransactions.filter(item => item.id !== transactionId)
        )
    };

    const financeSummary = useMemo(() => {
        const incomeAmount = transactions
            .filter(item => item.transactionType === "Income")
            .reduce((total, item) => total + item.amount, 0);

        const expenseAmount = transactions
            .filter(item => item.transactionType === "Expense")
            .reduce((total, item) => total + item.amount, 0);

        const chartData = transactions
            .filter(item => item.transactionType === "Expense")
            .reduce((categories, transaction) => {
                const category = transaction.category;

                if (!categories[category]) {
                    categories[category] = {
                        id: category,
                        expenseType: category,
                        amount: 0
                    }
                }

                categories[category].amount += transaction.amount;
                return categories;
            }, {});

        const IncomeChategoryData = transactions
            .filter(item => item.transactionType === "Income")
            .reduce((categories, transaction) => {
                const category = transaction.category;

                if (!categories[category]) {
                    categories[category] = {
                        id: category,
                        expenseType: category,
                        amount: 0,
                        totalExpense: 0
                    }
                }

                categories[category].amount += transaction.amount;
                categories[category].totalExpense = categories[category].totalExpense + 1;
                return categories;
            }, {});

        const ExpenseChategoryData = transactions
            .filter(item => item.transactionType === "Expense")
            .reduce((categories, transaction) => {
                const category = transaction.category;

                if (!categories[category]) {
                    categories[category] = {
                        id: category,
                        expenseType: category,
                        amount: 0,
                        totalExpense: 0
                    }
                }

                categories[category].amount += transaction.amount;
                categories[category].totalExpense += 1;
                return categories;
            }, {});

        return {
            incomeAmount,
            expenseAmount,
            balanceAmount: incomeAmount - expenseAmount,
            chartData: Object.values(chartData),
            IncomeChategory: Object.values(IncomeChategoryData),
            ExpenseChategory: Object.values(ExpenseChategoryData)
        }
    }, [transactions]);

    const value = {
        categories,
        addCategory,
        transactions,
        addTransaction,
        deleteTransaction,
        ...financeSummary
    };

    return (
        <FinanceContext.Provider value={value}>
            {children}
        </FinanceContext.Provider>
    )
}

export function useFinance(){
    const context = useContext(FinanceContext);

    if (!context) {
        throw new Error('useFinance must be used inside the FinanceProvider')
    }

    return context;
}