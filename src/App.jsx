import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Budgets from './components/Budgets'
import Categories from './components/Categories'
import Settings from './components/Settings'

function App() {
    const [sectionName, setSectionName] = useState("Dashboard");

    let ActiveSection = () => {
        switch (sectionName) {
            case "Dashboard":
                return <Dashboard />;
            case "Transaction":
                return <Transaction />;
            case "Budgets":
                return <Budgets />;
            case "Categories":
                return <Categories />;
            default:
                return <Settings />
        };
    }    

    return (
        <>
            <main>
                <Menu setSectionName={setSectionName} />
                {ActiveSection()}
            </main>
        </>
    )
}

export default App
