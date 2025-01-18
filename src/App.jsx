import { useState } from 'react'
import './App.css'
import GenInfo from './GenInfo'
import EdExp from './EdExp'
import PracExp from './PracExp'
import Skill from './Skill'

function App() {
  let genInfo, edExp, pracExp;

  const grabGenInfo = (data) => {
    console.log(data);
    return genInfo = data;
  }

  const grabEdExp = (data) => {
    console.log(data);
    return edExp = data;
  }

  const grabPracExp = (data) => {
    console.log(data);
    return pracExp = data;
  }

  return (
    <>
      <GenInfo callback={grabGenInfo} />
      <EdExp callback={grabEdExp} />
      <PracExp callback={grabPracExp} />
      <Skill/>
    </>
  )
}

export default App;
