import './Sidebar.css'
import {Link} from 'react-router-dom';
import Options from './Options/Options';

export default function Sidebar(props) {
  let role=JSON.parse(localStorage.getItem('user_data')).role
  console.log(role)
  const sidebarOptions = role==="admin"?[
    { id: 1, label: 'Control Panel'},
    { id: 2, label: 'Users'}
  ]:[
    { id: 1, label: 'dashboard'},
    { id: 2, label: 'courses'},
    { id: 3, label: 'annoucments' },
    { id: 4, label: 'settings'},
  ];

  return (
    <>
      <div className={`side-bar ${props.isSidebarVisible === true ? 'hidden' : ""} ${props.darkMode ? 'dark' : ""}`}>
        <Link to={'/'} onClick={() => props.setSelectedOption(null)}>
        <div className='logo'>
          <img src={require("../assets/images/logo.png")} alt=''/>
          <span>LMS</span>
        </div>
        </Link>
        <Options
          role={role}
          sidebarOptions={sidebarOptions}
          setSelectedOption={props.setSelectedOption}
          selectedOption={props.selectedOption}
          darkMode={props.darkMode}/>
      </div>
    </>
  )
}