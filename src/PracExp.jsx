import { useState } from "react";

function Resp() {
  const [resp, setResp] = useState([{
    id: 0,
    responsibilities: '',
  }]);

  const handleAddInput = (e) => {
    e.preventDefault();
    const list = [...resp, {
    id: resp[resp.length - 1].id + 1,
    responsibilities: '',
  }];
    setResp(list);
  }

  console.log(resp);

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const list = [...resp];
    list.filter(resp => resp.id === id)[0][name] = value;
    setResp(list);
  }

  const handleRemoveBtn = (e, id) => {
    e.preventDefault();
    const list = [...resp];
    const index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    setResp(list);
  }

  return (
    <div>
      <div>Responsibilities:</div>
      {resp.map((duty) => {
        return (
          <div key={duty.id}>
            <div>
            <label>
              <input type="text" name="responsibilities"
                value={duty.responsibilities}
                onChange={e => handleInputChange(e, duty.id)} />
            </label>
              {resp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, duty.id)}>x</button>)}
              
            </div>
          </div>
      )
    })}
      <button onClick={handleAddInput}>add</button>
    </div>
  )
}

function PracExp({callback}) {
  const [pracExp, setPracExp] = useState([{
    id: 1,
    companyName: '',
    position: '',
    from: '',
    to: '',
  }])

  const grabData = (e) => {
    e.preventDefault();
    callback(pracExp);
  }

  const handleChange = (e, dataId) => {
    const { name, value } = e.target;
    const list = [...pracExp];
    list.filter(exp => exp.id === dataId)[0][name] = value;
    setPracExp(list);
  }

  const handleAddExp = (e) => {
    e.preventDefault();
    const newList = [...pracExp, {
      companyName: '',
      position: '',
      from: '',
      to: '',
      id: pracExp[pracExp.length-1].id + 1,
    }];
    setPracExp(newList);
  }

  const handleRemoveBtn = (e, id) => {
    e.preventDefault();
    const list = [...pracExp];
    const index = list.findIndex((item) => {
      return item.id === id;
    })
    list.splice(index, 1);
    setPracExp(list);
  }

    return (
      <>
        <form>
          {pracExp.map((exp) => {
            return (
              <div key={exp.id}>
                <div>
                  <label>
                    Company name:
                    <input name="companyName" type="text" onChange={(e) => handleChange(e, exp.id)} />
                  </label>
                </div>
                <div>
                  <label>
                  Position title:
                  <input name="position" type="text" onChange={(e) => handleChange(e, exp.id)} />     
                  </label>    
                </div>
                <div>
                <input type="date" onChange={(e) => handleChange(e, exp.id)} />     
                <input type="date" onChange={(e) => handleChange(e, exp.id)} />      
                </div>
                <Resp />
                <button>edit</button>    
                <button onClick={grabData} type="submit">submit</button>
                {pracExp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, exp.id)}>remove</button>)}
              </div>
            )
          })}
          <button onClick={handleAddExp}>add</button>
          </form>      
      </>
  )
}

export default PracExp;