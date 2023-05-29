import "./Aboutus.css";
import AbuEssa from "../../../../assets/images/AbuEssa.jpeg";
import Helmi from "../../../../assets/images/Helmi.png";
import Zaytowna from "../../../../assets/images/ghyath.jpeg";
import Malek from "../../../../assets/images/malek.jpg";

import AboutCard from "./AboutCard/AboutCard";
/*
https://www.linkedin.com/in/mohammad-a-8903911a0/
https://github.com/MohammedAbuEssa
https://www.linkedin.com/in/helmiqatqat/
https://github.com/Helmi-Qatqat
https://www.linkedin.com/in/mhd-keath-zaytowna-407519258
https://github.com/Mohammad-Keath
https://www.linkedin.com/in/malek-al-sheekh-hasan-1a451a25a
https://github.com/MalekHasan
<i classNameName="fab fa-brands fa-linkedin fill-icon-linkedin"></i>
target="_blank"
*/
export default function Aboutus(props) {
  const aboutObj =
  [
    {
      name: 'Mohammad AbuEssa',
      img_path: AbuEssa,
      linkedIn: 'https://www.linkedin.com/in/mohammad-a-8903911a0/',
      gitHub: 'https://github.com/MohammedAbuEssa'
    },
    {
      name: 'Helmi Qatqat',
      img_path: Helmi,
      linkedIn: 'https://www.linkedin.com/in/helmiqatqat/',
      gitHub: 'https://github.com/Helmi-Qatqat'
    },
    {
      name: 'Mohammad Keath',
      img_path: Zaytowna,
      linkedIn: 'https://www.linkedin.com/in/mhd-keath-zaytowna-407519258',
      gitHub: 'https://github.com/Mohammad-Keath'
    },
    {
      name: 'Malek Hasan',
      img_path: Malek,
      linkedIn: 'https://www.linkedin.com/in/malek-al-sheekh-hasan-1a451a25a',
      gitHub: 'https://github.com/MalekHasan'
    }
  ];
  return (
  <div className={` master-container ${props.darkMode ? 'dark' : ""}`}>
    <div className="aboutus-container">
      {aboutObj.map(card => (
        <AboutCard {...card}/>
      ))}
    </div>
</div>
  );
}