import { useState } from "react";
import { useAuth } from "../context/useAuth"
import "./Settings.css"

export default function Settings() {
    const { user } = useAuth();
    const [theme, setTheme] = useState("Light");
    const [currency, setCurrency] = useState("INR");
    const [notification, setNotification] = useState("On");

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
                        <div className="userInfoContent">
                            <div className="sectionOptionContent userName">{user?.userName}</div>
                            <div className="sectionOptionContent" style={{display: "none"}} >reshma@gmail.com</div>
                        </div>
                    </div>
                    <div className="sectionBlock">
                        <div className="sectionTitle">Preferences</div>
                        <div className="sectionOptionContainer">
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Appearance</div>
                                <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                                    <option value="Light" name="appearance">Light</option>
                                    <option value="Dark" name="appearance">Dark</option>
                                </select>
                            </div>
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Currency</div>
                                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                    <option value="INR" name="currency">INR</option>
                                    <option value="Dollar" name="currency">Dollar</option>
                                </select>
                            </div>
                            <div className="sectionOptionContent" style={{display: "none"}}>
                                <div className="preferenceOption">Notification</div>
                                <select value={notification} onChange={(e) => setNotification(e.target.value)}>
                                    <option value="On" name="notification">On</option>
                                    <option value="Off" name="notification">Off</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="sectionBlock">
                        <div className="sectionTitle">Security</div>
                        <div className="sectionOptionContainer">
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Change Password</div>
                            </div>
                            <div className="sectionOptionContent" style={{display:"none"}} >
                                <div className="preferenceOption">Security</div>
                            </div>
                            <div className="sectionOptionContent" style={{ display: "none" }} >
                                <div className="preferenceOption">Sign out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}