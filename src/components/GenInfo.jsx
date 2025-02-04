import { useState } from "react";

function GenInfo({ callback, isActive, onShow }) {
    const [genInfo, setgenInfo] = useState({
      name: 'John Doe',
      address: 'Legazpi City',
      email: 'johnDoe@gmail.com',
      phone: '123-4567-890'
    });

    const grabData = (e) => {
        e.preventDefault();
        callback(genInfo);
    }

  return (
      <>
        <div className={"form-container"}>
          <h2>Personal Details</h2>   
          {isActive ? (
          <form className="form-block">
            <div>
              <label>
                Name:
                <input name="name" value={genInfo.name} type="text" onChange={e => setgenInfo({ ...genInfo, name: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                Address:
                <input name="address" value={genInfo.address} type="text" onChange={e => setgenInfo({ ...genInfo, address: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                E-mail:
                <input name="email"  value={genInfo.email} type="email" onChange={e => setgenInfo({ ...genInfo, email: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                Phone number:
                <input name="phone"  value={genInfo.phone} type="telephone" onChange={e => setgenInfo({ ...genInfo, phone: e.target.value })} />
              </label>
            </div>
            <button onClick={grabData}>Save</button>  
          </form>
          ) : (
            <button onClick={onShow}>Show</button>
          )}
        </div>  
      </>
  )
}

export default GenInfo;