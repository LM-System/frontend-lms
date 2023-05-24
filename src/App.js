import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Error from './components/assets/Error/Error';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  function darkModeToggle() {
    setDarkMode(prevState => !prevState);
  }

  return (
    <div className='body-container'>
      <Routes>
        <Route path='/' element={
          <>
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            darkMode={darkMode}/>
          <Main
            setIsLogin={setIsLogin}
            isSidebarVisible={isSidebarVisible}
            setSidebarVisibility={setSidebarVisibility}
            darkMode={darkMode}
            darkModeToggle={() => darkModeToggle()}/>
          </>
        }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
