import "./Sidebar.css";
import { Link } from "react-router-dom";
import Options from "./Options/Options";

export default function Sidebar(props) {
  let role = JSON.parse(localStorage.getItem("user_data")).role;
  console.log(role);
  const sidebarOptions =
    role === "admin"
      ? [
          { id: 1, label: "Control Panel" },
          { id: 2, label: "Course Control Panel" },
          // { id: 3, label: "Users" },
          { id: 4, label: "Announcment Control Panel" },
          { id: 5, label: 'about us'}
        ]
      : [
        { id: 1, label: 'courses'},
        { id: 2, label: 'annoucments' },
        { id: 3, label: 'profile'},
        { id: 4, label: 'about us'}
      ];

  return (
    <>
      <div className={`side-bar ${props.isSidebarVisible === true ? 'hidden' : ""} ${props.darkMode ? 'dark' : ""}`}>
        <Link to={'/'}>
        <div className='logo'>
          <img src={require("../assets/images/logo.png")} alt=''/>
          <span style={{fontSize: '1.2rem'}}>Root Academy</span>
        </div>
        </Link>
        <Options
          sidebarOptions={sidebarOptions}
          setSelectedOption={props.setSelectedOption}
          selectedOption={props.selectedOption}
          darkMode={props.darkMode}
        />
      </div>
    </>
  );
}
