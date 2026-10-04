import "./Menu.css"

export default function Menu({ onSectionChange }) {
    const menuItems = ["Dashboard", "Transaction", "Budgets", "Categories", "Settings"];

    return (
        <section className="menuSection">
            <div className="firstSection">
                <div className="apptitle">💰 Financial Tracker</div>
                <div className="topSection">
                    {menuItems.map(item => <div className="menuitems" key={item} onClick={onSectionChange(item)}>{item}</div>)}
                </div>
            </div>
            <div className="footerSection">
                <div className="currentUser">👤 Reshma</div>
            </div>
        </section>
    )
}