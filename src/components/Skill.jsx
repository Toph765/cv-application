import { useState } from "react";

function Skill({callback, isActive, onShow}) {
  const [skills, setSkills] = useState([{
    id: 0,
    skill: 'JavaScript',
  },
  {
    id: 1,
    skill: 'HTML'  
  },
  {
    id: 2,
    skill: 'CSS'  
  },
  {
    id: 3,
    skill: 'React.js'  
  }]);
    
  const handleInputChange = (e, id) => {
    const { name, value } = e.target; 
    const list = [...skills];
    list.filter(item => item.id === id)[0][name] = value;
    setSkills(list);  
  }
    
  const handleAddBtn = (e) => {
    e.preventDefault();
    const newList = [...skills, {
      id: skills[skills.length - 1].id + 1,
      skill: '',
    }];
    setSkills(newList);
  }
    
  const handleRemoveBtn = (e, id) => {
    e.preventDefault();
    const list = [...skills];  
    const index = list.findIndex(item => {
      return item.id === id;
    });
    list.splice(index, 1);  
    setSkills(list);
  }
    
  const grabData = (e) => {
    e.preventDefault();
    callback(skills);
  }
    
  return (
    <>
      <div className="form-container">
        <h2>Skills</h2>
        {isActive ? (
          <form>
            <div className="form-block">
                {skills.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="skill-form">
                        <input
                            value={item.skill}    
                            name="skill"
                            type="text"
                            onChange={(e) => handleInputChange(e, item.id)} />
                        {skills.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, item.id)}>X</button>)}
                      </div>
                    </div>
                  )})}
              <button onClick={handleAddBtn}>add</button>
              <button onClick={grabData}>Save</button>        
            </div>
          </form>
        ) : (
            <button onClick={onShow}>Show</button>
        )}
      </div>
    </>
  )}

export default Skill;