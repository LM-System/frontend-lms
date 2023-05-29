import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses/Courses";
import Announcements from "./Annoucments/Announcments";
import Settings from "./Settings/Settings";
import ControlPanel from "../../../assets/Admin/ControlPanel/ControlPanel";
import GetUsers from "../../../assets/Admin/GetUsers/GetUsers";
import AboutUsPage from "./Aboutus/AboutUsPage";
import CourseControlPanel from "../../../assets/Admin/CourseControlPanel/CourseControlPanel";
import AnnouncmentControlPanel from "../../../assets/Admin/AnnouncmentControlPanel/AnnouncmentControlPanel";

export default function MainContent(props) {
  let role = JSON.parse(localStorage.getItem("user_data")).role;

  const mainOption =
    role === "admin"
      ? {
          1: <ControlPanel darkMode={props.darkMode}/>,
          2: <GetUsers darkMode={props.darkMode}/>,
          3: <CourseControlPanel darkMode={props.darkMode}/>,
          4: <AnnouncmentControlPanel darkMode={props.darkMode}/>,
          5: <AboutUsPage darkMode={props.darkMode}/>,
        }
      : {
          1: <Dashboard />,
          2: <Courses darkMode={props.darkMode}/>,
          3: <Announcements darkMode={props.darkMode}/>,
          4: <Settings />,
          5: <AboutUsPage />,
        };
  return <>{mainOption[props.selectedOption]}</>;
}
