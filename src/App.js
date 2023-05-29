import './App.css';

import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Error from './components/assets/Error/Error';
import Login from './components/assets/Login/Login';
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(sessionStorage.getItem('selectedOption')) || 1
  )


  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('user_data') ? true : false
  )
    
  const [isSidebarVisible, setSidebarVisibility] = useState(
    JSON.parse(localStorage.getItem('isSidebarVisible')) || false)
  function sidebarToggle() {
    localStorage.setItem('isSidebarVisible', JSON.stringify(!isSidebarVisible))
    setSidebarVisibility(prevState => JSON.parse(localStorage.getItem('isSidebarVisible')))
  }
  useEffect(() => {
    setSidebarVisibility(prevState => JSON.parse(localStorage.getItem('isSidebarVisible')))
  }, [isSidebarVisible])
  
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode') || false))
  function darkModeToggle() {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(prevState => JSON.parse(localStorage.getItem('darkMode')))
  }
  useEffect(() => {
    setDarkMode(prevState => JSON.parse(localStorage.getItem('darkMode')))
  }, [darkMode])

  return (
    <div className='body-container'>
      <Routes>
        <Route path='/login' element={<Login setIsLogin={setIsLogin}/>}/>
        <Route path='/' element={
          <>
            { isLogin ? <>
              <Sidebar
                isSidebarVisible={isSidebarVisible}
                darkMode={darkMode}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}/>
              <Main
                isSidebarVisible={isSidebarVisible}
                sidebarToggle={sidebarToggle}
                darkMode={darkMode}
                darkModeToggle={() => darkModeToggle()}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setIsLogin={setIsLogin}/>
              </> : <Navigate to='login'/>}
          </>
          
        }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
