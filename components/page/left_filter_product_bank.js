
const leftfilter = ({content,ProductByCat}) => {

const handleChange=()=>{
  
}
console.log(ProductByCat)
  return (
    <>

        <div className="filterArea">
            <div className="inputRow">
              <label>Type of Loan</label>
              {/* {ProductByCat.map((item,key) => (
                <div>{item.name}</div>
              ))} */}
              <select className="form-select" aria-label="Type of loan " onChange={handleChange}>
                <option defaultValue>Type of loan</option>
                <option value='3'>Home Loan</option>
              </select>
            </div>
            <div className="inputRow">
              <label>Profession Type</label>
              <select className="form-select" name="employemnt_type" aria-label="Type of loan " onChange={handleChange} required>
                  <option defaultValue value=''>Profession Type </option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self employed">Self employed</option>
              </select>
            </div>
            <div className="inputRow">
              <label>Salary</label>
              <input type="text" value={content.salary} onChange={handleChange} />
            </div>
            <div className="inputRow">
              <label>Pincode</label>
              <input type="text" value={content.pincode} onChange={handleChange} />
            </div>
            <div className="inputRow">
              <label>Interest</label>
              <input type="text" placeholder="min" value="" onChange={handleChange} /> <input type="text" placeholder="max" value="" onChange={handleChange} />
            </div>
            <button className="applyBtn" title="Apply Filter">Apply Filter</button>
          </div>

    </>

  )
}

export default leftfilter