import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './ControlPanel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  AddCircleOutlineIcon  from '@mui/icons-material/AddCircleOutline';
export default function ControlPanel(props) {


  const [userData,setUserData]=useState([])
  const [course,setCourse]=useState({})
  const [userId,setUserId]=useState("")
  const [isAddCourse,setIsAddCourse]=useState(false)
  const [isAddUser,setIsAddUser]=useState(false)
  const [addUser,setAddUser]=useState({
    title:"",
    descreption:"",
    capacity:"",
    start_date:"",
    end_date:"",
    role:"",
    email:"",
    password:"",
    fname:"",
    lname:"",
    birth_date:"",
    gender:""
  })
  const [isStartLabel,setIsStartLabel]=useState(false)
  const [isEndLabel,setIsEndLabel]=useState(false)
  const [isBirthLabel,setIsBirthLabel]=useState(false)
  const [courseInfo,setcourseInfo]=useState({
    title:"",
    descreption:"",
    role:"",
    start_date:"",
    end_date:""
  })
  
  function LabelChangeCourse(event) {
    const {name, value} = event.target
    // console.log(courseInfo);
        setcourseInfo(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
  }
  function LabelChangeUser(event) {
    const {name, value} = event.target
    // console.log(courseInfo);
    setAddUser(prevFormData => {
      return {
          ...prevFormData,
          [name]: value,
      }
  })
  }
  // console.log(props);
  
  const getuserData= async ()=>{
    const result= await axios.get(process.env.REACT_APP_SERVER_URL+"getusers")
    setUserData(result.data)
  }
  useEffect(()=>{
    getuserData();
  },[userData])

    return (
  <>
  {isAddUser && <div className="ControlPanelTableCrud">
    <h2 className='ControlPanelh2-crud'>Add User Control Panel</h2>
    <TextField required fullWidth label="First Name"  onChange={LabelChangeUser} name='fname' id="fullWidth" />
    <TextField required fullWidth label="Last Name"  onChange={LabelChangeUser} name='lname' id="fullWidth" />
    <TextField required fullWidth label="Email"  onChange={LabelChangeUser} name='email' id="fullWidth" />
    <TextField required fullWidth label="Password"  onChange={LabelChangeUser} name='password' id="fullWidth" />
    <TextField required fullWidth label={isBirthLabel} type='date' onFocus={()=>setIsBirthLabel("Birth Date")} onBlur={()=>setIsBirthLabel("")} onChange={LabelChangeUser} name='birth_date' id="fullWidth" />
    <TextField required fullWidth label="Gender"  onChange={LabelChangeUser} name='gender' id="fullWidth" />
    <TextField required fullWidth label="Course Title"  onChange={LabelChangeUser} name='title' id="fullWidth" />
    <TextField required fullWidth label="Course Descreption"  onChange={LabelChangeUser} name='descreption' id="fullWidth" />
    <TextField required fullWidth label="Capacity" type='number' onChange={LabelChangeUser} name='capacity' id="fullWidth" />
    <TextField required fullWidth label={isStartLabel} type='date' onFocus={()=>setIsStartLabel("Start Date")} onBlur={()=>setIsStartLabel("")} onChange={LabelChangeUser} name='start_date' id="fullWidth" />
    <TextField required fullWidth label={isEndLabel} type='date'  onFocus={()=>setIsEndLabel("End Date")} onBlur={()=>setIsEndLabel("")} onChange={LabelChangeUser} name='end_date' id="fullWidth" />
    <TextField required fullWidth label="Users Role"  onChange={LabelChangeUser} name='role' id="fullWidth" />
  
    <button className='ControlPanelupdate-button ControlPanelcrud-button' onClick={ async()=>{
              console.log(addUser)
              const data=await axios.post(`${process.env.REACT_APP_SERVER_URL}adminsignup`,addUser)
              setUserData(data.data)
              setIsAddUser(false)
  
           }}>Add</button>
              <button className='ControlPaneldelete-button ms-2 ControlPanelcrud-button' onClick={ async()=>{
              setIsAddUser(false)
           }}>Cancel</button>
  </div>}
  {isAddCourse && <div className="ControlPanelTableCrud">
    <h2 className='ControlPanelh2-crud'>Courses Control Panel</h2>
    <TextField fullWidth label="Course Title"  onChange={LabelChangeCourse} name='title' id="fullWidth" />
    <TextField fullWidth label="Course Descreption"  onChange={LabelChangeCourse} name='descreption' id="fullWidth" />
    <TextField fullWidth label={isStartLabel} type='date' onFocus={()=>setIsStartLabel("Start Date")} onBlur={()=>setIsStartLabel("")} onChange={LabelChangeCourse} name='start_date' id="fullWidth" />
    <TextField fullWidth label={isEndLabel} type='date' onFocus={()=>setIsEndLabel("End Date")} onBlur={()=>setIsEndLabel("")} onChange={LabelChangeCourse} name=' end_date' id="fullWidth" />
    <TextField fullWidth label="Users Role" value={courseInfo.role} onChange={LabelChangeCourse} name='role' id="fullWidth" />
  
    <button className='ControlPanelupdate-button ControlPanelcrud-button' onClick={ async()=>{
              const ItemRole=course.role;
              // console.log(ItemRole);
              const data=await axios.post(`${process.env.REACT_APP_SERVER_URL}admincourse/${userId}`,courseInfo)
              setIsAddCourse(false)
           }}>Update</button>
             <button className='ControlPaneldelete-button ms-2 ControlPanelcrud-button' onClick={ async()=>{
              setIsAddCourse(false)
           }}>Cancel</button>
  </div>}
  <table className="ControlPanelTable">
  <thead> 
       <tr className="">
         <th>index</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Role</th>
         <th>Email</th>
         <th>Update</th>
         <th>Delete</th>
         <th className='plus_th'><AddCircleOutlineIcon className='ControlPanelcursor' onClick={()=>{
            setIsAddUser(true)
         }}/></th>
       </tr>
  </thead>
  <tbody >
  {
  userData.map((item,index)=>
  <tr className={index % 2=== 0?"ControlPanelLight":"ControlPanelwhite"} key={index}>
         <td >{item.id}</td>
         <td>{item.fname}</td>
         <td>{item.lname}</td>
         <td>{item.email}</td>
         <td>{item.role}</td>
         <td><button
          onClick={()=>{
              setUserId(item.id)  ;
               setcourseInfo({role:item.role})  
               setIsAddCourse(true) 
              console.log(courseInfo);  }
          } className='ControlPanelupdate-button'>Update</button></td>
         <td><button
          onClick={ async ()=>{
            const data=await axios.delete(`${process.env.REACT_APP_SERVER_URL}deleteuser/${item.id}`)
            setUserData(data.data)
          }
          } className='ControlPaneldelete-button'>Delete</button></td>
                  <td className='plus_th'></td>
  
  
      </tr>)
  }
  </tbody>
  </table>
  </>  )
}