import './Courses.css'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navigate } from 'react-router-dom';
import { useEffect,useState } from "react"
export default function Courses() {
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
  return ( 
    <Row xs={2} md={3} className="g-4">
      {showCourses.map((item, idx) => (
        <Col key={idx}>
          <Card onClick={Navigate} className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>{item.title}</Card.Title>
              <Card.Text className='cardText'>
                {item.descreption}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
     
    </Row>
  )}
