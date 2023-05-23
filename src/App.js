import './App.css';
import JScourse from './component/JScourse';
import Courses from './component/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from './component/LogInPage';
import AboutUs from './component/AboutUs';
import { Route,Routes } from 'react-router-dom';
import Register from './component/register';
import Error from './component/error.js';
function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/login' element={<LogInPage/>}/>
      <Route path='/courses' element={<Courses/>}/> 
      <Route path='/aboutus' element={<AboutUs/>}/> 
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/JScourse' element={<JScourse/>}/> 



    </Routes>
    
    </>
  );
}

export default App;
