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
  const [genInfo, setGenInfo] = useState({
      name: 'John Doe',
      address: 'Legazpi City, Albay',
      email: 'johnDoe@gmail.com',
      phone: '123-4567-890'
  });
  
  const [edExp, setEdExp] = useState([{
    id: 0,
    schoolName: 'Bicol University',
    program: 'Computer Science',
    from: '2014-06',
    to: '2018-04',
    achievements: [{
      id: 0,
      text: 'Magna cumlaude',
    }],
  }]);

  const [pracExp, setPracExp] = useState([{
    id: 1,
    companyName: 'Some Company',
    position: 'Software Developer',
    from: '2024-05',
    to: '2025-07',
    responsibilities: [{
      id: 0,
      task: 'Make coffee.',
    },
    {
      id: 1,
      task: 'Write code.',
    }],
  }]);

  const [skills, setSkills] = useState([{
    id: 0,
    skill: 'javascript, html, css',
  },
  {
    id: 1,
  skill: 'Team player'  
  }]);

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
        <div>    
          <ShowGenInfo obj={genInfo} />
            <hr />
        </div>
          <div>
            <h3>Education</h3>
            <hr />
            <ShowEdExp data={edExp} />
          </div>
          <div>
            <h3>Experience</h3>
            <hr />
            <ShowPracExp data={pracExp} />
          </div>
          <div>
            <h3>Skills</h3>
            <hr />
            <ShowSkills data={skills}/>
          </div>
      </div>  
    </main>
    </>
  )
}

export default App;
