


import React from 'react';
import { Route, Routes as AfterRoutes } from 'react-router-dom';
import View from '../pages/View';
import About from '../pages/About';
import NotAllowed from '../pages/NotAllowed';

const AfterLoginRoutes = () => {
    return (
        <div>
            <AfterRoutes>
                <Route path='/students/about' element={<About />} />
                <Route path='/students/view-all' element={<View />} />
                <Route path='*' element={<NotAllowed />} />
            </AfterRoutes>
        </div>
    )
}
export default AfterLoginRoutes;



