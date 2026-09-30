export default function RecentTransaction({ transaction }) {
    return (
        <>
            <div className="transactionItem">
                <div className="transacationType">{transaction.transactionType}</div>
                <div className={`transactionAmount ${transaction.transactionType == "Income" ? "income" : "expense"}`}>{transaction.transactionType == "Income" ? "+" : "-"} {transaction.amount}</div>
            </div >
        </>
    )
}