import { useState } from "react";
import "./Transaction.css";
import { useFinance } from "../context/FinanceContext";

export default function Transaction() {
    const { transactions } = useFinance();
    const [searchText, setSearchText] = useState("");

    const filteredTransactions = transactions.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase())
    );

    const transactionsItem = filteredTransactions.map(item => (
        <tr key={ item.id}>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.transactionType}</td>
            <td>{item.amount}</td>
        </tr>
    ))    

    return (
        <>
            <section className="transactionSection sideSection">
                <div className="greetingsContainer">
                    <div className="gestureLbl">Transactions 💳</div>
                    <div className="greetingOverview">Track and manage all your income and expenses</div>
                </div>
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Search by transactions or category"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="transactionGrid">
                    <table className="transactionTable">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Transaction</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionsItem.length > 0 ? transactionsItem : <tr className="nillItem">No Data Found</tr>}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}