import './App.css';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Error from './components/assets/Error/Error';
import Login from './components/assets/Login/Login';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(
    JSON.parse(localStorage.getItem('isSidebarVisible')) || false
  )
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode') || false)
  )
  const [selectedOption, setSelectedOption] = useState(null)

  function sidebarToggle() {
    localStorage.setItem('isSidebarVisible', JSON.stringify(!isSidebarVisible))
    setSidebarVisibility(prevState => JSON.parse(localStorage.getItem('isSidebarVisible')))
  }
  function darkModeToggle() {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(prevState => JSON.parse(localStorage.getItem('darkMode')))
  }

  useEffect(() => {
    setSidebarVisibility(prevState => JSON.parse(localStorage.getItem('isSidebarVisible')))
  }, [isSidebarVisible])
  
  useEffect(() => {
    setDarkMode(prevState => JSON.parse(localStorage.getItem('darkMode')))
  }, [darkMode])

  return (
    <div className='body-container'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={
          <>
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            darkMode={darkMode}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}/>
          <Main
            isSidebarVisible={isSidebarVisible}
            sidebarToggle={sidebarToggle}
            darkMode={darkMode}
            selectedOption={selectedOption}
            darkModeToggle={() => darkModeToggle()}/>
          </>
        }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
