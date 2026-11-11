import { useState } from 'react'
import Menu from './Menu'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import Budgets from './Budgets'
import Categories from './Categories'
import Settings from './Settings'

function MainLayout() {
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

export default MainLayout