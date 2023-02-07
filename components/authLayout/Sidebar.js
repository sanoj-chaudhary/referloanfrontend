import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import $ from 'jquery'
import Link from 'next/link';
import Image from "next/image";
import TempSideBar from './TempSidebar';
import { logoutUser , getUserProfile } from '../../utils';
const Sidebar = () => {
    const [sidebarmenu, setSidebarMenu] = useState([]);
    const getsidebarMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);

            setSidebarMenu(res.data);
          
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getsidebarMenu();
      
    }, []);

    return (
        <aside id="sidebar" className="sidebar break-point-lg has-bg-image">
            <div className="sidebar-layout">
                <div className="sidebar-header">
                    <Link href={'/'}><a className="logo" ><Image src="/images/logo.webp" alt="logo" width="175" height="36" loading='lazy' /></a></Link>
                </div>
                <nav className="menu open-current-submenu">
                   <TempSideBar data={sidebarmenu} />
                </nav>
                <div className="sidebar-footer">
                    <div className="logout">
                    <span onClick={logoutUser}>  <a href="#"><i className="ri-logout-circle-r-fill"></i> <span>Log Out</span></a> </span>
                    </div>
                </div>
            </div>
        </aside>
    )
}


export default Sidebar