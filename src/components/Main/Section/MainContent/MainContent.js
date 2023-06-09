
import Courses from './Courses/Courses'
import Announcements from './Annoucments/Announcments'
import Profile from './Profile/Profile'
import Aboutus from './Aboutus/Aboutus'
import ControlPanel from "../../../assets/Admin/ControlPanel/ControlPanel";
import AnnouncmentControlPanel from '../../../assets/Admin/AnnouncmentControlPanel/AnnouncmentControlPanel';
import GetUsers from "../../../assets/Admin/GetUsers/GetUsers";
import CourseControlPanel from "../../../assets/Admin/CourseControlPanel/CourseControlPanel";
export default function MainContent(props) {
  let role = JSON.parse(localStorage.getItem("user_data")).role;

  const mainOption =
    role === "admin"
      ? {
          1: <ControlPanel {...props} />,
          2: <CourseControlPanel {...props}/>,
          // 3: <GetUsers {...props} />,
          4: <AnnouncmentControlPanel {...props}/>,
          5: <Aboutus {...props}/>,
        }
      : {
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
