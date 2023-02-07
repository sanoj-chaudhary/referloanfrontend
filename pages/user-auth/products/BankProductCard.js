import React from 'react'

const BankProductCard = ({ data=[] }) => {

  return (
    data.length>0 && data.map((child, index) => (
      <div key={index} className=" col-md-4 ">
        <div className="offer-card card-offer">
          <a href="#">
            <div className="offer-content">

              <div>
                <p>{child.name}</p>
                <span className="offer-span">Get 30% Off</span>
              </div>
            </div>
            <span className="lock"><i className="ri-rotate-lock-fill"></i></span>
          </a>
        </div>
      </div>
    ))
  )
}

export default BankProductCard