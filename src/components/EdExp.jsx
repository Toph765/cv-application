import { useState } from "react";

function EdExp({callback, isActive, onShow}) {
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

  const handleAchInputChange = (e, id, expId) => {
    const { name, value } = e.target;
    const temp = [...edExp];
    const obj = temp.filter(item => item.id === expId)[0];
    const list = [...obj.achievements];
    list.filter(notes => notes.id === id)[0][name] = value;
    temp.filter(item => item.id === expId)[0].achievements = list;
    setEdExp(temp);
  }

  const handleAddbtn = (e) => {
    e.preventDefault();
    const newList = [...edExp, {
      id: edExp[edExp.length - 1].id + 1,
      schoolName: '',
      program: '',
      from: '',
      to: '',
      achievements: [{
        id: 0,
        text: '',
      }]
    }];
    setEdExp(newList);
  }

  const handleAddInput = (e, id) => {
    e.preventDefault();
    const temp = [...edExp];
    const obj = temp.filter(item => item.id === id)[0];
    const list = [...obj.achievements, {
      id: (obj.achievements.length > 0 ? obj.achievements[obj.achievements.length - 1].id + 1 : 0),
      text: '',
    }];
    temp.filter(item => item.id === id)[0].achievements = list;
    setEdExp(temp);
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

  const handleAchRemoveBtn = (e, id, expId) => {
    e.preventDefault();
    const temp = [...edExp];
    const obj = temp.filter(item => item.id === expId)[0];
    const list = [...obj.achievements]
    const index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    temp.filter(item => item.id === expId)[0].achievements = list;
    setEdExp(temp);
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
                    From:    
                    <input name="from" value={exp.from} type="month" onChange={(e) => handleInputChange(e, exp.id)} />        
                  </label>
                </div>  
                <div>
                  <label>
                    To:
                    <input name="to" value={exp.to} type="month" onChange={(e) => handleInputChange(e, exp.id)} />        
                  </label>
                </div>
                <div className="form-block">
                    <div>Achievements:</div>
                      {exp.achievements.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="notes-form">
                              <input type="text" name="text"
                                value={item.text}
                                onChange={e => handleAchInputChange(e, item.id, exp.id)} />
                              <button onClick={(e) => handleAchRemoveBtn(e, item.id, exp.id)}>x</button>
                            </div>
                          </div>
                        )
                      })}
                    <button onClick={(e) => handleAddInput(e, exp.id)}>+</button>
                </div>
                {edExp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, exp.id)}>remove</button>)}
              </div>
              )
            })}
            <button onClick={handleAddbtn}>Add</button>
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
