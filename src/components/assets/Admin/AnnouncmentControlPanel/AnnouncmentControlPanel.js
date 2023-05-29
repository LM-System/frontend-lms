import './AnnouncmentControlPanel.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from '@mui/material';
export default function AnnouncmentControlPanel(props) {
  const [announcmentNum,setAnnouncmentNum]=useState(0)
  const [announcmentsData,setAnnouncmentsData]=useState([])
  const [showAnnoucments, setShowAnnoucments] = useState([]);
  const [isClicked,setIsClicked]=useState(false)
  const [showForm,setShowForm]=useState(false)
  const [addIsClicked,setAddIsClicked]=useState(false)
  const [announcmentIndex,setAnnouncmentIndex]=useState(0)

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getanouncment`;
    const result = await axios.get(serverUrl);
    setShowAnnoucments(result.data);
  };

  const [announcmentContent,setAnnouncmentContent]=useState({
    anouncment_title:"",
    anouncment_body:"",
   
  })
  function LabelChange(event) {
    const {name, value} = event.target
      setAnnouncmentContent(prevFormData => {
       
            return {
                ...prevFormData,
                [name]: value,
            }
        })
  
  }
  function scrollToTop () {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  // console.log(announcmentNum)
  useEffect(() => {
    sendReq();
  }, [showAnnoucments]);
  return (
    <>
     {showForm && <div className= {`${props.darkMode ? 'dark crud' : "crud"}`}>
      {addIsClicked &&
      <p className='FormUp'>send an announcment</p>}
      {isClicked &&
      <p className='FormUp'>update announcment with index of {announcmentIndex+1} </p>}
      <p></p>
    
     <TextField className='inputItem' value={announcmentContent.anouncment_title} label="announcment title" type="text"  name="anouncment_title" onChange={LabelChange} />
    <p></p>
     <TextField className='inputItem' value={announcmentContent.anouncment_body} label="announcment body" type="text"  name="anouncment_body" onChange={LabelChange} />
     <p></p>
     {addIsClicked && <button 
        onClick={async()=>{ 
          const serverUrl = `${process.env.REACT_APP_SERVER_URL}addanouncment`;
          const result = await axios.post(serverUrl,announcmentContent);
       }} className='update-button crud-button'>send</button>}
       {isClicked &&
       <button className='update-button crud-button' onClick={ async()=>{
            const serverUrl = `${process.env.REACT_APP_SERVER_URL}updateanouncment/${announcmentNum}`;
            const result = await axios.put(serverUrl,announcmentContent);
            setIsClicked(false)
            setShowForm(false)
            setAnnouncmentContent({
              anouncment_title:'',
              anouncment_body:''
            }
            )
         }}>Update</button>}
          {isClicked &&
       <button className='update-button crud-button' onClick={ ()=>{
            setIsClicked(false)
            setAnnouncmentContent({
              anouncment_title:'',
              anouncment_body:''
            }
            )
            setShowForm(false)
         }}>cancel update</button>}
         <p></p>
         </div>}
    
     {/* <div className="grid-container ">
        {showAnnoucments.map((item, idx) => (
          <div className="row">
            <div className="card">
              <h4>{item.anouncment_title}</h4>
              <p>{item.anouncment_body}</p>
            </div>
          </div>
        ))}
      </div> */}
      <table >
<thead> 
     <tr className="">
       <th>index</th>
       <th>announcment title</th>
       <th>announcment body</th>
       <th>Update</th>
       <th>Delete</th>
     </tr>
</thead>
<tbody >
{
showAnnoucments.map((item,index)=>(
<tr className={index % 2=== 0?"light-white-table":"white-table"} key={index}>
       <td >{index+1}</td>
       <td>{item.anouncment_title}</td>
       <td>{item.anouncment_body}</td>
       <td><button
        onClick={()=>{
            scrollToTop()
            setIsClicked(true)
            setAnnouncmentNum(item.id)
            setAnnouncmentIndex(index)
            setShowForm(true)
            setAnnouncmentContent({
              anouncment_title:item.anouncment_title,
              anouncment_body:item.anouncment_body
            }
            )
           
          }
        } className='update-button'>Update</button></td>
      
       
       
       
       
       <td><button
        onClick={async()=>{
          const ItemRole=item.role;
          console.log(ItemRole);
          const data=await axios.delete(`${process.env.REACT_APP_SERVER_URL}deleteanouncment/${item.id}`)
          setAnnouncmentsData(data.data)
       }} className='delete-button'>Delete</button></td>
    

     </tr>
     )
     )
}
</tbody>
</table>
    </>
    
  )
}