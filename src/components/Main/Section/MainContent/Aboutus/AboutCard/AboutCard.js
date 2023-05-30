import { Link } from "react-router-dom"

export default function AboutCard(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="img"><img src={props.img_path} alt=""/></div>
        <div className="cardContent">
          <h3>{props.name}<br/><span>{props.member_major}</span></h3>
        </div>
      </div>
      <ul className="sci">
        <li >
          <Link target="_blank" to={props.linkedIn}><i className="fab fa-brands fa-linkedin fill-icon-linkedin" aria-hidden="true" ></i></Link>
        </li>
        <li >
          <Link target="_blank" to={props.gitHub}><i className="fab fa-brands fa-github fill-icon-github" aria-hidden="true"></i></Link>
        </li>
      </ul>
  </div>
  )
}