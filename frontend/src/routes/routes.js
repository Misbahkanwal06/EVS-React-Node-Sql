

import Signup from '../components/Signup';
// import Sign from '../components/Sign';
import View from '../pages/View';
import About from '../pages/About';
import Instructor from '../pages/Instructor';
import Services from '../pages/Services';
import NotAllowed from '../pages/NotAllowed';
import Admin from '../pages/Admin';


const allRoutes = [
    { Name:"Signup", path: '/', components:<Signup/> }, 
    //{ Name:"Login",path: '/students/create', components:<Sign/> },
    { Name:"View", path: '/students/view-all', components:<View /> },
    { Name:"About", path: '/students/about', components:<About /> },
    { Name:"Instructor",path: '/instructor/create', components:<Instructor /> },
    { Name:"Services", path: '/students/services', components:<Services /> },
    {Name:"Admin", path: '/admin/view', components:<Admin/>},
    { Name:"Not Allowed", path: '*', components:<NotAllowed /> }
]
export default allRoutes;

// <Route path='/students/about' element={<About />} />
// <Route path='/instructor/create' element={<Instructor />} />
// <Route path='/students/services' element={<Services />} />