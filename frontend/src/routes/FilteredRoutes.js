


import allRoutes from "./routes";
import { Routes, Route } from 'react-router-dom';
import NotAllowed from "../pages/NotAllowed";

// import {  useNavigate } from "react-router-dom";
// import { Routes, Route, Navigate } from 'react-router-dom';
// import 

const FilteredRoutes = () => {
    // console.log("filtered");
    const storageResponse = localStorage.getItem("userdata");
    let user = JSON.parse(storageResponse);
    // console.log("storageResponse", user.permissions);
    let { permissions } = user;
    // console.log("permissions", permissions);

    let filteredRoutes = [];
    filteredRoutes = allRoutes.filter((el) => {
        // console.log("el",el);
        return permissions.some((f) => {
            // console.log("f", f);
            return f.routes === el.path;
        });
    });

    // console.log("filtered routes", filteredRoutes);
    return (
        <>
            {/* <Routes>
                {
                    filteredRoutes.map(({path,components },index) => {
                        console.log("Path",path);
                        console.log("window",window.location.pathname);
                        return (
                            <>
                                {
                                    window.location.pathname === path 
                                    ? <Route key={index} path={path} element={components} /> 
                                    : <Route key={index} path="*" element={<NotAllowed />} />
                                }
                            </>)
                    })
                }
            </Routes> */}


            <Routes>

                {filteredRoutes.map(({ path, components }, index) => {
                    // console.log(index);
                    // console.log("misbah");
                    // console.log("Path", path);
                    // console.log("href",window.location.href);
                    // // console.log(components);
                    // console.log("Pathname", window.location.pathname);
                    // console.log(window.location.pathname,path)
                    // console.log("url", window.location.href);
                    // console.log("compare", window.location.pathname === path);
                    return (
                            window.location.pathname === path
                            ? <Route key={index} path={path} element={components} />
                            : <Route key={index} path="*" element={<NotAllowed />} />
                    )
                })}
            </Routes>
        </>
    )
}

export default FilteredRoutes;



// const storageResponse = localStorage.getItem('userdata');
// const user = JSON.parse(storageResponse);
// const permissions = user?.permissions || []; // Default to empty array if permissions are not available

// // Check if user is logged in
// const isLoggedIn = !!user;
// return (
//     <Routes>
//         {isLoggedIn ? (
//             // Render AfterLoginRoutes for logged-in users
//             <AfterLoginRoutes />
//         ) : (
//             // Redirect to login page if user is not logged in
//             <Navigate to='/login' />
//         )}
//         {/* Render NotAllowed page for unmatched routes */}
//         <Route path='*' element={<NotAllowed />} />
//     </Routes>
// );

