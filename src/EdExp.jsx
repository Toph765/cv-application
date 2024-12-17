import { useState } from "react";

function EdExp({callback}) {
  const [edExp, setEdExp] = useState({
    schoolName: '',
    program: '',
    graduation: ''
  })

  const grabData = (e) => {
    e.preventDefault();
    callback(edExp);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="schoolName">School name:</label>
          <input id="schoolName" type="text" onChange={(e) => setEdExp({...edExp, schoolName: e.target.value})} />        
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <input id="program" type="text" onChange={(e) => setEdExp({...edExp, program: e.target.value})} />        
        </div>
        <div>
          <label htmlFor="graduation">Date graduated:</label>
          <input id="gradutaion" type="date" onChange={(e) => setEdExp({...edExp, graduation: e.target.value})} />        
        </div>
        <button>edit</button>      
        <button onClick={grabData}>submit</button>      
      </form> 
    </>
  )
}

export default EdExp;