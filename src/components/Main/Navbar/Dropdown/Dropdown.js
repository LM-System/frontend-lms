import './Dropdown.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Dropdown(props) {
  const navigate = useNavigate()
  function selectProfile(id) {
    props.setSelectedOption(prevOption => id)
    props.setDropDown(false)
  }
  return (
    <div
    className={`drop-down ${props.dropDown ? 'drop-show' : '' } ${props.darkMode ? 'dark' : ''}`}>
        <div onClick={() => selectProfile(3)}><PersonRoundedIcon/> <span>Profile</span></div>
        <div
        onClick={async () => {
          const user = JSON.parse(localStorage.getItem('user_data'))
          const body = { ...user, status: "off"}
          localStorage.removeItem('user_data')
          props.setIsLogin(false)
          await axios.put(`${process.env.REACT_APP_SERVER_URL}userinformtion/${user.id}`, body)
          navigate('/login')
      }}><LogoutRoundedIcon/><span>Logout</span></div>
      </div>
  )
}