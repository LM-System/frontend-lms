import './thisCourse.css'
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function ThisCourse(props){
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

    return(
        <>
         <Modal
        size="lg"
        show={props.showFlag}
        onHide={props.handleclose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {props.thisCourseData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='modalBody' className={`${props.darkMode ? 'dark' : ""}`}>
        
        {/* <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='outline-secondary'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
        
{/* <p></p> */}

        {/* <Nav variant="tabs" defaultActiveKey="#first"> 
          <Nav.Item>
            <Nav.Link className='bottons' href="#first" > Discription </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='bottons' href="#secound" >Content</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link className='bottons' href="#third" >
              Timeline
            </Nav.Link>
          </Nav.Item>
        </Nav> */}
        <p></p>
        <Image className='modalImage' src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" rounded width='100%' />
        <p></p>
    
        <div className='wholeBody'>
      <Card.Body className='discriptionBody'>
        <Card.Title>Discription:</Card.Title>
        <Card.Text>
        This Specialization is intended for the learner with no previous programming experience or the career changer transitioning to software development. JavaScript is generally the first programming language you will need to learn and this Specialization will help you practice and build your skills through a gentle progression of modules and courses. 


        </Card.Text>
        
      </Card.Body>

    

      <Card.Body className='contentsBody'>
        <Card.Title>Content:</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <Card.Body className='timelineBody'>
        <Card.Title>Timeline:</Card.Title>
        <Card.Text>
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.danger">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
        </Card.Text>
      </Card.Body>
      </div>
         
         

        </Modal.Body>
        
      </Modal>
        
        </>
    )
}
export default ThisCourse