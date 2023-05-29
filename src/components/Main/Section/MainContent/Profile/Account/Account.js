import './Account.css'
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import Face4RoundedIcon from '@mui/icons-material/Face4Rounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../../../assets/Loading/Loading';

export default function Account(props) {
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('user_data')))
  const [passVisOne, setPassVisOne] = useState(false)
  const [passVisTwo, setPassVisTwo] = useState(false)
  const [passVisThree, setPassVisThree] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [isNotMatch, setIsNotMatch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const passwordShowStyle = {
    WebkitTextSecurity: 'none'
  }
  const passwordHideStyle = {
    WebkitTextSecurity: 'disc'
  }
  
  async function saveHandler() {
    setIsLoading(true)
    const newPassword = document.querySelector('.new-password').textContent
    const confirmPassword = document.querySelector('.confirm-password').textContent
    if(newPassword === confirmPassword) {
      const user = JSON.parse(localStorage.getItem('user_data'))
      const body = {...user, password: newPassword}
      await axios.put(`${process.env.REACT_APP_SERVER_URL}userinformtion/${user.id}`, body)
      localStorage.setItem('user_data', JSON.stringify(body))
      setUserDetails(JSON.parse(localStorage.getItem('user_data')))
      setIsNotMatch(false)
      setIsLoading(false)
      cancleHandler()
    } else {
      console.log(newPassword, confirmPassword)
      setIsNotMatch(true)
      setIsLoading(false)
    }
  }
  useEffect(()=> {

  }, [userDetails])
  function cancleHandler() {
    document.querySelector('.new-password').textContent = ''
    document.querySelector('.confirm-password').textContent= ''
    setChangePassword(false)
    setPassVisTwo(false)
    setPassVisThree(false)
  }

  return (
  <>
  <div className={`user-info ${ props.darkMode ? "dark" : ""}`}>
    <h2>Account</h2>
    <div className='form'>

      <div className='user-full-name'>
        <h4>Full name</h4>
        <div className='details'>
          {userDetails.gender === "male" ? <FaceRoundedIcon/>:<Face4RoundedIcon/>}
          <p>{`${userDetails.fname[0].toUpperCase() + userDetails.fname.substring(1)} ${userDetails.lname[0].toUpperCase() + userDetails.lname.substring(1)}`}</p></div>
      </div>
      
      <div className='user-email'>
        <h4>Email</h4>
        <div className='details'><AlternateEmailRoundedIcon/><p>{`${userDetails.email}`}</p></div>
      </div>

      <div className='user-password'>
        <h4>Password</h4>
        <div className={`password details ${ props.darkMode ? "dark" : ""}`}>
          <KeyRoundedIcon/><p style={passVisOne ? passwordShowStyle : passwordHideStyle}>{`${userDetails.password}`}</p>
          <span onClick={() => setPassVisOne(prevState => !prevState)}
          >{passVisOne ? <VisibilityRoundedIcon/> : <VisibilityOffRoundedIcon/>}</span>
        </div>
      <div className='change-container'>
      <div onClick={()=>{setChangePassword(true)}} className='change-password-button'>Change password?</div>
      {changePassword &&
        <div className={`change-password ${ props.darkMode ? "dark" : ""}`}>
          <div>
            <h4>New Password</h4>
            <div
              contentEditable="true"
              suppressContentEditableWarning={true}
              className={`details ${ props.darkMode ? "dark" : ""}`}
              style={isNotMatch ? {borderBottom: '1px solid red'} : {}}
              >
              <KeyRoundedIcon/><p
                className='new-password'
                style={passVisTwo ? passwordShowStyle : passwordHideStyle}
                ></p>
              <span onClick={() => setPassVisTwo(prevState => !prevState)}
              >{passVisTwo ? <VisibilityRoundedIcon/> : <VisibilityOffRoundedIcon/>}
              </span>
            </div>
          </div>
          <div>
            <h4>Confirm Password</h4>
            <div 
              contentEditable="true"
              suppressContentEditableWarning={true}
              className={`details ${ props.darkMode ? "dark" : ""}`}
              style={isNotMatch ? {borderBottom: '1px solid red'} : {}}
              >
              <KeyRoundedIcon/><p 
              className='confirm-password'
              style={passVisThree ? passwordShowStyle : passwordHideStyle}>
              </p>
              <span onClick={() => setPassVisThree(prevState => !prevState)}
              >{passVisThree ? <VisibilityRoundedIcon/> : <VisibilityOffRoundedIcon/>}
              </span>
            </div>
          </div>
          <div className='account-buttons-container'>
            <button onClick={() => {saveHandler()}}>{isLoading ? <Loading/> : 'Save'}</button>
            <button onClick={() => {cancleHandler()}}>Cancel</button>
          </div>
        </div>}
      </div>
      </div>
      

      <div className='user-gender'>
        <h4>Gender</h4>
        <div className='details'>
          {userDetails.gender === 'male' ? <MaleRoundedIcon/> : <FemaleRoundedIcon/>}
          <p>{userDetails.gender[0].toUpperCase() + userDetails.gender.substring(1)}</p></div>
      </div>

      <div className='user-birthday'>
        <h4>Date of Birth</h4>
        <div className='details'><EventRoundedIcon type='date'/>
        <p>{userDetails.birth_date.slice(0, userDetails.birth_date.indexOf('T'))}</p></div>
      </div>

    </div>
  </div>
  </>
    )
}