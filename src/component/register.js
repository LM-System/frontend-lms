import "./register.css"
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
function Register(){
    return(
        <>    
    <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p id="signup" className="lead fw-normal mb-0 me-3">sign up a new account</p>

      

    </div>
    <br></br>
    <br></br>


    <MDBInput wrapperClass='mb-4' label='First name' id='formControlLg' type='varchar' size=""/>
    <MDBInput wrapperClass='mb-4' label='Last name' id='formControlLg' type='varchar' size=""/>
    <MDBInput wrapperClass='mb-4' label='Date of birth' id='formControlLg' type='date' size=""/>
    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size=""/>
    <MDBInput wrapperClass='mb-4' label='New Password' id='formControlLg' type='password' size=""/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='true' id='flexCheckDefault' label='student' />
      <MDBCheckbox name='flexCheck' value='true' id='flexCheckDefault' label='teacher' />
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn  className="mb-0 px-5" size='lg'>sign up</MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">you already have an account?  . <a href="/login" className="link-danger">log in</a></p>
    </div>

  </MDBCol>

</MDBRow>

{/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"> */}

  {/* <div className="text-white mb-3 mb-md-0">
    Copyright © 2020. All rights reserved.
  </div> */}

  {/* <div>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
      <MDBIcon fab icon='facebook-f' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='twitter' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='google' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='linkedin-in' size="md"/>
    </MDBBtn>

  </div> */}

{/* </div> */}

</MDBContainer>
  

        </>
    )
}
export default Register;