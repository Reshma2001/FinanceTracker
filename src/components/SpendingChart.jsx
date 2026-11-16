
import { useFinance } from "../context/FinanceContext";
import "./SpendingChart.css"
export default function SpendingChart({ chartReport }) {
    const { expenseAmount } = useFinance();
    const expensePer = ((chartReport.amount / expenseAmount) * 100).toFixed(1);

    return (
        <>
            <div className="chartBar">
                <div className="expenseType">{chartReport.expenseType}</div>
                <div className="barContent">
                    <div className="amountBar" style={{ width: expensePer + "%" }}></div>
                    <div className="expenseAmount">₹{chartReport.amount}</div>
               </div>                
            </div>
        </>
    )
}