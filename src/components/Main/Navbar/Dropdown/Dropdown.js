import './Dropdown.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';


export default function Dropdown(props) {
  const navigate = useNavigate()
  return (
    <div
    onMouseLeave={() => props.setDropDown(prevState => !prevState)}
    className={`drop-down ${props.dropDown ? 'drop-show' : '' } ${props.darkMode ? 'dark' : ''}`}>
        <div><PersonRoundedIcon/> <span>Profile</span></div>
        <div
        onClick={() => {
        props.setIsLogin(prevState => !prevState)
        navigate('/login')
      }}><LogoutRoundedIcon/> <span>Logout</span></div>
      </div>
  )
}