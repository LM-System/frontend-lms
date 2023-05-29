import './CourseTimeline.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from 'react-bootstrap/Card';

function CourseTimeline(props){
  function fixdate(prop){
    if (prop !== null){
    console.log(prop)
    let indexofT = prop.indexOf('T')
    let result = prop.slice(0,indexofT)
    return result}
  }
  
return(

      <Card.Body className='timelineBody'>
        <Card.Title className='coursesCardTitle'>Timeline:</Card.Title>
        <p></p>
        <Card.Text>
        <Timeline className={`${props.darkMode ? 'dark' : ""}`} position="alternate">
      <TimelineItem>
        <TimelineOppositeContent className="textSecondary">
          {fixdate(props.thisCourseData.start_date)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Start date</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="textSecondary">
        2023-05-10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Preperation course</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="textSecondary">
        2023-05-11
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Advance course</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="textSecondary">
        {fixdate(props.thisCourseData.end_date)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>End date</TimelineContent>
      </TimelineItem>
    </Timeline>
        </Card.Text>
      </Card.Body>
      
)}
export default CourseTimeline