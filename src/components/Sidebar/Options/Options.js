import './Options.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import ControlPanel from '../../assets/Admin/ControlPanel/ControlPanel';
import GetUsers from '../../assets/Admin/GetUsers/GetUsers';

export default function Options(props) {
  
  const icons = props.role==="admin"?{
    1: <ControlPanel/>,
    2: <GetUsers/>,
  }:{
    1: <DashboardIcon/>,
    2: <SchoolIcon/>,
    3: <CampaignIcon/>,
    4: <SettingsIcon/>,
  }

  function firstLetterUpperCase(str) {
    let newArr = str.split('')
    newArr[0] = newArr[0].toUpperCase()
    return newArr.join("")
  }

  function toggleSelected(id) {
    props.setSelectedOption(prevOption => id)
  }
  
  const listElements = props.sidebarOptions.map((option) => (
    <li 
    onClick={() => toggleSelected(option.id)}
    key={option.id}
    className={`${option.id === props.selectedOption ? 'selected' : ''} ${props.darkMode ? 'dark' : ""} `}>
        {icons[option.id]}
        <span>
          {`${firstLetterUpperCase(option.label)}`}
        </span>
    </li>
  ))

  
  return (
  <ul className='side-bar-options'>
    {listElements}
  </ul>
  )
}