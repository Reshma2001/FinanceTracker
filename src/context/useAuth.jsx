import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({children}){
    const [user, setUser] = useState(() => {
        const storedData = sessionStorage.getItem("loggedInUser");
        return storedData ? JSON.parse(storedData) : null;
    });

    const login = (userData) => {
        setUser(userData);
        sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("loggedInUser");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}