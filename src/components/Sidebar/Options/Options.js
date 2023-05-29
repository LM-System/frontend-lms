import './Options.css'
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export default function Options(props) {
  
  const icons = {
    1: <SchoolIcon/>,
    2: <CampaignIcon/>,
    3: <PersonRoundedIcon/>,
    4: <InfoRoundedIcon/>,
  }

  function firstLetterUpperCase(str) {
    let newArr = str.split("");
    newArr[0] = newArr[0].toUpperCase();
    return newArr.join("");
  }

  function toggleSelected(id) {
    sessionStorage.setItem('selectedOption', JSON.stringify(id))
    props.setSelectedOption(prevOption => id)
  }

  const listElements = props.sidebarOptions.map((option) => (
    <li
      onClick={() => toggleSelected(option.id)}
      key={option.id}
      className={`${option.id === props.selectedOption ? "selected" : ""} ${
        props.darkMode ? "dark" : ""
      } `}
    >
      {icons[option.id]}
      <span>{`${firstLetterUpperCase(option.label)}`}</span>
    </li>
  ));

  return <ul className="side-bar-options">{listElements}</ul>;
}
