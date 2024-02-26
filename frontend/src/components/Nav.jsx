

import React, { useState } from 'react';
import allRoutes from '../routes/routes';
import { Link, useNavigate } from "react-router-dom";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function Nav() {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);
    //Navbar
    const storageResponse = localStorage.getItem("userdata");
    let user = JSON.parse(storageResponse);
    console.log("storageResponse", user.permissions);
    let { permissions } = user;
    // console.log("permissions", permissions);
    let filteredRoutes = [];
    filteredRoutes = user && allRoutes.filter((el) => {
        // console.log("el",el);
        return permissions.some((f) => {
            // console.log("f",f);
            return f.routes === el.path;
        });
    });


    ////  LOGOUT
    const Logout = () => {
        // const getData = localStorage.getItem('userdata');
        const delStoragedata = localStorage.removeItem('userdata');
        console.log(delStoragedata);
        window.location.reload();
        navigate('/');
    }

    return (

        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNav(!openNav)}
                    >
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNav}>
                        <MDBNavbarNav>
                            {/* {
                                filteredRoutes.map(({ Name, path }) => {
                                    return (
                                        <>
                                            <MDBNavbarItem>
                                                <MDBNavbarLink active aria-current='page' href={path}>
                                                    {Name}
                                                </MDBNavbarLink>
                                            </MDBNavbarItem>
                                        </>
                                    )
                                })
                            } */}

                            {
                                filteredRoutes.length > 0 && filteredRoutes.map(({ Name, path }) => {
                                    return (
                                        <MDBNavbarItem key={path}>
                                            <MDBNavbarLink active aria-current='page' href={path}>
                                                {Name}
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                    )
                                })
                            }

                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='/students/view-all'>
                                        View
                                    </MDBNavbarLink>
                                </MDBNavbarItem> 
                            <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                            <MDBNavbarItem>
                                    <MDBNavbarLink href='/instructor/create'>Instructor</MDBNavbarLink>
                                </MDBNavbarItem>
                            <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/services'>Services</MDBNavbarLink>
                                </MDBNavbarItem>
                            <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/services'>Pricing</MDBNavbarLink>
                                </MDBNavbarItem> */}
                        </MDBNavbarNav>


                        {/* LOgout */}
                        <div className='d-flex justify-content-end  align-items-center'> 
                            <MDBBtn className='mb-4 gradient-custom-4' outline color='info' onClick={Logout}>
                                LogOut
                            </MDBBtn>
                        </div>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}
export default Nav;


