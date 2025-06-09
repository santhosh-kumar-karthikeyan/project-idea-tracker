import "./App.css";
import Header from "./components/Header/Header";
import Idea from "./components/Idea/Idea";
import ideas from "./models/ideas";
function App() {
  const ideaArray = ideas.map(({ideaImg, ideaTitle, ideaDomain, ideaDescription, ideaStartDate, ideaEndDate, ideaFinished}) => {
          return <Idea 
            ideaImg = {ideaImg}
            ideaTitle = {ideaTitle}
            ideaDescription={ideaDescription}
            ideaDomain={ideaDomain}
            ideaStartDate={ideaStartDate}
            ideaEndDate={ideaEndDate}
            ideaFinished={ideaFinished}
          />
        })
  return (
    <>
      <Header/>
      <article id="whole-main">
        {ideaArray}
      </article>
    </>
  )
}

export default App;