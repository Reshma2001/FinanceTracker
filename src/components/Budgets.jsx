import { useMemo, useState } from "react";
import "./Budgets.css";
import AddBudget from "./AddBudget";

const budgetStorageKey = "budgets";
const transactionStorageKey = "transactions";

const currentMonth = new Date().toISOString().slice(0, 7);

function getStoredData(key) {
	try {
		return JSON.parse(localStorage.getItem(key)) || [];
	} catch {
		return [];
	}
}

function getTransactionAmount(transaction) {
	return Number(
		transaction.amount ??
		transaction.value ??
		transaction.spent ??
		0
	);
}

function isExpense(transaction) {
	return (
		transaction.type?.toLowerCase() === "expense" ||
		transaction.kind?.toLowerCase() === "expense" ||
		!transaction.type
	);
}

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
	const [budgets, setBudgets] = useState(() => getStoredData(budgetStorageKey));
	const [transactions] = useState(() => getStoredData(transactionStorageKey));
	const [selectedMonth, setSelectedMonth] = useState(currentMonth);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [category, setCategory] = useState("");
	const [amount, setAmount] = useState("");
	const [month, setMonth] = useState(currentMonth);

	const monthlyTransactions = useMemo(() => {
		return transactions.filter((transaction) => {
			const transactionDate = transaction.date || transaction.createdAt;

			return (
				transactionDate?.slice(0, 7) === selectedMonth &&
				isExpense(transaction)
			);
		});
	}, [transactions, selectedMonth]);

	const monthlyBudgets = useMemo(() => {
		return budgets.filter((budget) => budget.month === selectedMonth);
	}, [budgets, selectedMonth]);

	const totalBudget = monthlyBudgets.reduce(
		(total, budget) => total + Number(budget.amount || 0),
		0
	);

	const totalSpend = monthlyTransactions.reduce(
		(total, transaction) => total + getTransactionAmount(transaction),
		0
	);

	const remainingAmount = Math.max(totalBudget - totalSpend, 0);
	const totalUsagePercentage = totalBudget
		? Math.min((totalSpend / totalBudget) * 100, 100)
		: 0;

	function getCategorySpend(categoryName) {
		return monthlyTransactions
			.filter(
				(transaction) =>
					transaction.category?.toLowerCase() ===
					categoryName.toLowerCase()
			)
			.reduce(
				(total, transaction) => total + getTransactionAmount(transaction),
				0
			);
	}

	function handleBudgetCreate(event) {
		event.preventDefault();

		const budgetAmount = Number(amount);

		if (!category.trim() || !month || !budgetAmount || budgetAmount <= 0) {
			return;
		}

		const newBudget = {
			id: crypto.randomUUID(),
			category: category.trim(),
			amount: budgetAmount,
			month
		};

		const updatedBudgets = [...budgets, newBudget];

		setBudgets(updatedBudgets);
		localStorage.setItem(budgetStorageKey, JSON.stringify(updatedBudgets));

		setCategory("");
		setAmount("");
		setMonth(currentMonth);
		setIsModalOpen(false);
		setSelectedMonth(month);
	}

	function handleBudgetDelete(id) {
		const updatedBudgets = budgets.filter((budget) => budget.id !== id);

		setBudgets(updatedBudgets);
		localStorage.setItem(budgetStorageKey, JSON.stringify(updatedBudgets));
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
						value={selectedMonth}
						onChange={(event) => setSelectedMonth(event.target.value)}
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
						<span>{formatMonth(selectedMonth)} usage</span>
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
					{monthlyBudgets.length === 0 ? (
						<div className="emptyBudget">
							No budgets are added for {formatMonth(selectedMonth)}.
						</div>
					) : (
						monthlyBudgets.map((budget) => {
							const spent = getCategorySpend(budget.category);
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