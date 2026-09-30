import "./Menu.css"

export default function Menu({ onSectionChange }) {
    const menuItems = ["Dashboard", "Transaction", "Budgets", "Categories", "Settings"];

    return (
        <section className="menuSection">
            {menuItems.map(item => <div className="menuitems" key={item} onClick={onSectionChange(item)}>{item}</div>)}
        </section>
    )
}