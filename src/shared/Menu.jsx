import { useState } from "react";
import "./Menu.css";
import { useAuth } from "../context/useAuth";

export default function Menu({ setSectionName }) {
    const { user } = useAuth();
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Dashboard",
        "Transaction",
        "Budgets",
        "Categories",
        "Settings",
    ];

    function handleMenuChange(event) {
        const currentMenu = event.currentTarget.getAttribute("menuName");

        setActiveMenu(currentMenu);
        setSectionName(currentMenu);
        setIsMenuOpen(false);
    }

    return (
        <>
            <header className="mobileHeader">
                <div className="mobileAppTitle">💰 Financial Tracker</div>

                <button
                    type="button"
                    className="menuToggle"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </header>

            {isMenuOpen && (
                <button
                    type="button"
                    className="menuOverlay"
                    aria-label="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <section className={`menuSection ${isMenuOpen ? "menuOpen" : ""}`}>
                <div className="firstSection">
                    <div className="apptitle">💰 Financial Tracker</div>

                    <div className="topSection">
                        {menuItems.map((item) => (
                            <div
                                key={item}
                                className={`menuitems ${
                                    activeMenu === item ? "activeMenu" : ""
                                }`}
                                menuName={item}
                                onClick={handleMenuChange}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footerSection">
                    <div className="currentUser">
                        👤 <span className="userName">{user?.userName}</span>
                    </div>
                </div>
            </section>
        </>
    );
}