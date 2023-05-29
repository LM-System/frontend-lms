import Dashboard from './Dashboard/Dashboard'
import Courses from './Courses/Courses'
import Announcements from './Annoucments/Announcments'
import Profile from './Profile/Profile'

export default function MainContent(props) {
  const mainOption = {
    1: <Courses {...props}/>,
    2: <Announcements {...props}/>,
    3: <Profile {...props}/>
    // 4: <Dashboard {...props}/>,
  }
  return(
    <>
      {mainOption[props.selectedOption]}
    </>
  )
}