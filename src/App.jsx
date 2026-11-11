import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Login from './components/Login';
import MainLayout from "./components/MainLayput";


function App() {      
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/dashboard" element={<MainLayout />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
