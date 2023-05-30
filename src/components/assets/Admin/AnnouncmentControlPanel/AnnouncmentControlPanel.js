import './AnnouncmentControlPanel.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
  const Break = "   "
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
      <h2 className='formTitleHide'>Add Announcment</h2>}
      {isClicked &&
      <h2 className='formTitleHide'>Update Announcment </h2>}
      <p></p>
    
     <TextField className='inputItem' value={announcmentContent.anouncment_title} label="Announcment Title" type="text"  name="anouncment_title" onChange={LabelChange} />
    <p></p>
     <TextField className='inputItem' value={announcmentContent.anouncment_body} label="Announcment Body" type="text"  name="anouncment_body" onChange={LabelChange} />
     <p></p>
     {addIsClicked && <button 
        onClick={async()=>{ 
          setShowForm(false)
          setAddIsClicked(false)
          const serverUrl = `${process.env.REACT_APP_SERVER_URL}addanouncment`;
          const result = await axios.post(serverUrl,announcmentContent);
       }} className='update-button crud-button'>Add</button>}
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
          
       <button className='delete-button crud-button' onClick={ ()=>{
            setIsClicked(false)
            setAnnouncmentContent({
              anouncment_title:'',
              anouncment_body:''
            }
            )
            setShowForm(false)
            setAddIsClicked(false)
         }}>Cancel </button>
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
      <table className='crudeTable' >
<thead> 
     <tr className="">
       <th className='thOfControlTable'>Index</th>
       <th className='thOfControlTable'>Announcment Title</th>
       <th className='thOfControlTable'>Announcment Body</th>
       <th className='thOfControlTable'>Update</th>
       <th className='thOfControlTable'>Delete </th>
       <th className='plus_th'>  <AddCircleOutlineIcon className='cursor' onClick={()=>{
          setAddIsClicked(true)
          setIsClicked(false)
          setShowForm(true)
          console.log(addIsClicked)
       }}/></th>
     </tr>
</thead>
<tbody >
{
showAnnoucments.map((item,index)=>(
<tr className={index % 2=== 0?"light-white-table":"white-table"} key={index}>
       <td className='thOfControlTable'>{index+1}</td>
       <td className='thOfControlTable'>{item.anouncment_title}</td>
       <td className='thOfControlTable'>{item.anouncment_body}</td>
       <td className='thOfControlTable'><button
        onClick={()=>{
            scrollToTop()
            setAddIsClicked(false)
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
      
       
       
       
       
       <td className='thOfControlTable'><button
        onClick={async()=>{
          const ItemRole=item.role;
          console.log(ItemRole);
          const data=await axios.delete(`${process.env.REACT_APP_SERVER_URL}deleteanouncment/${item.id}`)
          setAnnouncmentsData(data.data)
       }} className='delete-button'>Delete</button></td>
       <td className='plus_th'></td>
  
    

     </tr>
     )
     )
}
</tbody>
</table>
    </>
    
  )
}