import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"

export default function Menu({ setSectionName }) {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const menuItems = ["Dashboard", "Transaction", "Budgets", "Categories", "Settings"];

    function handleMenuChange(event) {
        const currentMenu = event.currentTarget.getAttribute("menuName");
        setActiveMenu(currentMenu);
        setSectionName(currentMenu);
    }

    function handleLogout() {
        navigate("/", { replace: true });
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
                <div className="currentUser">👤 Reshma <span className="signOutIcon" onClick={handleLogout} >⍈</span></div>
            </div>
        </section>
    )
}