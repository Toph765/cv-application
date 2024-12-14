function GenInfo() {
  return (
      <>
          <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email" />
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <input id="phone" type="telephone" />
            </div>
            <button>Edit</button>
            <button>Submit</button>  
          </form>
      </>
  )
}

export default GenInfo