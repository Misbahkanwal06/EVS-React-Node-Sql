
import React from 'react'
import Nav from '../components/Nav';

function About() {
  
  return (
    <>
      <Nav />
      <h1>About </h1>
    </>
  )
}
export default About;



  // const storageResponse = localStorage.getItem("userdata");
  //   let user = JSON.parse(storageResponse);
  //   console.log("storageResponse", user.permissions);
  //   let { permissions } = user;
  //   console.log("permissions",permissions);
  //   let filteredRoutes = [];
  //   filteredRoutes = allRoutes.filter((el) => {
  //       return permissions.some((f) => {
  //           // return f.path === el.path && f.projectid === el.projectid;
  //           return f.path === el.path;
  //       });
  //   });
  //   console.log("filtered routes",filteredRoutes);
  //   {/* {filteredRoutes.map(({id,path,component})=>
  //   {
  //   return <>
  //   {window.location.pathname==="/"?user.userType==="A"?navigate("/dashboard/view"):navigate("/organization/dashboard"):" "}
  //   {path!=window.location.pathname?<Route path="*" element ={<Unauthorized/>} />:" "}
  //   <Route key={id} path={path} element ={component}/>
  //   </>
  // })} */}
  //   {/* </Routes>:<div>No Routes Found</div> */}
  // </Routes>
