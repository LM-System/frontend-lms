import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './ControlPanel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  AddCircleOutlineIcon  from '@mui/icons-material/AddCircleOutline';
export default function ControlPanel(props) {


  const [userData,setUserData]=useState([])
  const [userId,setUserId]=useState("")
  const [user,setUser]=useState("")

  const [isAddUser,setIsAddUser]=useState(false)
  const [isClick,setIsClick]=useState(false)

  const [isStartLabel,setIsStartLabel]=useState(false)
  const [isEndLabel,setIsEndLabel]=useState(false)
  const [isBirthLabel,setIsBirthLabel]=useState(false)
  
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

  const [userInfo,setUserInfo]=useState({
    title:"",
    descreption:"",
    role:"",
    start_date:"",
    end_date:""
  })
  
  function LabelChange(event) {
    const {name, value} = event.target
    console.log(userInfo);
      setUserInfo(prevFormData => {
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
  },[userData,isClick,isAddUser])
  // useEffect(()=>{
  //   setIsAddUser(false)
  // },[isClick])
  // useEffect(()=>{
  //   setIsClick(false)
  // },[isAddUser])

    return (
  <>
  {isAddUser && <div className="crud">
    <h2 className='formTitleHide'>Add User Panel</h2>
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
  
    <button className='update-button crud-button' onClick={ async()=>{
              console.log(addUser)
              const data=await axios.post(`${process.env.REACT_APP_SERVER_URL}adminsignup`,addUser)
              setUserData(data.data)
              setIsAddUser(false)
           }}>Add</button>
              <button className='delete-button ms-2 crud-button' onClick={ async()=>{
              setIsAddUser(false)
           }}>Cancel</button>
  </div>}
 
  { isClick && <div className='crud'>
  <h2 className='formTitleHide'>Control Panel</h2>
  <TextField fullWidth label="First Name" value={userInfo.fname} onChange={LabelChange} name='fname' id="fullWidth" />
  <TextField fullWidth label="Last Name" value={userInfo.lname} onChange={LabelChange} name='lname' id="fullWidth" />
  <TextField fullWidth label="Email" value={userInfo.email} onChange={LabelChange} name='email' id="fullWidth" />
  <TextField fullWidth label="Role" value={userInfo.role} onChange={LabelChange} name='role' id="fullWidth" />
  <button className='update-button crud-button' onClick={ async()=>{
            const ItemRole=user.role;
            console.log(ItemRole);
            const data=await axios.put(`${process.env.REACT_APP_SERVER_URL}updateuser/${userId}`,userInfo)
            setUserData(data.data)
            setIsClick(false)
         }}>Update</button>
  <button className='delete-button ms-2 crud-button' onClick={ async()=>{
            setIsClick(false)
         }}>Cancel</button>
</div>}

  <table className="crudeTable">
  <thead> 
       <tr className="">
         <th className='thOfControlTable'>Index</th>
         <th className='thOfControlTable'>First Name</th>
         <th className='thOfControlTable'>Last Name</th>
         <th className='thOfControlTable'>Email</th>
         <th className='thOfControlTable'>Role</th>
         <th className='thOfControlTable'>Update</th>
         <th className='thOfControlTable'>Delete</th>
         <th className='plus_th'><AddCircleOutlineIcon className='ControlPanelcursor' onClick={()=>{
            setIsClick(false)
            setIsAddUser(true)
         }}/></th>
       </tr>
  </thead>
  <tbody >
  {
  userData.map((item,index)=>
  <tr className={index % 2=== 0?"ControlPanelLight":"ControlPanelwhite"} key={index}>
         <td className='thOfControlTable'>{index+1}</td>
         <td className='thOfControlTable'>{item.fname}</td>
         <td className='thOfControlTable'>{item.lname}</td>
         <td className='thOfControlTable'>{item.email}</td>
         <td className='thOfControlTable'>{item.role}</td>
         <td className='thOfControlTable'><button
          onClick={()=>{
              setIsAddUser(false) 
              setUserId(item.id)  ;
               setUser({role:item.role})  
               setUserInfo(item)  
               setIsClick(true)
                }
          } className='update-button'>Update</button></td>
         <td className='thOfControlTable'><button
          onClick={ async ()=>{
            setIsAddUser(false)
            const data=await axios.delete(`${process.env.REACT_APP_SERVER_URL}deleteuser/${item.id}`)
            setUserData(data.data)
          }
          } className='delete-button'>Delete</button></td>
                  <td className='plus_th'></td>
  
  
      </tr>)
  }
  </tbody>
  </table>
  </>  )
}