import { useState } from "react";

function EdExp({callback, isActive, onShow}) {
  const [edExp, setEdExp] = useState([{
    id: 0,
    schoolName: 'Bicol University',
    program: 'Computer Science',
    graduation: '2018-04'
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

  const handleRemoveBtn = (e, id) => {
    e.preventDefault();
    const list = [...edExp];
    const index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    setEdExp(list);
  }

  return (
    <>
      <div className="form-container">
        <h2>Education</h2>
        {isActive ? (
          <form>
            {edExp.map((exp) => {
              return (
              <div key={exp.id} className="form-block">
                <div>
                    <label>
                      School name:
                  <input name="schoolName"  value={exp.schoolName} type="text" onChange={(e) => handleInputChange(e, exp.id)} />        
                  </label>
                  </div>
                
                <div>
                  <label>
                    Program:
                    <input name="program"  value={exp.program} type="text" onChange={(e) => handleInputChange(e, exp.id)} />        
                  </label>
                </div>
                <div>
                  <label>
                    Date graduated:
                    <input name="graduation" value={exp.graduation} type="month" onChange={(e) => handleInputChange(e, exp.id)} />        
                  </label>
                  </div>   
                {edExp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, exp.id)}>remove</button>)}
              </div>
              )
            })}
            <button onClick={handleAddbtn}>+</button>
            <button onClick={grabData}>Save</button>
          </form> 
        ) : (
            <button onClick={onShow}>Show</button>
        )}
      </div>
    </>
  )
}

export default EdExp;