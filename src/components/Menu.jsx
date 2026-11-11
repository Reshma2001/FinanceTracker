import { useState } from "react";
import "./Menu.css"

export default function Menu({ setSectionName }) {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const menuItems = ["Dashboard", "Transaction", "Budgets", "Categories", "Settings"];

    function handleMenuChange(event) {
        const currentMenu = event.currentTarget.getAttribute("menuName");
        setActiveMenu(currentMenu);
        setSectionName(currentMenu);
    }

    return (
        <section className="menuSection">
            <div className="firstSection">
                <div className="apptitle">💰 Financial Tracker</div>
                <div className="topSection">
                    {menuItems.map(item => <div className={`menuitems ${activeMenu == item ? "activeMenu" : ""}`} key={item} menuName={item} onClick={handleMenuChange}>{item}</div>)}
                </div>
            </div>
            <div className="footerSection">
                <div className="currentUser">👤 Reshma</div>
            </div>
        </section>
    )
}