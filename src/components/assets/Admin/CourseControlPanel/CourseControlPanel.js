import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './CourseControlPanel.css'
export default function CourseControlPanel() {


const [userData,setUserData]=useState([])
const [course,setCourse]=useState({})
const [userId,setUserId]=useState("")
const [courseInfo,setcourseInfo]=useState({
  title:"",
  descreption:"",
  role:"",
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
<div className='crud'>
  <h2>Courses Control Panel</h2>
  <TextField fullWidth label="Course Title"  onChange={LabelChange} name='fname' id="fullWidth" />
  <TextField fullWidth label="Course Descreption"  onChange={LabelChange} name='lname' id="fullWidth" />
  <TextField fullWidth label="Users Role"  onChange={LabelChange} name='email' id="fullWidth" />
  <button className='update-button crud-button' onClick={ async()=>{
            const ItemRole=course.role;
            console.log(ItemRole);
            const data=await axios.put(`${process.env.REACT_APP_SERVER_URL}updateuser/${userId}`,courseInfo)
            setUserData(data.data)

         }}>Add</button>
</div>
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
                  }
        } className='update-button'>Add Course</button></td>

    </tr>)
}
</tbody>
</table>
</>  )
}