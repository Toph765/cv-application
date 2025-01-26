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
        <div>
          <div>Education</div>
          <EdExp callback={grabEdExp} />
        </div>  
        <div>
          <div>Experience</div>
          <PracExp callback={grabPracExp} />
        </div>  
        <div>
          <div>Skills</div>
          <Skill callback={grabSkills} />
        </div>  
      </div>
      <div>
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
