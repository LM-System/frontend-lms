import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
function Courses(){
    const handleEnroll=()=>{

    }
    const handleFav = () =>{

    }

    return(
        <>
    <Row xs={1} md={4} className="g-4">
    {/* {Data.map((item, ) => ( */}
        <Col >
        <Card>
          <Card.Img variant="top" src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fjavarevisited.blogspot.com%2F2018%2F06%2Ftop-10-courses-to-learn-javascript-in.html&psig=AOvVaw01NtS3J8M1FtIhn2EFpmSc&ust=1684849230577000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiNttOGif8CFQAAAAAdAAAAABAE' />
          <Card.Body>
            <Card.Title>JS course</Card.Title>
            <Card.Text>
              <p>starting date : 17-10-2020</p>
               <p>Ending date : 17-2-2022</p>
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={handleEnroll}>Enroll in this course</Button>
            <Button variant="primary" onClick={handleFav}>Add to Favourite</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>
    {/* ))} */}
  </Row>
        </>
    )
}
export default Courses