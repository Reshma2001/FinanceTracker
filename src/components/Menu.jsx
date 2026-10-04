import "./Menu.css"

export default function Menu({ setSectionName }) {
    const menuItems = ["Dashboard", "Transaction", "Budgets", "Categories", "Settings"];

    function handleMenuChange(event) {
        const currentMenu = event.currentTarget.getAttribute("menuName");        
        setSectionName(currentMenu);
    }

    return (
        <section className="menuSection">
            <div className="firstSection">
                <div className="apptitle">💰 Financial Tracker</div>
                <div className="topSection">
                    {menuItems.map(item => <div className="menuitems" key={item} menuName={item} onClick={handleMenuChange}>{item}</div>)}
                </div>
            </div>
            <div className="footerSection">
                <div className="currentUser">👤 Reshma</div>
            </div>
        </section>
    )
}