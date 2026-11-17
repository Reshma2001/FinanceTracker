import "./Budgets.css";
import AddBudget from "./AddBudget";
import { useFinance } from "../context/FinanceContext";
import { useState } from "react";

function formatCurrency(value) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR"
	}).format(value);
}

function formatMonth(month) {
	if (!month) return "";

	return new Date(`${month}-01T00:00:00`).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric"
	});
}

export default function Budgets() { 
	const { currentMonth, setCurrentMonth, budgetList, totalBudget, totalSpend, remainingAmount, totalUsagePercentage, addBuget, deleteBudget } = useFinance();	
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [category, setCategory] = useState("");
	const [amount, setAmount] = useState("");
	const [month, setMonth] = useState(currentMonth);

	function handleBudgetCreate(event) {
		event.preventDefault();

		const budgetAmount = Number(amount);

		if (!category.trim() || !month || !budgetAmount || budgetAmount <= 0) {
			return;
		}

		const newBudget = {			
			category: category.trim(),
			amount: budgetAmount,
			month
		};
		
		addBuget(newBudget)

		setCategory("");
		setAmount("");
		setMonth(currentMonth);
		setIsModalOpen(false);
		setCurrentMonth(month);
	}

	function handleBudgetDelete(id) {
		deleteBudget(id);
	}

	return (
		<>
			<section className="budgetSection sideSection">
				<div className="headingContainer greetingsContainer">
					<div className="">
						<div className="gestureLbl">Budgets 💰</div>
						<div className="greetingOverview">
							Manage your monthly spending limits
						</div>
					</div>

					<button
						className="btnForAddBudget"
						onClick={() => setIsModalOpen(true)}
					>
						+ Create Budget
					</button>
				</div>

				<div className="budgetMonthSelector">
					<label htmlFor="budgetMonth">View month</label>
					<input
						id="budgetMonth"
						type="month"
						value={currentMonth}
						onChange={(event) => setCurrentMonth(event.target.value)}
					/>
				</div>

				<div className="budgetOverview">
					<div className="budgetSummaryCard">
						<span>Total budget</span>
						<strong>{formatCurrency(totalBudget)}</strong>
					</div>

					<div className="budgetSummaryCard">
						<span>Total spent</span>
						<strong>{formatCurrency(totalSpend)}</strong>
					</div>

					<div className="budgetSummaryCard">
						<span>Remaining</span>
						<strong>{formatCurrency(remainingAmount)}</strong>
					</div>

					<div className="budgetSummaryCard">
						<span>Used</span>
						<strong>{totalUsagePercentage.toFixed(0)}%</strong>
					</div>
				</div>

				<div className="budgetProgress">
					<div className="budgetProgressHeader">
						<span>{formatMonth(currentMonth)} usage</span>
						<span>{totalUsagePercentage.toFixed(0)}%</span>
					</div>

					<div className="budgetProgressTrack">
						<div
							className="budgetProgressValue"
							style={{ width: `${totalUsagePercentage}%` }}
						/>
					</div>
				</div>

				<div className="budegetContainer">
					{budgetList.length === 0 ? (
						<div className="emptyBudget">
							No budgets are added for {formatMonth(currentMonth)}.
						</div>
					) : (
						budgetList.map((budget) => {
							const spent = totalSpend;
							const remaining = Math.max(
								Number(budget.amount) - spent,
								0
							);
							const usagePercentage = budget.amount
								? Math.min((spent / budget.amount) * 100, 100)
								: 0;

							return (
								<article
									className="budgetCategoryCard"
									key={budget.id}
								>
									<div className="budgetCategoryHeader">
										<div>
											<h3>{budget.category}</h3>
											<span>{formatMonth(budget.month)}</span>
										</div>

										<button
											type="button"
											className="deleteBudgetButton"
											onClick={() =>
												handleBudgetDelete(budget.id)
											}
										>
											Delete
										</button>
									</div>

									<div className="budgetCategoryAmounts">
										<span>
											Budget:{" "}
											<strong>
												{formatCurrency(budget.amount)}
											</strong>
										</span>
										<span>
											Spent:{" "}
											<strong>
												{formatCurrency(spent)}
											</strong>
										</span>
										<span>
											Remaining:{" "}
											<strong>
												{formatCurrency(remaining)}
											</strong>
										</span>
									</div>

									<div className="budgetProgressHeader">
										<span>Category usage</span>
										<span>
											{usagePercentage.toFixed(0)}%
										</span>
									</div>

									<div className="budgetProgressTrack">
										<div
											className="budgetProgressValue"
											style={{
												width: `${usagePercentage}%`
											}}
										/>
									</div>
								</article>
							);
						})
					)}
				</div>
			</section>

			<AddBudget
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleBudgetCreate}
				category={category}
				setCategory={setCategory}
				amount={amount}
				setAmount={setAmount}
				month={month}
				setMonth={setMonth}
			/>
		</>
	);
}
