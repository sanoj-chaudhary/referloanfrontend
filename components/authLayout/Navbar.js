import React from 'react'
import {useState} from 'react'
import { logoutUser , getUserProfile } from '../../utils';

const Navbar = () => {
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
  return (
    <header className="header">
                    <div className="top-search-box">
                        <a id="btn-collapse" href="#">
                            <i className="ri-menu-line ri-xl"></i>
                        </a>
                        <a id="btn-toggle" href="#" className="sidebar-toggler break-point-lg">
                            <i className="ri-menu-line ri-xl"></i>
                        </a>
                        <div className="search-box">
                            <button className="search-btn">
                                <i className="ri-search-line"></i>
                            </button>
                            <input type="text" id="search" placeholder="search" />
                        </div>
                    </div>


                    <div className="user-auth">
                           <li className="dropdown main-profile-menu nav nav-item nav-link ps-lg-2">
                            <a className="new nav-link profile-user d-flex" href="#" data-bs-toggle="dropdown" aria-expanded="false"><img src="/images/profile.png" alt="" className="" /></a>
                            <div className="dropdown-menu">
                                <div className="menu-header-content p-3 border-bottom">
                                    <div className="d-flex wd-100p">
                                        <div className="main-img-user"><img src="/images/profile.png" alt="" className="" />
                                        </div>
                                        <div className="ms-3 my-auto">
                                       {user?user.full_name:"User"}
                                        </div>
                                    </div>
                                </div>

                                <a className="dropdown-item py-2" href="#"><i className="far fa-user-circle"></i>Profile</a>                      
                                <a className="dropdown-item py-2" href="#"><i className="ri-shopping-cart-fill"></i>Shopping Cart</a>
                                <a className="dropdown-item py-2" href="#"><i className="ri-notification-4-fill"></i> Notification</a>
                                <span onClick={logoutUser}>  <a className="dropdown-item py-2" href="#"><i className="far fa-arrow-alt-circle-left"></i>Logout</a> </span>
                            </div>    
                    </li>                 
                 </div>
         </header>
  )
}

export default Navbar