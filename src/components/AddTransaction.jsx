import "./AddTransaction.css"

export default function AddTransaction(props) {
    function handleModalClose() {
        props.setupIsModalOpen(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formEle = event.currentTarget;        
        const formData = new FormData(formEle);
        const title = formData.get("title");
        const amount = parseInt(formData.get("amount"));

        if (title.toLowerCase() == "income") {
            props.setIncomeAmount(prevIncome => prevIncome + amount);
            props.setBalanceAmount(prevIncome => prevIncome + amount);
        }
        else {
            props.setExpenseAmount(preExpense => preExpense + amount);
            props.setBalanceAmount(preExpense => preExpense - amount);
        }

        props.setRecentTransactions(preTransation => [...preTransation, { transactionType: title, amount: amount }]);     
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
                <form className="transationForm" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Eg.Food"></input>
                    </div>
                    <div className="inputContainer" style={{display: "none"} } >
                        <label>Type</label>
                        <select value="Expense">
                            <option value="Expense">Expense</option>
                            <option value="Expense">Income</option>
                        </select>
                    </div>
                    <div className="inputContainer">
                        <label>Amount</label>
                        <input type="number" name="amount" placeholder="Eg.342"></input>
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