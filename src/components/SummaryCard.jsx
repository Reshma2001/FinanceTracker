import "./SummaryCard.css"

export default function SummaryCard({ summaryData }) {
    return (
        <>
            <div className="summaryCard">
                <div className="summaryType">{summaryData.type}</div>
                <div className="summaryAmount">₹{summaryData.amount}</div>
            </div>
        </>
    )
}