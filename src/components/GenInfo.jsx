import { useState } from "react";

function GenInfo({ callback, isActive, onShow }) {
    const [genInfo, setgenInfo] = useState({
      name: '',
      address: '',
      email: '',
      phone: ''
    });

    const grabData = (e) => {
        e.preventDefault();
        callback(genInfo);
    }

  return (
      <>
        <div className="form-container">
          <h2>Personal Details</h2>   
          {isActive ? (
          <form>
            <div>
              <label>
                Name:
                <input name="name" type="text" onChange={e => setgenInfo({ ...genInfo, name: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                Address:
                <input name="address" type="text" onChange={e => setgenInfo({ ...genInfo, address: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                E-mail:
                <input name="email" type="email" onChange={e => setgenInfo({ ...genInfo, email: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                Phone number:
                <input name="phone" type="telephone" onChange={e => setgenInfo({ ...genInfo, phone: e.target.value })} />
              </label>
            </div>
            <button onClick={grabData}>Submit</button>  
          </form>
          ) : (
            <button onClick={onShow}>Show</button>
          )}
        </div>  
      </>
  )
}

export default GenInfo;