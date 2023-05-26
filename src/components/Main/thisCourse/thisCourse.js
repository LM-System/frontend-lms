import './thisCourse.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function ThisCourse(props){

    return(
        <>
            <Modal
        show={props.showFlag}
        onHide={props.handleclose}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title >
           {props.thisCourseData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image className='modalImage' src="https://www.classcentral.com/report/wp-content/uploads/2022/06/JavaScript-BCG-Banner-icons.png" rounded width='100%' />
          <p>
          {props.thisCourseData.descreption}
          </p>
        </Modal.Body>
        <Button className='button' variant="secondary" size='sm' > Visit course page </Button>
      </Modal>
      
        
        </>
    )
}
export default ThisCourse