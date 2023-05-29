import Card from 'react-bootstrap/Card';

function CourseDescription(props){
  return(

<Card.Body className='discriptionBody'>
  <Card.Title>Discription:</Card.Title>
  <Card></Card>
  <p></p>
  <Card.Text>
  {props.thisCourseData.descreption}

  </Card.Text>
  
</Card.Body>

)}
export default CourseDescription
