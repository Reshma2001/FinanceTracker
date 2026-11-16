
import { useFinance } from "../context/FinanceContext";
import "./AddCategory.css";

export default function AddCategory({ setupIsModalOpen }) {
    const { addCategory } = useFinance();

    function handleModalClose() {
        setupIsModalOpen(false);
    }

    function handleAddCategory(fromData) {
        const category = {
            name: fromData.get("name"),
            transactionType: fromData.get("type")
        }

        addCategory(category);  
        setupIsModalOpen(false);
    }

    return (
        <>
            <header>
                <div className="modalTitle">Add Category</div>
                <div className="closeModal" onClick={handleModalClose} >&times;</div>
            </header>
            <section>
                <form className="categoryForm" action={handleAddCategory}>
                    <div className="inputContainer">
                        <label htmlFor="categoryName">Category Name</label>
                        <input id="categoryName" type="text" name="name" placeholder="Eg. Food"></input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="type">Type</label>
                        <div className="radioGroup">
                            <label><input type="radio" name="type" value="Expense" /> Expense</label>
                            <label><input type="radio" name="type" value="Income" defaultChecked={true} /> Income</label>
                        </div>
                    </div>
                    <div className="footerOptions">                        
                        <button type="submit">Add</button>
                    </div>
                </form>
            </section>
        </>
    )
}