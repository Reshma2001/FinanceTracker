import "./Settings.css"

export default function Settings() {
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
                            <div className="sectionOptionContent userName">Reshma</div>
                            <div className="sectionOptionContent">reshma@gmail.com</div>
                        </div>
                    </div>
                    <div className="sectionBlock">
                        <div className="sectionTitle">Preferences</div>
                        <div className="sectionOptionContainer">
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Appearance</div>
                                <select value="Light" >
                                    <option value="Light" name="appearance">Light</option>
                                    <option value="Dark" name="appearance">Dark</option>
                                </select>
                            </div>
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Currency</div>
                                <select value="INR" >
                                    <option value="INR" name="currency">INR</option>
                                    <option value="Dollar" name="currency">Dollar</option>
                                </select>
                            </div>
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Notifiacation</div>
                                <select value="On" >
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
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Security</div>
                            </div>
                            <div className="sectionOptionContent">
                                <div className="preferenceOption">Sign out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}