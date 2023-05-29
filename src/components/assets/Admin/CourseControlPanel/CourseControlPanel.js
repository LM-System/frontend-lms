import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './CourseControlPanel.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CourseControlPanel() {


const [userData,setUserData]=useState([])
const [course,setCourse]=useState({})
const [userId,setUserId]=useState("")
const [isAdd,setIsAdd]=useState(false)
const [isStartLabel,setIsStartLabel]=useState(false)
const [isEndLabel,setIsEndLabel]=useState(false)
const [courseInfo,setcourseInfo]=useState({
  title:"",
  descreption:"",
  role:"",
  start_date:"",
  end_date:""
})

function LabelChange(event) {
  const {name, value} = event.target
  console.log(courseInfo);
    setcourseInfo(prevFormData => {
          return {
              ...prevFormData,
              [name]: value,
          }
      })

}
const getuserData= async ()=>{
  const result= await axios.get(process.env.REACT_APP_SERVER_URL+"getusers")
  setUserData(result.data)
}
useEffect(()=>{
  getuserData();
},[])
  return (
<>
{isAdd && <div className='crud'>
  <h2 className='formTitleHide'>Courses Control Panel</h2>
  <TextField fullWidth label="Course Title"  onChange={LabelChange} name='title' id="fullWidth" />
  <TextField fullWidth label="Course Descreption"  onChange={LabelChange} name='descreption' id="fullWidth" />
  <TextField fullWidth label={isStartLabel} type='date' onFocus={()=>setIsStartLabel("Start Date")} onBlur={()=>setIsStartLabel("")} onChange={LabelChange} name='start_date' id="fullWidth" />
  <TextField fullWidth label={isEndLabel} type='date' onFocus={()=>setIsEndLabel("End Date")} onBlur={()=>setIsEndLabel("")} onChange={LabelChange} name=' end_date' id="fullWidth" />
  <TextField fullWidth label="Users Role" value={courseInfo.role} onChange={LabelChange} name='role' id="fullWidth" />

  <button className='update-button crud-button' onClick={ async()=>{
            const ItemRole=course.role;
            console.log(ItemRole);
            const data=await axios.post(`${process.env.REACT_APP_SERVER_URL}admincourse/${userId}`,courseInfo)
            setIsAdd(false)
         }}>Add</button>
           <button className='delete-button ms-2 crud-button' onClick={ async()=>{
            setIsAdd(false)
         }}>Cancel</button>
</div>}
<table >
<thead> 
     <tr className="">
       <th>index</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Role</th>
       <th>Email</th>
       <th>Add Course</th>
     </tr>
</thead>
<tbody >
{
userData.map((item,index)=>
<tr className={index % 2=== 0?"light-white-table":"white-table"} key={index}>
       <td >{index+1}</td>
       <td>{item.fname}</td>
       <td>{item.lname}</td>
       <td>{item.role}</td>
       <td>{item.email}</td>
       <td><button
        onClick={()=>{
            setUserId(item.id)  ;
             setcourseInfo({role:item.role})  
             setIsAdd(true) 
            console.log(courseInfo);  }
        } className='update-button'>Add Course</button></td>

    </tr>)
}
</tbody>
</table>
</>  )
}