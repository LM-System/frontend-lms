import Card from 'react-bootstrap/Card';

function CourseDescription(props){
  return(

<Card.Body className= {`${props.darkMode ? 'dark' : ""}`}
>
  {/* <Card.Title id='coursesCardTitle'>Discription:</Card.Title> */}
 
  <Card.Text id='courseDesText'>
  {props.thisCourseData.descreption[0].toUpperCase() + props.thisCourseData.descreption.slice(1)}

  </Card.Text>
  
</Card.Body>

)}
export default CourseDescription
