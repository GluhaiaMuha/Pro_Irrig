import '../Styles/Navbar.css'
import React from "react";
import {NavLink} from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

const Navbar = () => {
    return (

        <div className="sideBar" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#1a936f">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={require('../img/logoIcon.png')}
                            alt=""
                            style={{ width: '30px' }}
                        />
                        <a href="/" className="ms-2 text-decoration-none" style={{ color: 'inherit' }}>
                            ProIrrig
                        </a>
                    </div>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/dashboard" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/auth" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="user">Log In</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        &copy; ProIrrig 2023
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>

    );
};

export default Navbar