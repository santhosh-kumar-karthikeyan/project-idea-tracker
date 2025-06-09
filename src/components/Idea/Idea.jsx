import "./Idea.css";

function Idea({ideaImg, ideaTitle, ideaDomain, ideaDescription, ideaStartDate, ideaEndDate}) {
    return (
        <main className="idea-container">
            <img src={ideaImg} alt="Idea image" />
            <section>
                <small id='idea-domain'>{ideaDomain}</small>
                <h3 id="idea-title">{ideaTitle}</h3>
                <p id="idea-description">{ideaDescription}</p>
                <section id="idea-period">
                    <small>{ideaStartDate}</small> - <small>{ideaEndDate}</small>
                </section>
            </section>
        </main>
    )
}

export default Idea;