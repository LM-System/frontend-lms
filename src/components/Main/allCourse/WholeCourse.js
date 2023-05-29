import './WholeCourse.css'
import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import CourseContents from './CourseContents.js';
import CourseDescription from './CourseDescription.js';
import CourseTimeline from './CourseTimeline.js';



function AllCourse(props){
  
  const navSectionContents = {
     0: <CourseDescription darkMode={props.darkMode} thisCourseData={props.thisCourseData}/> ,
     1: <CourseContents darkMode={props.darkMode} thisCourseData={props.thisCourseData}/> ,
     2: <CourseTimeline darkMode={props.darkMode} thisCourseData={props.thisCourseData}/>
  }
  const [selectedNavOption, setSelectedNavOption] = useState(null)
  
console.log(selectedNavOption)
  function makeDiscSelected (){
 setSelectedNavOption(0)
  }
  function makeContSelected (){
    setSelectedNavOption(1)
  }
  function makeTimeSelected (){
    setSelectedNavOption(2)
  }


    return(
        <>
        
         <Modal
        size="lg"
        show={props.showFlag}
        onHide={props.handleclose}
      >
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {props.thisCourseData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='modalBody' className={`${props.darkMode ? 'dark' : ""}`}>
  
        <div class="thisNav">
          <div onClick={makeDiscSelected} className= {`${selectedNavOption ===   0 ? 'selectedOption' : ''} ${props.darkMode ? 'dark' : ""}`}>
            <div  className="bottons">
               Discription 
               </div>
            </div>
            <div onClick={makeContSelected} className= {`${selectedNavOption === 1 ? 'selectedOption' : ''} ${props.darkMode ? 'dark' : ""}`}>
              <div   className="bottons">
                Content
                </div>
                </div>
                <div onClick={makeTimeSelected} className= {`${selectedNavOption === 2 ? 'selectedOption' : ''} ${props.darkMode ? 'dark' : ""}`}>
                  <div className="bottons" id='timeLineHead'  >
                    Timeline</div>
                    </div>
                    </div>
                    <line/>

        <p></p>
        <Image className='modalImage' src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" rounded width='100%' />
        
        {/* <Image className='modalImage' src="https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png" rounded width='100%' /> */}
        <p></p>
       
        {navSectionContents[selectedNavOption || 0]}
     
        </Modal.Body>
        
      </Modal>
        </>
    )
}
export default AllCourse