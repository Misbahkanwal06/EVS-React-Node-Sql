import React from 'react'
import allRoutes from './routes';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import NotAllowed from "../pages/NotAllowed";

// import { useNavigate } from 'react-router-dom';
// Navigate, useNavigate
 

function FilTeredRotes() {
    const storageResponse = localStorage.getItem("userdata");
    let user = JSON.parse(storageResponse);
    console.log("storageResponse", user.permissions);
    let { permissions } = user;
    console.log("permissions", permissions);
    let filteredRoutes = [];
    filteredRoutes = allRoutes.filter((el) => {
        // console.log("el",el);
        return permissions.some((f) => {
            // console.log("f",f);
            return f.routes === el.path;
        });
    });
    console.log("filtered routes", filteredRoutes);
    {/* <Route path="*" element= {<NotAllowed/>} />  */ }
    // filteredRoutes

    return (
        <>
            <Routes>
                { filteredRoutes.map(({ path, components }) => {
                    console.log("Path", path);
                    console.log("component", components);
                    console.log("url", window.location.href);
                    console.log(window.location.path === path);
                    console.log("pathname", window.location.pathname);
                    return (
                        <>
                            {
                                window.location.pathname === path ? <Route path={path} element={components} /> : <Route path="*" element={<NotAllowed />} />
                            }
                            {/* {
                                path && <Route path={path} element={components} />
                            } */}

                        </>)
                })
                }
            </Routes>
        </>
    )
}
export default FilTeredRotes;
