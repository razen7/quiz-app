import './results.css'
export default function Results({ score, total }) {
    return (
        <div className="results-container">
            <h1>You scored {score} out of {total}.</h1>
            <button onClick={() => window.location.replace(window.location.origin)}>Restart Quiz</button>
        </div>
    )
}
