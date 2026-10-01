
import "./SpendingChart.css"
export default function SpendingChart({ totalExpense, chartReport }) {
    const expensePer = ((chartReport.amount / totalExpense) * 100).toFixed(1);
    return (
        <>
            <div className="chartBar">
                <div className="expenseType">{chartReport.expenseType}</div>
                <div className="barConent">
                    <div className="amountBar" style={{ width: expensePer + "%" }}></div>
                    <div className="expenseAmount">₹{chartReport.amount}</div>
               </div>                
            </div>
        </>
    )
}