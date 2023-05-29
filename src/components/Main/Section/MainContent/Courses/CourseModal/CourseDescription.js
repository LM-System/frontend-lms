import Card from 'react-bootstrap/Card';

function CourseDescription(props){
  return(

<Card.Body className='discriptionBody'>
  <Card.Title className='coursesCardTitle'>Discription:</Card.Title>
 
  <p></p>
  <Card.Text>
  {props.thisCourseData.descreption}

  </Card.Text>
  
</Card.Body>

)}
export default CourseDescription
