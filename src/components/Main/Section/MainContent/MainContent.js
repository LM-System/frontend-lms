import Dashboard from './Dashboard/Dashboard'
import Courses from './Courses/Courses'
import Announcements from './Annoucments/Announcments'
import Settings from './Settings/Settings'

export default function MainContent(props) {
  const mainOption = {
    1: <Dashboard/>,
    2: <Courses/>,
    3: <Announcements/>,
    4: <Settings/>
  }
  return(
    <>
      {mainOption[props.selectedOption]}
    </>
  )
}