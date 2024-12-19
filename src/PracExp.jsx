import { useState } from "react";

function PracExp({callback}) {
  const [pracExp, setPracExp] = useState([{
    companyName: '',
    position: '',
    responsibilities: [],
    from: '',
    to: '',
  }])
  
  const [resp, setResp] = useState({
    id: 0,
    resp: '',
  });

  const grabData = (e) => {
    e.preventDefault();
    callback(pracExp);
  }

  const addResp = (e, index) => {
    e.preventDefault();
    const { className } = e.target;
    pracExp[index][className].push(resp)
    setResp({...resp, id: resp.id + 1});
  }

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...pracExp];
    list[index][id] = value;
    setPracExp(list);
  }

  const handleAddExp = (e) => {
    e.preventDefault();
    const newList = [...pracExp, {
      companyName: '',
      position: '',
      responsibilities: [],
      from: '',
      to: '',
    }];
    setPracExp(newList);
  }

    return (
      <>
        <form>
          {pracExp.map((exp, index) => {
            return (
              <div key={index}>
                <div>
                <label htmlFor="companyName">Company name:</label>
                <input id="companyName" type="text" onChange={(e) => handleChange(e, index)} />
                </div>
                <div>
                <label htmlFor="position">Position title:</label>        
                <input id="position" type="text" onChange={(e) => handleChange(e, index)} />      
                </div>
                <div>
                <fieldset>
                <label htmlFor="responsibilities">Responsibilities:</label>        
                <input id="responsibilities" type="text" onChange={(e) => setResp({...resp, resp: e.target.value })} />      
                  <button className="responsibilities" onClick={(e) => addResp(e, index)}>add</button>
                </fieldset>
                </div>
                <div>
                <input type="date" onChange={(e) => handleChange(e, index)} />     
                  <input type="date" onChange={(e) => handleChange(e, index)} />      
                </div>
                <button>edit</button>    
                <button onClick={grabData} type="submit">submit</button>
              </div>
            )
          })}
          <button onClick={handleAddExp}>add</button>
          </form>      
      </>
  )
}

export default PracExp;