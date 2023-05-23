import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') || false)
  function darkModeToggle() {
    setDarkMode(prevState => !prevState);
    localStorage.setItem('darkMode', darkMode)
  }
  return (
    <div className='body-container'>
      
      {isLogin && <Sidebar
      isSidebarVisible={isSidebarVisible}
      darkMode={darkMode}/>}

      {isLogin && <Main
      setIsLogin={setIsLogin}
      isSidebarVisible={isSidebarVisible}
      setSidebarVisibility={setSidebarVisibility}
      darkMode={darkMode}
      darkModeToggle={() => darkModeToggle()}/>}
    </div>
  );
}

export default App;
