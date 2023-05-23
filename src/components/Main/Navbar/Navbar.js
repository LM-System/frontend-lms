/*

<MenuIcon onClick={() => props.setSidebarVisibility(prevState => !prevState)}/>
'for login button in profile' 


*/
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SwitchButton from './Switch/Switch'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';

export default function Navbar(props) {
  const navigate = useNavigate()
  const [dropDown, setDropDown] = useState(false)
  return (
    <nav
    className={`${!props.isSidebarVisible ? '' : 'full-width'} ${props.darkMode ? 'dark' : ''}`}
    >
      <div className={`nav-left ${props.darkMode ? 'dark' : ''}`}>
        <MenuRoundedIcon onClick={() => props.setSidebarVisibility(prevState => !prevState)}/>
        <div className='search-box'>
          <SearchRoundedIcon/><input type='search'/>
        </div>
      </div>

      <div className={`nav-right ${props.darkMode ? 'dark' : ''}`}>
        <SwitchButton darkMode={props.darkMode} darkModeToggle={props.darkModeToggle}/>
        <NotificationsRoundedIcon/>
        <div className='profile-container'>
          <AccountCircle/>
          <ArrowDropDownRoundedIcon onClick={() => setDropDown(prevState => !prevState)}/>
        </div>
      </div>
      <div  className={`drop-down ${dropDown ? 'drop-show' : '' } ${props.darkMode ? 'dark' : ''}`}>
        <div><PersonRoundedIcon/> <span>Profile</span></div>
        <div
        onClick={() => {
        props.setIsLogin(prevState => !prevState)
        navigate('/login')
      }}><LogoutRoundedIcon/> <span>Logout</span></div>
      </div>
    </nav>
  )
}