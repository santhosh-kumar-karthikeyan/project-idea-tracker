import "./Idea.css";

function Idea({ideaImg, ideaTitle, ideaDomain, ideaDescription, ideaStartDate, ideaEndDate,ideaFinished}) {
    return (
        <main className="idea-container">
            <img src={ideaImg.src} alt={ideaImg.alt} />
            <section>
                <small id='idea-domain'>{ideaDomain}</small>
                <h3 id="idea-title">{ideaTitle}</h3>
                <p id="idea-description">{ideaDescription}</p>
                <small id="idea-period">{ideaStartDate} to {ideaEndDate}</small>
                <section className="finished">
                    <input type="checkbox" name="finished" id="mark-as-finished" checked={ideaFinished} />Finished
                </section>

            </section>
        </main>
    )
}

export default Idea;