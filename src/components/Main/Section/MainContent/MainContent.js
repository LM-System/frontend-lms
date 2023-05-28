import Dashboard from "./Dashboard/Dashboard";
import Courses from "./Courses/Courses";
import Announcements from "./Annoucments/Announcments";
import Settings from "./Settings/Settings";
import ControlPanel from "../../../assets/Admin/ControlPanel/ControlPanel";
import GetUsers from "../../../assets/Admin/GetUsers/GetUsers";
import AboutUsPage from "./Aboutus/AboutUsPage";

export default function MainContent(props) {
  let role = JSON.parse(localStorage.getItem("user_data")).role;

  const mainOption =
    role === "admin"
      ? {
          1: <ControlPanel />,
          2: <GetUsers />,
          3: <AboutUsPage />,
        }
      : {
          1: <Dashboard />,
          2: <Courses />,
          3: <Announcements />,
          4: <Settings />,
          5: <AboutUsPage />,
        };
  return <>{mainOption[props.selectedOption]}</>;
}
