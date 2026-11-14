import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"
import userData from "../../data/userData";
import { useAuth } from "../context/useAuth.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = userData.find((item) =>
                item.userName === username &&
                item.password === password
        );

        if (user) {
            login({
                userName: user.userName,
            })
        }

        const isValidUser = !!user;

        if (isValidUser)
            navigate("/dashboard", { replace: true });
    };

    return (
        <main className="loginContainer">
            <div className="loginContent">
                <div className="loginLbl">LOGIN</div>
                <div className="inputContainer">
                    <div className="nameContainer">
                        <div htmlFor="username">UserName</div>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Enter the username" />
                    </div>
                    <div className="pwdContainer">
                        <div htmlFor="password">Password</div>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter the password" />
                    </div>
                </div>
                <button className="" onClick={handleLogin}>Login</button>
            </div>
        </main>
    )
}