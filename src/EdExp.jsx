import { useState } from "react";

function EdExp({callback}) {
  const [edExp, setEdExp] = useState([{
    id: 0,
    schoolName: '',
    program: '',
    graduation: ''
  }])

  const grabData = (e) => {
    e.preventDefault();
    callback(edExp);
  }

  return (
    <>
      <form>
        {edExp.map((exp) => {
          return (
          <div key={exp.id}>
            <div>
                <label>
                  School name:
              <input name="schoolName" type="text" onChange={(e) => setEdExp({...edExp, schoolName: e.target.value})} />        
              </label>
              </div>
            
            <div>
              <label>
                Program:
                <input id="program" type="text" onChange={(e) => setEdExp({...edExp, program: e.target.value})} />        
              </label>
            </div>
            <div>
              <label>
                Date graduated:
                <input id="gradutaion" type="date" onChange={(e) => setEdExp({...edExp, graduation: e.target.value})} />        
              </label>
              </div>
            <button>edit</button>      
            <button onClick={grabData}>submit</button>      
          </div>
          )
        })}
        <button>add</button>
      </form> 
    </>
  )
}

export default EdExp;