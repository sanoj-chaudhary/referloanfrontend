
import FormElement from './formElement';
const eligilityForm = ({ loanProduct, creditProduct }) => {


  return (
    <>
      <div className="header-form-area">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan" data-id="2" defaultValue="2"
              type="button" role="tab" aria-selected="true">Loan</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#creditCard" data-id="1" defaultValue="1" 
              type="button" role="tab" aria-selected="false">Credit
              Card</button>
          </li>

          {/* onClick={setSearchData({cat_id:1})} */}

        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
           <FormElement data={loanProduct} />
          </div>

          {/* Credit card search form */}
          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">
          <FormElement data={creditProduct} />
          </div>
        </div>
      </div>
    </>
  )
}

export default eligilityForm