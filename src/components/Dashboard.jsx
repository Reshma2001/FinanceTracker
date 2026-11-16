import { useState } from "react";
import "./Dashboard.css"
import SummaryCard from "./SummaryCard";
import SpendingChart from "./SpendingChart";
import RecentTransaction from "./RecentTransaction";
import AddTransaction from "./AddTransaction";
import ModalView from "../shared/ModalView";    
import { useAuth } from "../context/useAuth";
import { useFinance } from "../context/FinanceContext";

export default function Dashboard() {
    const { user } = useAuth();
    const { transactions, balanceAmount, incomeAmount, expenseAmount, chartData } = useFinance();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [recentTransactions, setRecentTransactions] = useState(financeData.recentTransaction);
    // const [balanceAmount, setBalanceAmount] = useState(financeData.balanceAmount);
    // const [expenseAmount, setExpenseAmount] = useState(financeData.expenseAmount);
    // const [incomeAmount, setIncomeAmount] = useState(financeData.incomeAmount);

    const dateNow = new Date();
    const currentHour = dateNow.getHours();
    let greetingLabel;

    if (currentHour < 12) {
        greetingLabel = "Morning";
    } else if (currentHour >= 12 && currentHour <= 15) {
        greetingLabel = "Afternoon";
    } else {
        greetingLabel = "Evening";
    }

    const chartSummary = chartData.map((item) => (
        <SpendingChart
            key={item.id}
            chartReport={item}
        />
    ));

    const recentTransactionItems = transactions
        .slice(0, 5)
        .map((item) => (
        <RecentTransaction
            key={item.id}
            transaction={item}
        />
    ));

     function handleAddButton() {
         setIsModalOpen(true);
     }

    return (
        <>
            <section className="dashboardSection sideSection">
                <div className="greetingsContainer">
                    <div className="gestureLbl">
                        Good {greetingLabel} <span className="userName">{ user?.userName}</span>👋
                    </div>

                    <div className="greetingOverview">
                        Here's your financial overview
                    </div>
                </div>

                <div className="summaryContainer">
                    <SummaryCard
                        summaryTitle="Balance"
                        summaryAmount={balanceAmount}
                    />

                    <SummaryCard
                        summaryTitle="Income"
                        summaryAmount={incomeAmount}
                    />

                    <SummaryCard
                        summaryTitle="Expense"
                        summaryAmount={expenseAmount}
                    />
                </div>

                <div className="chartContainer">
                    <div className="chartLbl">Spending Overview</div>

                    <div className="barContainer">
                        {chartSummary.length > 0 ? chartSummary : <div className="nillItems">No transaction made for overview</div>}
                    </div>
                </div>

                <div className="transactionContainer">
                    <div className="transactionHeader">
                        <div className="transactionLbl">
                            Recent Transactions
                        </div>

                        <button
                            className="btnForAddTransaction"
                            onClick={handleAddButton}
                        >
                            + Add
                        </button>
                    </div>

                    <div className="transactionList">
                        {recentTransactionItems.length >0 ? recentTransactionItems : <div className="nillItems">No transaction</div>}
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <ModalView isOpen={isModalOpen}>
                    <AddTransaction
                        setIsModalOpen={setIsModalOpen}
                    />
                </ModalView>
            )}
        </>
    );
}