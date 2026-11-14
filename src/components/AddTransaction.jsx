import { useState } from "react";
import "./AddTransaction.css"

export default function AddTransaction({ setIsModalOpen,setIncomeAmount,setBalanceAmount,setExpenseAmount,setRecentTransactions }) {
    const [categoryItem, setCategory] = useState("");
    const [transactionType, setTransactionType] = useState("Income");
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    
    function handleModalClose() {
        setIsModalOpen(false);
    }

    function addTransaction(formData) {
        const title = formData.get("title");        
        const amountValue = parseInt(formData.get("amount"));

        if (title == "" || amountValue == "" || categoryItem == "") {
            return;
        }
        
        if (title.toLowerCase() == "income") {
            setIncomeAmount(prevIncome => prevIncome + amountValue);
            setBalanceAmount(prevIncome => prevIncome + amountValue);
        }
        else {
            setExpenseAmount(preExpense => preExpense + amountValue);
            setBalanceAmount(preExpense => preExpense - amountValue);
        }

        setRecentTransactions((previousTransactions) => [
            {
                transactionType: transactionType,
                amount: amountValue,
                category: categoryItem
            },
            ...previousTransactions
        ]);
    }

    function handleTypeChange(event) {
        const value = event.target.value;
        setTransactionType(value);
    }

    function handleCategory(event) {
        const value = event.target.value;
        setCategory(value);
    }

    function handleCancel() {

    }

    return (
        <>
            <header>
                <div className="modalTitle">Add Transaction</div>
                <div className="closeModal" onClick={ handleModalClose} >X</div>
            </header>
            <section>
                <form className="transactionForm" action={addTransaction}>
                    <div className="inputContainer">
                        <label htmlFor="transactionTitle">Title</label>
                        <input id="transactionTitle" type="text" name="title" placeholder="Eg.Food"></input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" value={categoryItem} onChange={handleCategory}>
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
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="type">Type</label>
                        <div className="radioGroup">
                            <label><input type="radio" name="type" value="Expense" checked={transactionType == "Expense"} onChange={handleTypeChange} /> Expense</label>
                            <label><input type="radio" name="type" value="Income" checked={transactionType == "Income"} onChange={ handleTypeChange} /> Income</label>                        
                        </div>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="date">Type</label>
                        <input id="date" type="date" name="date" defaultValue={todayStr} ></input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" type="number" name="amount" placeholder="Eg.342"></input>
                    </div>
                    <div className="footerOptions">
                        <button type="button" onClick={handleCancel} >Cancel</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </section>
        </>
    )
}