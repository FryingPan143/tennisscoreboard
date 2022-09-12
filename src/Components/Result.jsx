
export default function Result() {
    function reload() {
        window.location.reload(false)
    }

    return (
        <section className="result">
            <h3 className="winner"></h3>
            <p className="restart" onClick={() => reload()}> Play again</p>
        </section>
    )
}