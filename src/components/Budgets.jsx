import "./Budgets.css"

export default function Budgets() {

    function handleBudgetCreate() {

    }

    return (
        <>
            <section className="budgetSection sideSection">
                <div className="headingContainer">
                    <div className="greetingsContainer">
                        <div className="gestureLbl">Budgets 💰</div>
                        <div className="greetingOverview">Manage your monthly spending limits</div>
                    </div>
                    <button className="btnForAddBudget" onClick={handleBudgetCreate} >+ Create Budget</button>
                </div>
                <div className="budegetContainer">
                    <div className="">
                        No bugets are added
                    </div>
                </div>
            </section>
        </>
    )
}