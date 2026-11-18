import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import userData from "../../data/userData";
import { useAuth } from "../context/useAuth.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");    

    function handleLogin(event) {
        event.preventDefault();

        const user = userData.find(
            (item) =>
                item.userName === username.trim() &&
                item.password === password
        );

        if (!user) {
            setErrorMessage(
                "Invalid credentials. Use one of the demo accounts below."
            );
            return;
        }

        login({
            userName: user.userName,
        });

        navigate("/dashboard", { replace: true });
    }

    return (
        <main className="loginContainer">
            <form className="loginContent" onSubmit={handleLogin}>
                <div className="loginLbl">LOGIN</div>

                <div className="loginSubtitle">
                    Use a demo account to access Finance Tracker.
                </div>

                <div className="demoCredentials" aria-label="Demo credentials">
                    <div className="demoCredentialsTitle">
                        Demo credentials
                    </div>

                    {userData.map((user) => (
                        <div
                            className="demoCredentialRow"
                            key={user.userName}
                        >
                            <span>
                                <strong>Username:</strong> {user.userName}
                            </span>
                            <span>
                                <strong>Password:</strong> {user.password}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="inputContainer">
                    <div className="nameContainer">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter the username"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                                setErrorMessage("");
                            }}
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="pwdContainer">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter the password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setErrorMessage("");
                            }}
                            autoComplete="current-password"
                            required
                        />
                    </div>
                </div>

                {errorMessage && (
                    <div className="loginError" role="alert">
                        {errorMessage}
                    </div>
                )}

                <button type="submit">Login</button>
            </form>
        </main>
    );
}