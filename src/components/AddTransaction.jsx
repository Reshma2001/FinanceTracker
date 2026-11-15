import { useState } from "react";
import "./AddTransaction.css"

export default function AddTransaction({ setIsModalOpen, setIncomeAmount, setBalanceAmount, setExpenseAmount, setRecentTransactions }) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const [transactionItem, setTransactionItem] = useState({
        title: "",
        category: "",
        transactionType: "Income",
        date: todayStr,
        amount: ""
    });    
    
    function handleModalClose() {
        setIsModalOpen(false);
    }

    function addTransaction() {        
        const amountValue = transactionItem.amount;

        if (transactionItem.title == "" || amountValue == "" || transactionItem.category == "")
            return;        
        
        if (transactionItem.transactionType == "Income") {
            setIncomeAmount(prevIncome => prevIncome + amountValue);
            setBalanceAmount(prevIncome => prevIncome + amountValue);
        }
        else {
            setExpenseAmount(preExpense => preExpense + amountValue);
            setBalanceAmount(preExpense => preExpense - amountValue);
        }

         setRecentTransactions((previousTransactions) => [
             transactionItem,
             ...previousTransactions
         ]);        
    }

    return (
        <>
            <header>
                <div className="modalTitle">
                    Add Transaction
                </div>
                <div className="closeModal" onClick={ handleModalClose}>X</div>
            </header>
            <section>
                <form className="transactionForm" action={addTransaction}>
                    <div className="inputContainer">
                        <label htmlFor="transactionTitle">
                            Title
                        </label>
                        <input
                            id="transactionTitle"
                            type="text"
                            name="title"
                            placeholder="Eg.Food"
                            value={transactionItem.title}
                            onChange={(e) => setTransactionItem({ ...transactionItem, title: e.target.value })}>
                        </input>
                        {transactionItem.title === "" && <span className="inlineError">Title is required</span>}
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={transactionItem.category}
                            onChange={(e) => setTransactionItem({ ...transactionItem, category: e.target.value })}>
                            <option value="">-- Choose Category --</option>
                            <option value="Food">Food</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Bills">Bills</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Transport">Transport</option>
                            <option value="Health">Health</option>
                            <option value="Income">Salary</option>
                            <option value="PartTime">Part Time Job</option>
                        </select>
                        {transactionItem.category === "" && <span className="inlineError">Category is required</span>}
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="type">Type</label>
                        <div className="radioGroup">
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Expense"
                                    checked={transactionItem.transactionType == "Expense"}
                                    onChange={(e) => setTransactionItem({ ...transactionItem, transactionType: e.target.value })}
                                />
                                Expense
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Income"
                                    checked={transactionItem.transactionType == "Income"}
                                    onChange={(e) => setTransactionItem({ ...transactionItem, transactionType: e.target.value })}
                                />
                                Income
                            </label>                        
                        </div>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="date">
                            Date
                        </label>  
                        <input
                            id="date"
                            type="date"
                            name="date"
                            defaultValue={transactionItem.date}
                            onChange={(e) => setTransactionItem({ ...transactionItem, date: e.target.value })} >
                        </input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="amount">
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            name="amount"
                            min="0"
                            placeholder="Eg.342"
                            value={transactionItem.amount}
                            onChange={(e) => setTransactionItem({ ...transactionItem, amount: parseInt(e.target.value) })} >
                        </input>
                        {transactionItem.amount === "" && <span className="inlineError">Amount is required</span>}  
                    </div>
                    <div className="footerOptions">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </section>
        </>
    )
}