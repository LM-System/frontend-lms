import './App.css';
import Courses from './componant/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from './componant/LogInPage';
import AboutUs from './componant/AboutUs';
import { Route,Routes } from 'react-router-dom';
// import Register from './componant/register';
// import Error from 'next/error';
function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/login' element={<LogInPage/>}/>
      <Route path='/courses' element={<Courses/>}/> 
      <Route path='/aboutus' element={<AboutUs/>}/> 
      {/* <Route path='/aboutus' element={<Register/>}/> */}
      {/* <Route path='/error' element={<Error/>}/>  */}



    </Routes>
    
    </>
  );
}

export default App;
