

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const  Sign=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const logins = async (e) => {
        e.preventDefault();
        const user = { email, password }
        // console.log(user);
        
        try {
            const res = await axios.post('http://localhost:3005/api/v2/students/login', user)
            console.log("response", res);
            if (res.data.send === "Successful login") {
                let { obj } = res.data;
                let {permissions} = obj;

                // console.log('login successfull');
                // console.log("response object",obj);
                // console.log("permissions", permissions);
                // alert("Welcome"); 

                // permissions.map((e)=>{
                //     console.log("e",e);
                //     navigate(`${e.routes[0]}`);
                // })

                permissions.map(({ routes })=>{
                    console.log("e.routes",routes);
                    navigate(`${routes}`);
                })
           
                localStorage.setItem('userdata', JSON.stringify(obj));
                window.location.reload();

            } else {
                alert("Invalid Email or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log("bbh");

    return (
        <>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
                <h2 className="text-uppercase text-center mb-5">Signin</h2>
                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'
                    onClick={logins}>SignIn</MDBBtn>
                <div>
                    <p>Do not have an account?</p>
                </div>
            
                <Link to='/'>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' outline color='info' size='lg'>
                        Create an account
                    </MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCard>
    </MDBContainer>
    </>
    )
}
export default Sign;
