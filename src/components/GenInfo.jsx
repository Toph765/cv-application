import { useState } from "react";

function GenInfo({ callback }) {
    const [genInfo, setgenInfo] = useState({
        name: '',
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
          <div>Personal Details</div>      
          <form>
            <div>
                <label htmlFor="name">Name:</label>
                  <input id="name" type="text" onChange={e => setgenInfo({ ...genInfo, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email"  onChange={e => setgenInfo({...genInfo, email: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <input id="phone" type="telephone"  onChange={e => setgenInfo({...genInfo, phone: e.target.value})}/>
            </div>
            <button onClick={grabData}>Submit</button>  
          </form>
        </div>  
      </>
  )
}

export default GenInfo;