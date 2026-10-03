import "./SummaryCard.css"

export default function SummaryCard({ summaryTitle, summaryAmount }) {
    return (
        <>
            <div className="summaryCard">
                <div className="summaryType">{summaryTitle}</div>
                <div className="summaryAmount">₹{summaryAmount}</div>
            </div>
        </>
    )
}