function PracExp() {
    return (
      <>
          <form>
            <div>
              <label htmlFor="companyName">Company name:</label>
              <input id="companyName" type="text" />
            </div>
            <div>
              <label htmlFor="position">Position title:</label>        
              <input id="position" type="text" />      
            </div>
            <div>
              <label htmlFor="responsibilities">Responsibilities:</label>        
              <input id="responsibilities" type="text" />      
            </div>
            <div>
              <input type="date" />     
              <input type="date" />      
            </div>
            <button>edit</button>    
            <button>submit</button>    
          </form>      
      </>
  )
}

export default PracExp;