import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import "./Settings.css"

export default function Settings() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const savedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(savedTheme);

    function handleLogout() {
        logout();
        navigate("/", { replace: true });
    }

    function toggleTheme(event){
        setTheme(event.target.value);
        localStorage.setItem("theme", event.target.value);
        document.documentElement.dataset.theme = event.target.value;
    };

    return (
        <>
            <section className="settingsSection sideSection">
                <div className="greetingsContainer">
                    <div className="gestureLbl">Settings ⚙️</div>
                    <div className="greetingOverview">Manage your account and application preferences</div>
                </div>
                <div className="sectionsContainer">
                    <div className="sectionBlock">
                        <div className="sectionTitle">Profile</div>
                        <div className="sectionOptionContainer">
                            <div className="sectionOptionContent userName">{user?.userName}</div>                            
                        </div>
                    </div>
                    <div className="sectionBlock">
                        <div className="sectionTitle">Preferences</div>
                        <div className="sectionOptionContainer">
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Appearance</div>
                                <select value={theme} onChange={toggleTheme}>
                                    <option value="light" name="appearance">Light</option>
                                    <option value="dark" name="appearance">Dark</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="sectionBlock">
                        <div className="sectionTitle">Account</div>
                        <div className="sectionOptionContainer" onClick={handleLogout }>
                            <div className="sectionOptionContent logout">LOG OUT</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}