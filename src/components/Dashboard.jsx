import { useState } from "react";
import "./Dashboard.css"
import financeData from "../../data/financeData";
import SummaryCard from "./SummaryCard";
import SpendingChart from "./SpendingChart";
import RecentTransaction from "./RecentTransaction";
import AddTransaction from "./AddTransaction";
import ModalView from "./ModalView";

export default function Dashboard() {
    const [isModalOpen, setupIsModalOpen] = useState(false);
    const [recentTracsactions, setRecentTransactions] = useState(financeData.recentTransaction);
    const [balanceAmount, setBalanceAmount] = useState(financeData.balanceAmount);
    const [expenseAmount, setExpenseAmount] = useState(financeData.expenseAmount);
    const [incomeAmount, setIncomeAmount] = useState(financeData.incomeAmount);

    const dateNow = new Date();
    const getHours = dateNow.getHours();
    let greetingsLbl;

    if (getHours < 12)
        greetingsLbl = "Morning"
    else if (getHours >= 12 && getHours <= 15)
        greetingsLbl = "AfterNoon"
    else
        greetingsLbl = "Evening"
    
    const chartSummary = financeData.chartReport.map(item => <SpendingChart key={item.id} totalExpense={financeData.expenseAmount} chartReport={item} />)
    const recentTracs = recentTracsactions.map(item => <RecentTransaction key={item.id} transaction={item} />);

    function handleAddBtn() {
        setupIsModalOpen(true);
    }

    return (
        <>
            <section className="dashboardSection sideSection">
                <div className="greetingsContainer">
                    <div className="gestureLbl">Good {greetingsLbl} 👋</div>
                    <div className="greetingOverview">Here's your financial overview</div>
                </div>
                <div className="summaryContainer">
                    <SummaryCard summaryTitle={"Balance" } summaryAmount={ balanceAmount} />
                    <SummaryCard summaryTitle={"Income" } summaryAmount={incomeAmount } />
                    <SummaryCard summaryTitle={"Expense" } summaryAmount={expenseAmount } />
                </div>
                <div className="chartContainer">
                    <div className="chartLbl">Spending Overview</div>
                    <div className="barContainer">
                        {chartSummary}
                    </div>
                </div>
                <div className="transactionContainer">
                    <div className="transactionHeader">
                        <div className="transactionLbl">Recent Transaction</div>
                        <button className="btnForAddTransaction" onClick={handleAddBtn} >+ Add</button>
                    </div>
                    <div className="transactionList">
                        {recentTracs}
                    </div>
                </div>
            </section>
            {isModalOpen &&
                <ModalView isOpen={isModalOpen} >
                    <AddTransaction
                        setupIsModalOpen={setupIsModalOpen}
                        setIncomeAmount={setIncomeAmount}
                        setBalanceAmount={setBalanceAmount}
                        setExpenseAmount={setExpenseAmount}
                        setRecentTransactions={setRecentTransactions} />
                </ModalView>}
        </>
    )
}