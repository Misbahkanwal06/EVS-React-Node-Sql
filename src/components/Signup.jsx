

import React, { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [payload, setPayload] = useState({});

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        const user = { name, email, password }
        // localStorage.setItem("userdata", JSON.stringify([user]));

        try {
            const res = await axios.post('http://localhost:3005/api/v2/students/create', user);
            console.log("res", res);
            if (res.data.send === "User registered successfully") {
                alert("User registered successfully");
                console.log("response object", res.data.obj);
                navigate('/students/create');
            } else {
                alert(" User cannot created");
            }
        } catch (error) {
            console.error('Error registering user', error);
        }
    }
    return (
        <div>
            <Nav />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'
                            onClick={register}>
                            Register
                        </MDBBtn>
                        <div>
                            <p>Already have an Account?</p>
                        </div>
                        <Link to='/students/create'>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' outline color='info' size='lg'>
                                Login
                            </MDBBtn>
                        </Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Signup;
