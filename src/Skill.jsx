import { useState } from "react";

function Skill() {
  const [skills, setSkills] = useState([{
    id: 0,
    skill: '',
  }]);
    
  return (
    <>
      <form>
        <div>
          <label>
            {skills.map((item) => {
              return (
                <div key={item.id}>
                  <input name="skill" type="text" onChange={(e) => handleInputChange(e, item.id)} />
                  {skills.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, item.id)}>X</button>)}
                </div>
              )})}
          </label>
          <button onClick={handleAddBtn}>add</button>        
        </div>
      </form>
    </>
  )}