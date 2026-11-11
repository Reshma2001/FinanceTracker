import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Login from './pages/Login';
import MainLayout from "./layouts/MainLayout";


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
