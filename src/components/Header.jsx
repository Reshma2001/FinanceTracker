
import "./Header.css"

export default function Header() {
    return (
        <header>
            <a href="./" className="appTitle">💰 Financial Tracker</a>
            <div className="userInfoContainer">
                <div className="notifyBellIcon">🔔</div>
                <div className="currentUser">👤 Reshma</div>
            </div>
        </header>
    )
}