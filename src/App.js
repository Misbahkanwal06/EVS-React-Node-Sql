

import BeforeLoginRoutes from './routes/BeforeLoginRoutes';
import FilTeredRotes from './routes/FilTeredRotes';
import About from './pages/About';


function App() {

  const user = JSON.parse(localStorage.getItem('userdata'));
  console.log("user from local storage", user);
  if (!user) return <><BeforeLoginRoutes /></>
  else if (user) return <><FilTeredRotes/></>
  // else return <FilteredRoutes/>
  // if(!user) return <AfterLoginRoutes/>
  return <About />
}
export default App;




