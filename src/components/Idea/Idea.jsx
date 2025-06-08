import "./Idea.css";

function Idea() {
    return (
        <main className="idea-container">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Idea image" />
            <section>
                <small id='idea-domain'>Web development</small>
                <h3 id="idea-title">DSA Visualiser</h3>
                <p id="idea-description">A GUI based DSA visualiser that can be used to visualise operations with common Data Structures and working of common algorithms. </p>
                <section id="idea-period">
                    <small>Start date: </small>
                </section>
            </section>
        </main>
    )
}

export default Idea;