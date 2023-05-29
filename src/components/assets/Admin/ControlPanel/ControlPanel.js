import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './ControlPanel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ControlPanel(props) {


const [usersData,setUsersData]=useState([])
const [user,setUser]=useState({})
const [isClick,setIsClick]=useState(false)
const [userInfo,setUserInfo]=useState({
  fname:"",
  lname:"",
  email:"",
  role:"",
  status:"off",

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
const getUsersData= async ()=>{
  const result= await axios.get(process.env.REACT_APP_SERVER_URL+"getusers")
  setUsersData(result.data)
}
useEffect(()=>{
  getUsersData();
},[])
  return (
<>
{ isClick && <div className= {`${props.darkMode ? 'dark crud' : "crud"}`}>
  <h2>Control Panel</h2>
  <TextField className='controlInput' fullWidth label="First Name" value={userInfo.fname} onChange={LabelChange} name='fname' id="fullWidth" />
  <TextField className='controlInput' fullWidth label="Last Name" value={userInfo.lname} onChange={LabelChange} name='lname' id="fullWidth" />
  <TextField className='controlInput' fullWidth label="Email" value={userInfo.email} onChange={LabelChange} name='email' id="fullWidth" />
  <TextField className='controlInput' fullWidth label="Role" value={userInfo.role} onChange={LabelChange} name='role' id="fullWidth" />

  <button className='update-button crud-button' onClick={ async()=>{
            const ItemRole=user.role;
            console.log(ItemRole);
            const data=await axios.put(`${process.env.REACT_APP_SERVER_URL}updateuser/${user.id}`,userInfo)
            setUsersData(data.data)
            setIsClick(false)

         }}>Update</button>
  <button className='delete-button ms-2 crud-button' onClick={ async()=>{
            setIsClick(false)
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
       <th>Update</th>
       <th>Delete</th>
     </tr>
</thead>
<tbody >
{
usersData.map((item,index)=>
<tr className={index % 2=== 0?"light-white-table":"white-table"} key={index}>
       <td >{index+1}</td>
       <td>{item.fname}</td>
       <td>{item.lname}</td>
       <td>{item.role}</td>
       <td>{item.email}</td>
       <td><button
        onClick={()=>{
            setUserInfo({
              fname:item.fname,
              lname:item.lname,
              email:item.email,
              role:item.role,
              status:"off"
            })
            setUser(item)
            setIsClick(true)
          }
        } className='update-button'>Update</button></td>
       <td><button
        onClick={async()=>{
          const ItemRole=item.role;
          console.log(ItemRole);
          const data=await axios.delete(`${process.env.REACT_APP_SERVER_URL}deleteuser/${item.id}`)
          setUsersData(data.data)
       }} className='delete-button'>Delete</button></td>
     </tr>)
}
</tbody>
</table>
</>  )
}