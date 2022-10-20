
const leftfilter = () => {

  return (
    <>

        <div className="filterArea">
            <div className="inputRow">
              <label>Type of Laon</label>
              <select className="form-select" aria-label="Type of loan ">
                <option defaultValue>Type of loan</option>
                <option value='3'>Home Loan</option>
              </select>
            </div>
            <div className="inputRow">
              <label>Profession Type</label>
              <select className="form-select" aria-label="Type of loan ">
              <option defaultValue>Profession Type</option>
                <option value="1">Salaried</option>
                <option value="2">Self employed</option>
              </select>
            </div>
            <div className="inputRow">
              <label>Pincode</label>
              <input type="text" />
            </div>
            <button className="applyBtn" title="Apply Filter">Apply Filter</button>
          </div>

    </>

  )
}

export default leftfilter