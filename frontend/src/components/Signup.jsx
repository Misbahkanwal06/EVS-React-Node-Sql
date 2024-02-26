


import React, { useEffect, useState } from 'react';
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
    const [validationError, setValidationError] = useState({});
    console.log("validationerrors", validationError);
    const [isSubmit, setIsSubmit] = useState(false);  // Flags
    //const [payload, setPayload] = useState({});


    const navigate = useNavigate();
    // Validate functions
    const validate = (userObj) => {
        console.log("userObj", userObj);
        console.log("erorrrrr");
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// console.log("name",userObj.name, userObj.email,password);
        if (!name) {
            error.name = "Username is required!";
        }
        if (!email) {
            error.email = "User Email is required!";
        } else if (!emailRegex.test(email)) {
            error.email = "Please enter a valid email address";
        }
        if (!password) {
            error.password = "User Password is required!";
        } else if (!passwordRegex.test(password)) {
            error.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        return error;
    }

    const register = async (e) => {
        e.preventDefault();
        const user = { name, email, password }
        const errors = validate(user);
        setValidationError(errors);
        setIsSubmit(true);
        // localStorage.setItem("userdata", JSON.stringify([user]));
        if (Object.keys(validationError).length === 0 && isSubmit) {
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
    }

    useEffect(() => {
        console.log("awd",validationError);
        if (Object.keys(validationError).length === 0 && isSubmit) {
            //    console.log();
        }
    }, [validationError]);

    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput wrapperClass='mb-4' label='Your Name' size='m' id='form1' type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        {validationError.name && <div style={{ color: 'red' ,fontSize:'0.7rem' }}>{validationError.name}</div>}
                        <br /><MDBInput wrapperClass='mb-4' label='Your Email' size='m' id='form2' type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        {validationError.email && <div style={{ color: 'red', fontSize:'10px' }}>{validationError.email}</div>}

                        <br /><MDBInput wrapperClass='mb-4' label='Password' size='m' id='form3' type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    {validationError.password && <div style={{ color: 'red', fontSize:'0.6rem' }}>{validationError.password}</div>}
                        <br /><MDBBtn className='mb-4 w-100 gradient-custom-4' size='m'
                            onClick={register}>
                            Register
                        </MDBBtn>
                        <div>
                            <p>Already have an Account?</p>
                        </div>
                        <Link to='/students/create'>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' outline color='info' size='m'>
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




// const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// const validatePassword = (password) => {
//     // Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
// }

// if (!validateEmail(email)) {
//     alert("Please enter a valid email address.");
//     return;
// }

// if (!validatePassword(password)) {
//     alert("Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
//     return;
// }


//  // Validation
//  if (!name || !email || !password) {
//     alert("All fields are required");
//     return;
// }
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
// if (!emailRegex.test(email)) {
//     alert("Please enter a valid email address");
//     return;
// }
// if (!passwordRegex.test(password)) {
//     alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
//     return;
// }



// try {
//     const res = isSubmit && await axios.post('http://localhost:3005/api/v2/students/create', user);
//     console.log("res", res);
//     if (res.data.send === "User registered successfully") {
//         alert("User registered successfully");
//         console.log("response object", res.data.obj);
//         navigate('/students/create');
//     } else {
//         alert(" User cannot created");
//     }
// } catch (error) {
//     console.error('Error registering user', error);
// }