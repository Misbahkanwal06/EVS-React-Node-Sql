
import React, { useState } from 'react';
import allRoutes from '../routes/routes';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Nav() {

    // const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);
    //Navbar
    const storageResponse = localStorage.getItem("userdata");
    let user = JSON.parse(storageResponse);
    // console.log("storageResponse", user.permissions);

    let {permissions} = user;
    // console.log("permissions", permissions);
    let filteredRoutes = [];
    filteredRoutes = allRoutes.filter((el) => {
        // console.log("el",el);
        return permissions.some((f) => {
            // console.log("f",f);
            return f.routes === el.path;
        });
    });
    
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

                            {/* 
                            <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='/students/view-all'>
                                        View
                                    </MDBNavbarLink>
                                </MDBNavbarItem> */}
                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/about'>About</MDBNavbarLink>
                                </MDBNavbarItem> */}
                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/instructor/create'>Instructor</MDBNavbarLink>
                                </MDBNavbarItem> */}
                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/services'>Services</MDBNavbarLink>
                                </MDBNavbarItem> */}
                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/students/services'>Pricing</MDBNavbarLink>
                                </MDBNavbarItem> */}

                            {/* LOgout */}
                            {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/logout'>Logout</MDBNavbarLink>
                                </MDBNavbarItem> */}
                            {/* <Link to='/'>
                                </Link> */}

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}
export default Nav;

