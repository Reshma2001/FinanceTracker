import "./Dashboard.css"
import financeData from "../../data/financeData";
import SummaryCard from "./SummaryCard";
import SpendingChart from "./SpendingChart";
import RecentTransaction from "./RecentTransaction";

export default function Dashboard() {
    const dateNow = new Date();
    const getHours = dateNow.getHours();
    let greetingsLbl;

    if (getHours < 12)
        greetingsLbl = "Morning"
    else if (getHours >= 12 && getHours <= 15)
        greetingsLbl = "AfterNoon"
    else
        greetingsLbl = "Evening"

    const summaryCardElem = financeData.summaryData.map(item => <SummaryCard key={item.type} summaryData={item} />)
    const chartSummary = financeData.chartReport.map(item => <SpendingChart key={item.expenseType} totalExpense={financeData.expenseAmount} chartReport={item} />)
    const recentTracs = financeData.recentTransaction.map(item => <RecentTransaction key={item.amount} transaction={item} />);

    return (
        <section className="dashboardSection sideSection">
            <div className="greetingsContainer">
                <div className="gestureLbl">Good {greetingsLbl} 👋</div>
                <div className="greetingOverview">Here's your financial overview</div>
            </div>
            <div className="summaryContainer">
                {summaryCardElem}
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
                    <button className="btnForAddTransaction">+ Add</button>
                </div>
                <div className="transactionList">
                    {recentTracs}
                </div>
            </div>
        </section>
    )
}