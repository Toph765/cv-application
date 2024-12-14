function EdExp() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="schoolName">School name:</label>
          <input id="schoolName" type="text" />        
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <input id="program" type="text" />        
        </div>
        <div>
          <label htmlFor="graduation">Date graduated:</label>
          <input id="gradutaion" type="date" />        
        </div>
        <button>edit</button>      
        <button>submit</button>      
      </form> 
    </>
  )
}

export default EdExp;