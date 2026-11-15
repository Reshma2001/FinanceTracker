import ModalView from "../shared/ModalView";
import "./AddBudget.css";

export default function AddBudget({
	isOpen,
	onClose,
	onSubmit,
	category,
	setCategory,
	amount,
	setAmount,
	month,
	setMonth,
}) {
	return (
		<ModalView isOpen={isOpen} onClose={onClose}>
			<header>
				<div className="modalTitle">Create budget</div>
				<div className="closeModal" onClick={onClose} aria-label="Close">&times;</div>				
			</header>
			<section>
			<form className="addBudgetForm" onSubmit={onSubmit}>
				<label htmlFor="budgetCategory">Category</label>
				<input
					id="budgetCategory"
					type="text"
					placeholder="e.g. Food"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					required
				/>

				<label htmlFor="budgetAmount">Budget amount</label>
				<input
					id="budgetAmount"
					type="number"
					min="0.01"
					step="0.01"
					placeholder="0.00"
					value={amount}
					onChange={(event) => setAmount(event.target.value)}
					required
				/>

				<label htmlFor="budgetForMonth">Month</label>
				<input
					id="budgetForMonth"
					type="month"
					value={month}
					onChange={(event) => setMonth(event.target.value)}
					required
				/>

				<div className="modalActions">
					<button type="submit">Save budget</button>
				</div>
				</form>
			</section>
		</ModalView>
	);
}