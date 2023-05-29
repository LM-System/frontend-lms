import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetUsers.css'
export default function GetUsers() {
const [usersData,setUsersData]=useState([])
const getUsersData= async ()=>{
  const result= await axios.get(process.env.REACT_APP_SERVER_URL+"getusers")
  setUsersData(result.data)
}
useEffect(()=>{
  getUsersData();
},[])
console.log(usersData)

return (
<>
<table >
<thead>
     <tr className="">
       <th>index</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Role</th>
       <th>Email</th>
       {/* <td>Update</td>
       <td>Delete</td> */}
     </tr>
</thead>
<tbody >
{
usersData.map((item,index)=>
<tr className={index % 2=== 0?"light-white-table":"white-table"} key={index}>
       <td >{item.id}</td>
       <td>{item.fname}</td>
       <td>{item.lname}</td>
       <td>{item.role}</td>
       <td>{item.email}</td>
       {/* <td>Update</td>
       <td>Delete</td> */}
     </tr>)
}
</tbody>
</table>
</>  )
}