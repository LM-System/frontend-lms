import Courses from './Courses/Courses'
import Announcements from './Annoucments/Announcments'
import Profile from './Profile/Profile'
import Aboutus from './Aboutus/Aboutus'

export default function MainContent(props) {
  const mainOption = {
    1: <Courses {...props}/>,
    2: <Announcements {...props}/>,
    3: <Profile {...props}/>,
    4: <Aboutus {...props}/>,
  }
  return(
    <>
      {mainOption[props.selectedOption]}
    </>
  )
}