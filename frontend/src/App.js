

import React from 'react'
import FilteredRoutes from './routes/FilteredRoutes'
import BeforeLoginRoutes from './routes/BeforeLoginRoutes';

const App = () => {
  const user = JSON.parse(localStorage.getItem('userdata'));
  console.log("user from local storage", user);
  console.log("now");
  console.log("app.js",user);

  if(!user) return <BeforeLoginRoutes/>
  else if(user)return <FilteredRoutes/>
}
export default App;