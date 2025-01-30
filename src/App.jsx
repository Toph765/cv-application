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

function App() {
  const [genInfo, setGenInfo] = useState(null);
  const [edExp, setEdExp] = useState(null);
  const [pracExp, setPracExp] = useState(null);
  const [skills, setSkills] = useState(null);

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
      <div>
        <GenInfo callback={grabGenInfo} />
        <EdExp callback={grabEdExp} />
        <PracExp callback={grabPracExp} />
        <Skill callback={grabSkills} />
      </div>
      <div className='cv-container'>
          <ShowGenInfo obj={genInfo} />
          <div>
            <div>Education</div>
            <ShowEdExp data={edExp} />
          </div>
          <div>
            <div>Experience</div>
            <ShowPracExp data={pracExp} />
          </div>
          <div>
            <div>Skills</div>
            <ShowSkills data={skills}/>
          </div>
      </div>  
    </main>
    </>
  )
}

export default App;
