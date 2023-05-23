import './Options.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Options(props) {
  
  const icons = {
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

  const listElements = props.sidebarOptions.map((option) => (
    <li 
    onClick={() => toggleSelected(option.id)}
    key={option.id}
    className={`${option.id === props.selectedOption ? 'selected' : ''} ${props.darkMode ? 'dark' : ""} `}>
      <Link to={`/${option.label}`}>
        {icons[option.id]}
        <span>
          {`${firstLetterUpperCase(option.label)}`}
          </span>
      </Link>
    </li>
  ))

  function toggleSelected(id) {
    props.setSelectedOption(prevOption => id)
  }
  
  return (
  <ul className='side-bar-options'>
    {listElements}
  </ul>
  )
}