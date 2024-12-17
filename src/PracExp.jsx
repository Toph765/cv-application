import { useState } from "react";

function PracExp({callback}) {
  const [pracExp, setPracExp] = useState({
    companyName: '',
    position: '',
    responsibilities: [],
    from: '',
    to: '',
  })

  const grabData = (e) => {
    e.preventDefault();
    callback(pracExp);
  }

    return (
      <>
          <form>
            <div>
              <label htmlFor="companyName">Company name:</label>
              <input id="companyName" type="text" onChange={(e) => setPracExp({...pracExp, companyName: e.target.value})} />
            </div>
            <div>
              <label htmlFor="position">Position title:</label>        
              <input id="position" type="text" onChange={(e) => setPracExp({...pracExp, position: e.target.value})} />      
            </div>
            <div>
              <label htmlFor="responsibilities">Responsibilities:</label>        
              <input id="responsibilities" type="text" />      
            </div>
            <div>
              <input type="date" onChange={(e) => setPracExp({...pracExp, from: e.target.value})} />     
              <input type="date" onChange={(e) => setPracExp({...pracExp, to: e.target.value})}/>      
            </div>
            <button>edit</button>    
            <button onClick={grabData}>submit</button>    
          </form>      
      </>
  )
}

export default PracExp;