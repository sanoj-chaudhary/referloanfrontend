import React, { useState } from 'react'
import { getUserProfile } from '../../utils'
const Profile = () => {
  const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
console.log('first',user)
  return (
    <div className="content-col content-col-50 col-50">
      <div className="user-detail">
        <div className="user-detail-content">
          <div className="user-detail-box">
            <h2 className="user-name">Welcome! <b className='text-capitalize'>{user?user.full_name:"User"}</b></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <h4 className="your-product">Your Product</h4>
          <ul className="accordion product-ul">
            <li className="product-list">
              <a className="toggle" href="#">
                <div className="toggle-title" >
                  <div className="offer-img"><i className="ri-home-wifi-line"></i></div>
                  <div>
                    <p>Loan</p>
                    <span className="offer-span">Get 30% Off</span>
                  </div>
                </div>
                <span className="right"><i className="ri-arrow-right-s-line"></i></span>
              </a>
              <div className="inner">
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
              </div>
            </li>
            <li className="product-list">
              <a className="toggle" href="#" >
                <div className="toggle-title" >
                  <div className="offer-img"><i className="ri-home-wifi-line"></i></div>
                  <div>
                    <p>Card</p>
                    <span className="offer-span">Get 30% Off</span>
                  </div>
                </div>

                <span className="right"><i className="ri-arrow-right-s-line"></i></span>
              </a>
              <div className="inner">
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
                <div className="produact-get">
                  <p>HOME LOAN</p>
                </div>
              </div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default Profile