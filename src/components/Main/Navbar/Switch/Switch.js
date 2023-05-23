import "./Switch.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function SwitchButton(props) {
  return (
    <>
      <span className={`rack-bar ${ props.darkMode ? 'dark' : ""}`}>
        <span className={`rack-circle ${ props.darkMode ? 'dark' : ""}`} onClick={props.darkModeToggle}>
          {props.darkMode && <DarkModeIcon/>}
          {!props.darkMode && <LightModeIcon/>}
        </span>
      </span>
    </>
  );
}