import { useState } from "react";

function PracExp({callback, isActive, onShow}) {
  const [pracExp, setPracExp] = useState([{
    id: 1,
    companyName: 'Some Company',
    position: 'Web Designer',
    from: '2024-05',
    to: '2025-07',
    responsibilities: [{
      id: 0,
      task: 'Build mock designs and wireframes for landing pages for 6 new product concepts.',
    },
    {
      id: 1,
      task: 'Created accessible, responsive, and functional user interfaces to allow visitors on any device to have the same user experience.',
    },
    {
      id: 2,
      task: 'Creatd the user experience that fetched, parsed, and formatted nalytice data and relayed it into React components.',
    }],
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

  const handleInputChange = (e, id, expId) => {
    const { name, value } = e.target;
    const temp = [...pracExp];
    const obj = temp.filter(item => item.id === expId)[0];
    const list = [...obj.responsibilities];
    list.filter(task => task.id === id)[0][name] = value;
    temp.filter(item => item.id === expId)[0].responsibilities = list;
    setPracExp(temp);
  }

  const handleAddExp = (e) => {
    e.preventDefault();
    const newList = [...pracExp, {
      id: pracExp[pracExp.length-1].id + 1,
      companyName: '',
      position: '',
      from: '',
      to: '',
      responsibilities: [{
        id: 0,
        task: '',
      }]
    }];
    setPracExp(newList);
  }
  
  const handleAddInput = (e, expId) => {
    e.preventDefault();
    const temp = [...pracExp];
    const obj = temp.filter(item => item.id === expId)[0];
    const list = [...obj.responsibilities, {
      id: (obj.responsibilities.length > 0 ? obj.responsibilities[obj.responsibilities.length - 1].id + 1 : 0),
      task: '',
    }];
    temp.filter(item => item.id === expId)[0].responsibilities = list;
    setPracExp(temp);
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

  const handleRespRemoveBtn = (e, id, expId) => {
    e.preventDefault();
    const temp = [...pracExp];
    const obj = temp.filter(item => item.id === expId)[0];
    const list = [...obj.responsibilities];
    const index = list.findIndex((item) => {
      return item.id === id;
    });
    list.splice(index, 1);
    temp.filter(item => item.id === expId)[0].responsibilities = list;
    setPracExp(temp);
  }

    return (
      <>
        <div className="form-container">
          <h2>Experience</h2>
          {isActive ? (
          <form>
            {pracExp.map((exp) => {
              return (
                <div key={exp.id} className="form-block">
                  <div>
                    <label>
                      Company name:
                      <input name="companyName" value={exp.companyName} type="text" onChange={(e) => handleChange(e, exp.id)} />
                    </label>
                  </div>
                  <div>
                    <label>
                    Position title:
                    <input name="position" value={exp.position} type="text" onChange={(e) => handleChange(e, exp.id)} />     
                    </label>    
                  </div>
                  <div>
                    <label>
                      From:
                      <input name="from" value={exp.from} type="month" onChange={(e) => handleChange(e, exp.id)} />
                    </label>     
                  </div>
                  <div>
                    <label>
                      To:
                      <input name="to" value={exp.to} type="month" onChange={(e) => handleChange(e, exp.id)} />
                    </label>      
                  </div>
                  <div className="form-block">
                    <div>Responsibilities:</div>
                    {exp.responsibilities.map((duty) => {
                      return (
                        <div key={duty.id}>
                          <div className="resp-form">
                            <input type="text" name="task"
                              value={duty.task}
                              onChange={e => handleInputChange(e, duty.id, exp.id)} />
                            <button onClick={(e) => handleRespRemoveBtn(e, duty.id, exp.id)} className="red">x</button>
                          </div>
                        </div>
                      )})}
                    <button onClick={(e) => handleAddInput(e, exp.id)} className="green">+</button>
                  </div>
                  {pracExp.length > 1 && (<button onClick={(e) => handleRemoveBtn(e, exp.id)} className="red">remove</button>)}
                </div>
              )
            })}
            <button onClick={handleAddExp} className="green">add</button>
            <button onClick={grabData} type="submit" className="green">Save</button>
            </form>  
          ) : (
              <button onClick={onShow} className="green">Show</button>
          )} 
        </div>   
      </>
  )
}

export default PracExp;