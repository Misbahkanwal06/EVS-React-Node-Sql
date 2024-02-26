

import React from 'react'
import { Route, Routes as DefaultAppRoutes } from 'react-router-dom';
import Signup from '../components/Signup';
import Sign from '../components/Sign';

function BeforeLoginRoutes() {
    return (
        <div>
            <DefaultAppRoutes>
                <Route path="/" element={<Signup />} />
                <Route path='/students/create' element={<Sign/>}/>
            </DefaultAppRoutes>
        </div>
    )
}
export default BeforeLoginRoutes;


