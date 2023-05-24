import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SwitchButton from './Switch/Switch'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Dropdown from './Dropdown/Dropdown';
import { useState } from 'react';

export default function Navbar(props) {

  const [dropDown, setDropDown] = useState(false)
  return (
    <nav
    className={`${!props.isSidebarVisible ? '' : 'full-width'} ${props.darkMode ? 'dark' : ''}`}
    >
      <div className={`nav-left ${props.darkMode ? 'dark' : ''}`}>
        <MenuRoundedIcon onClick={() => props.sidebarToggle()}/>
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
      <Dropdown dropDown={dropDown} setDropDown={setDropDown}/>
    </nav>
  )
}