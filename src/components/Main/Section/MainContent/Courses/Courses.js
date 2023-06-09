import './Courses.css'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseModal from './CourseModal/CourseModal';
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
function fixdate(prop){
  if (prop !== null){
  console.log(prop)
  let indexofT = prop.indexOf('T')
  let result = prop.slice(0,indexofT)
  return result}
}

  return ( 
    <>
   
    <div id='ag-format-container' className={` ${props.darkMode ? 'dark' : ""}`}>
  <div className="ag-courses_box"></div>
      {showCourses.map((item, idx) => (
         <div className={`ag-courses_item ${props.darkMode ? 'dark' : ""}`}>
         <div onClick={()=>{sendThisCourse(item)}} className="ag-courses-item_link">
           <div className="ag-courses-item_bg"></div>
   
           <div className="ag-courses-item_title">
             {item.title[0].toUpperCase() + item.title.slice(1)}
           </div>
   
           <div className="ag-courses-item_date-box">
             
             <span className="ag-courses-item_date">
             Start: {fixdate(item.start_date)}
             </span>
           </div>
         </div>
       </div>
      ))}
     
       
      </div>
      
    
    <CourseModal darkMode={props.darkMode} showFlag={show} handleclose={handleclose} thisCourseData={clickedCourse} fullscreen={fullscreen}/>
    </>
  )}