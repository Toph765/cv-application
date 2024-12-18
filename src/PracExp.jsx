import { useState } from "react";

function PracExp({callback}) {
  const [pracExp, setPracExp] = useState({
    companyName: '',
    position: '',
    responsibilities: [],
    from: '',
    to: '',
  })
  
  const [resp, setResp] = useState({
    id: 0,
    resp: '',
  });

  const grabData = (e) => {
    e.preventDefault();
    callback(pracExp);
  }

  const addResp = (e) => {
    e.preventDefault();
    pracExp.responsibilities.push(resp);
    setResp({ ...resp, id: resp.id + 1 });
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
              <fieldset>
              <label htmlFor="responsibilities">Responsibilities:</label>        
              <input id="responsibilities" type="text" onChange={(e) => setResp({...resp, resp: e.target.value })} />      
                <button onClick={addResp}>add</button>
              </fieldset>
            </div>
            <div>
              <input type="date" onChange={(e) => setPracExp({...pracExp, from: e.target.value})} />     
              <input type="date" onChange={(e) => setPracExp({...pracExp, to: e.target.value})}/>      
            </div>
            <button>edit</button>    
            <button onClick={grabData} type="submit">submit</button>    
          </form>      
      </>
  )
}

export default PracExp;