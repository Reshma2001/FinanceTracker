import "./AddTransaction.css"

export default function AddTransaction({ setupIsModalOpen }) {
    function handleModalClose() {
        setupIsModalOpen(false);
    }

    return (
        <>
            <header>
                <div className="modalTitle">Add Transaction</div>
                <div className="closeModal" onClick={ handleModalClose} >X</div>
            </header>
            <section>
            <div>Modal content</div>
            </section>
        </>
    )
}