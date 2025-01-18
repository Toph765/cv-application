import { useState } from "react";

function Skill() {
  const [skills, setSkills] = useState([{
    id: 0,
    skill: '',
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
    
  return (
    <>
      <form>
        <div>
          <label>
            Skills: 
            {skills.map((item) => {
              return (
                <div key={item.id}>
                  <input
                      value={item.skill}    
                      name="skill"
                      type="text"
                      onChange={(e) => handleInputChange(e, item.id)} />
                  {skills.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, item.id)}>X</button>)}
                </div>
              )})}
          </label>
          <button onClick={handleAddBtn}>add</button>
          <button>Submit</button>        
        </div>
      </form>
    </>
  )}

export default Skill;