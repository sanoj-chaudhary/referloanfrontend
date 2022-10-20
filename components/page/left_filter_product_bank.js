
const leftfilter = () => {

  return (
    <>

        <div class="filterArea">
            <div class="inputRow">
              <label for="">Type of Laon</label>
              <select class="form-select" aria-label="Type of loan ">
                <option selected>Type of loan</option>
                <option value='3'>Home Loan</option>
              </select>
            </div>
            <div class="inputRow">
              <label for="">Profession Type</label>
              <select class="form-select" aria-label="Type of loan ">
              <option selected>Profession Type</option>
                <option value="1">Salaried</option>
                <option value="2">Self employed</option>
              </select>
            </div>
            <div class="inputRow">
              <label for="">Pincode</label>
              <input type="text" />
            </div>
            <button class="applyBtn" title="Apply Filter">Apply Filter</button>
          </div>

    </>

  )
}

export default leftfilter