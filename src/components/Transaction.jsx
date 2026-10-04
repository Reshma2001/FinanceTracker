import transactionData from "../../data/transactionData";
import "./Transaction.css";

export default function Transaction() {
    const transactions = transactionData.map(item => (
        <tr key={ item.amount}>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
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
                <input className="searchInput" type="text" placeholder="Search transcations"/>
                <div className="transactionGrid">
                    <table className="transationTable">
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
                            {transactions}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}