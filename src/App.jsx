import { useState } from 'react'
import './App.css'
import GenInfo from './components/GenInfo'
import EdExp from './components/EdExp'
import PracExp from './components/PracExp'
import Skill from './components/Skill'
import ShowGenInfo from './components/ShowGenInfo'
import ShowEdExp from './components/ShowEdExp'
import ShowPracExp from './components/ShowPracExp'
import ShowSkills from './components/ShowSkills'
import { use } from 'react'

function App() {
  const [genInfo, setGenInfo] = useState(null);
  const [edExp, setEdExp] = useState(null);
  const [pracExp, setPracExp] = useState(null);
  const [skills, setSkills] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const grabGenInfo = (data) => {
    console.log(data);
    setGenInfo(data);
  }

  const grabEdExp = (data) => {
    console.log(data);
    setEdExp(data);
  }

  const grabPracExp = (data) => {
    console.log(data);
    setPracExp(data);
  }

  const grabSkills = (data) => {
    console.log(data);
    setSkills(data);
  }

  return (
    <>
      <main>
      <section className='section-container'>
        <h1>CV-Maker</h1>
        <GenInfo callback={grabGenInfo} isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}/>
        <EdExp callback={grabEdExp}  isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}/>
        <PracExp callback={grabPracExp}  isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}/>
        <Skill callback={grabSkills}  isActive={activeIndex === 3} onShow={() => setActiveIndex(3)}/>
      </section>
      <div className='cv-container'>
          <ShowGenInfo obj={genInfo} />
          <hr />
          <div>
            <div>Education</div>
            <hr />
            <ShowEdExp data={edExp} />
          </div>
          <div>
            <div>Experience</div>
            <hr />
            <ShowPracExp data={pracExp} />
          </div>
          <div>
            <div>Skills</div>
            <hr />
            <ShowSkills data={skills}/>
          </div>
      </div>  
    </main>
    </>
  )
}

export default App;
