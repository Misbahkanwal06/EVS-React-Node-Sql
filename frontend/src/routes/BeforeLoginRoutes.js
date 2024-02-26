
import React from 'react';
import { Route, Routes as DefaultAppRoutes } from 'react-router-dom';
import Signup from '../components/Signup';
import Sign from '../components/Sign';
// import View from '../pages/View';

const BeforeLoginRoutes = () => {
    console.log("before login routes");
    return (
        <div>
            <DefaultAppRoutes>
                <Route path="/" element={<Signup/>} />
                <Route path='/students/create' element={<Sign/>} />
                {/* <Route path='/students/view-all'element={<View/>}/> */}
            </DefaultAppRoutes>
        </div>
    )
}
export default BeforeLoginRoutes;



