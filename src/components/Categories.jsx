import categoryData from "../../data/categoryData";
import { useState } from "react";
import "./Categories.css";
import ModalView from "./ModalView";
import AddCategory from "./AddCategory";

export default function Categories() {
    const [isModalOpen, setupIsModalOpen] = useState(false);
    const [categoryItem, setCategoryItem] = useState(categoryData);
    
    const incomeCategoryElem = categoryItem.incomeCategory.map(item => (
        categoryTemplate(item)
    ));

    const expenseCategoryElem = categoryItem.expenseCatergory.map(item => (
        categoryTemplate(item)
    ));

    function categoryTemplate(item) {
        return (
            <div className="catergoryCard" key={item.id}>
                <div className="catergoryTitle">{item.category}</div>
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
                <div className="categoryGreetings">
                    <div className="headerFirstColumn">
                        <div className="gestureLbl">Categories 🏷️</div>
                        <div className="greetingOverview">Organize your transaction</div>
                    </div>
                    <button className="btnForAddCategory" onClick={handleAddCategory} >+ Add</button>
                </div>
                <div className="categoryList">
                    <div>
                        <div className="caategoryHeading">Income Categories</div>
                        <div className="categoryGrid">{incomeCategoryElem}</div>
                    </div>
                    <div>
                        <div className="caategoryHeading">Expense Categories</div>
                        <div className="categoryGrid">{expenseCategoryElem}</div>
                    </div>
                </div>
            </section>
            {isModalOpen &&
                <ModalView isOpen={isModalOpen} >
                    <AddCategory
                        setupIsModalOpen={setupIsModalOpen}
                        setCategoryItem={setCategoryItem} />
                </ModalView>}
        </>
    )
}