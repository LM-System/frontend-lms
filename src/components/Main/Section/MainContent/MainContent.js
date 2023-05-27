import './MainContent.css'
import Dashboard from './Dashboard/Dashboard'
import Courses from './Courses/Courses'
import Announcements from './Annoucments/Announcments'
import Settings from './Settings/Settings'
import ControlPanel from '../../../assets/Admin/ControlPanel/ControlPanel'
import GetUsers from '../../../assets/Admin/GetUsers/GetUsers'

export default function MainContent(props) {
  let role=JSON.parse(localStorage.getItem('user_data')).role

  const mainOption = role==="admin"?{
    1: <ControlPanel/>,
    2: <GetUsers/>,
  }: {
    1: <Dashboard/>,
    2: <Courses darkMode={props.darkMode}/>,
    3: <Announcements/>,
    4: <Settings/>
  }
  return(
    <div className='mainContent'>
      {mainOption[props.selectedOption]}
    </div>
  )
}