import './Courses.css'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThisCourse from '../../../thisCourse/thisCourse';
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

  return ( 
    <>
    <Row xs={2} md={3} className="g-4">
      {showCourses.map((item, idx) => (
        <Col key={idx}>
          <Card onClick={()=>{sendThisCourse(item)}} className='card'>
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
     <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='card'>
            <Card.Img className='cardImage' variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" />
            <Card.Body className="cardBody">
              <Card.Title className='cardTitle'>Python</Card.Title>
              <Card.Text className='cardText'>
                this course is one o fthe most popular course, with more than 100 hrs, after this course you will be able to build any website in addition to building apps
                <Card.Text>
    
              </Card.Text>
              <Card.Text>
                start date: 20/5/2023
              </Card.Text>
              <Card.Text>
                End date: 20/5/2024
              </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <ThisCourse showFlag={show} handleclose={handleclose} thisCourseData={clickedCourse} fullscreen={fullscreen}/>
    </>
  )}