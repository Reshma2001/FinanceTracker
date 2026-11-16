import { useState } from "react";
import "./Categories.css";
import ModalView from "../shared/ModalView";
import AddCategory from "./AddCategory";
import { useFinance } from "../context/FinanceContext";

export default function Categories() {
    const { IncomeChategory, ExpenseChategory } = useFinance();
    const [isModalOpen, setupIsModalOpen] = useState(false);
       
    const expenseCategory = ExpenseChategory
        .map(item => categoryTemplate(item));

    const incomeCategory = IncomeChategory.map(item => (
         categoryTemplate(item)
     ));

    function categoryTemplate(item) {
        return (
            <div className="catergoryCard" key={item.id}>
                <div className="catergoryTitle">{item.id}</div>
                <div className="categoryInfo">
                    <div className="totalExpense">{item.totalExpense ? item.totalExpense : 0} expenses</div>
                    <div className="totalAmount">₹{item.amount ? item.amount : 0}</div>
                </div>
            </div>
        )
    }

    function handleAddCategory() {
        setupIsModalOpen(prev => !prev);
    }

    return (
        <>
            <section className="categoriesSection sideSection">
                <div className="categoryGreetings greetingsContainer">
                    <div className="headerFirstColumn">
                        <div className="gestureLbl">Categories 🏷️</div>
                        <div className="greetingOverview">Organize your transaction</div>
                    </div>
                    <button className="btnForAddCategory" onClick={handleAddCategory} >+ Add</button>
                </div>
                <div className="categoryList">
                    <div>
                        <div className="caategoryHeading">Income Categories</div>
                        <div className="categoryGrid">{incomeCategory}</div>
                    </div>
                    <div>
                        <div className="caategoryHeading">Expense Categories</div>
                        <div className="categoryGrid">{expenseCategory}</div>
                    </div>
                </div>
            </section>
            {isModalOpen &&
                <ModalView isOpen={isModalOpen} >
                    <AddCategory setupIsModalOpen={setupIsModalOpen} />
                </ModalView>}
        </>
    )
}