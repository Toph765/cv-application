import { useState } from "react";

function Resp({obj, func}) {
  const [resp, setResp] = useState([{
    id: 0,
    responsibilities: '',
  }]);

  const handleFunc = (data) => {
    obj.responsibilities = data;
    func(obj);
  }

  const handleAddInput = (e) => {
    e.preventDefault();
    const list = [...resp, {
    id: resp[resp.length - 1].id + 1,
    responsibilities: '',
  }];
    setResp(list);
  }

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const list = [...resp];
    list.filter(resp => resp.id === id)[0][name] = value;
    setResp(list);
    handleFunc(list);
  }

  const handleRemoveBtn = (e, id) => {
    e.preventDefault();
    const list = [...resp];
    const index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    setResp(list);
    handleFunc(list);
  }

  return (
    <div>
      <div>Responsibilities:</div>
      {resp.map((duty) => {
        return (
          <div key={duty.id}>
            <div className="resp-form">
              <input type="text" name="responsibilities"
                value={duty.responsibilities}
                onChange={e => handleInputChange(e, duty.id)} />
              {resp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, duty.id)}>x</button>)}
              
            </div>
          </div>
      )
    })}
      <button onClick={handleAddInput}>add</button>
    </div>
  )
}

function PracExp({callback, isActive, onShow}) {
  const [pracExp, setPracExp] = useState([{
    id: 1,
    companyName: '',
    position: '',
    from: '',
    to: '',
    responsibilities: null,
  }])

  const assignResp = (data) => {
    const list = [...pracExp];
    const index = list.findIndex(item => {
      return item.id === data.id;
    });
    list[index] = data;
    setPracExp(list);
  }

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
        <div className="form-container">
          <h2>Experience</h2>
          {isActive ? (
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
                    <label>
                      From:
                      <input name="from" type="month" onChange={(e) => handleChange(e, exp.id)} />
                    </label>     
                  </div>
                  <div>
                    <label>
                      To:
                      <input name="to" type="month" onChange={(e) => handleChange(e, exp.id)} />
                    </label>      
                  </div>
                  <Resp obj={exp} func={assignResp}/>
                  {pracExp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, exp.id)}>remove</button>)}
                </div>
              )
            })}
            <button onClick={handleAddExp}>+</button>
            <button onClick={grabData} type="submit">Save</button>
            </form>  
          ) : (
              <button onClick={onShow}>Show</button>
          )} 
        </div>   
      </>
  )
}

export default PracExp;