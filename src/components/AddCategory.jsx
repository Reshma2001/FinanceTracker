
import "./AddCategory.css";

export default function AddCategory(props) {
    function handleModalClose() {
        props.setupIsModalOpen(false);
    }

    function handleCancel() {

    }

    function addCategory(fromData) {
        const name = fromData.get("name");
        const type = fromData.get("type");

        if (type === "Expense")
            props.setCategoryItem(preCategory => ({
                ...preCategory,
                expenseCatergory: [{ category: name, type: type }, ...preCategory.expenseCatergory]
            }))
        else
            props.setCategoryItem(preCategory => ({
                ...preCategory,
                incomeCategory: [{ category: name, type: type }, ...preCategory.incomeCategory]
            }))

        console.log(name, type);
    }

    return (
        <>
            <header>
                <div className="modalTitle">Add Category</div>
                <div className="closeModal" onClick={handleModalClose} >&times;</div>
            </header>
            <section>
                <form className="categoryForm" action={addCategory}>
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
                        <button type="button" onClick={handleCancel} >Cancel</button>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </section>
        </>
    )
}