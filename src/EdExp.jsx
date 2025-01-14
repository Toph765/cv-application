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

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const list = [...edExp];
    list.filter((item) => item.id === id)[0][name] = value;
    setEdExp(list);
  }

  const handleAddbtn = (e) => {
    e.preventDefault();
    const newList = [...edExp, {
      id: edExp[edExp.length - 1].id + 1,
      schoolName: '',
      program: '',
      graduation: '',
    }];
    setEdExp(newList);
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
              <input name="schoolName" type="text" onChange={(e) => handleInputChange(e, exp.id)} />        
              </label>
              </div>
            
            <div>
              <label>
                Program:
                <input name="program" type="text" onChange={(e) => handleInputChange(e, exp.id)} />        
              </label>
            </div>
            <div>
              <label>
                Date graduated:
                <input name="gradutaion" type="date" onChange={(e) => handleInputChange(e, exp.id)} />        
              </label>
              </div>
            <button>edit</button>      
            <button onClick={grabData}>submit</button>      
          </div>
          )
        })}
        <button onClick={handleAddbtn}>add</button>
      </form> 
    </>
  )
}

export default EdExp;