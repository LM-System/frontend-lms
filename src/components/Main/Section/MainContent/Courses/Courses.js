import './Courses.css'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import WholeCourse from '../../../allCourse/WholeCourse';
import { useEffect,useState } from "react"


export default function Courses(props) {
  const [showCourses,setShowCourses]= useState([]) 
  const showResult = async ()=>{
  const localStor = localStorage.getItem('user_data')
  const arrayLocal = JSON.parse(localStor)
  const idNum = arrayLocal.id
  const serverURL =`${process.env.REACT_APP_SERVER_URL}usercourse/${idNum}` 
  console.log(serverURL)
 const courses = await axios.get(serverURL)
 setShowCourses (courses.data) 
}
useEffect(()=>{
 showResult();
},[])
const [clickedCourse,setClickedCourse]= useState({})
const [fullscreen, setFullscreen] = useState(true);
const [show, setShow] = useState(false);
const sendThisCourse = (item)=>{
  setClickedCourse(item);
  setShow(true);
  setFullscreen(item);

  console.log(clickedCourse)
}
const handleclose = () => {
  setShow(false);
}

  return ( 
    <>
   
    <div id='ag-format-container' className={` ${props.darkMode ? 'dark' : ""}`}>
  <div className="ag-courses_box"></div>
      {showCourses.map((item, idx) => (
         <div className="ag-courses_item">
         <div onClick={()=>{sendThisCourse(item)}} className="ag-courses-item_link">
           <div className="ag-courses-item_bg"></div>
   
           <div className="ag-courses-item_title">
             {item.title}
           </div>
   
           <div className="ag-courses-item_date-box">
             Start:
             <span className="ag-courses-item_date">
               04.11.2022
             </span>
           </div>
         </div>
       </div>
      ))}
     
       
      </div>
      
    
    <WholeCourse darkMode={props.darkMode} showFlag={show} handleclose={handleclose} thisCourseData={clickedCourse} fullscreen={fullscreen}/>
    </>
  )}