import './Card.css'
import {useState} from 'react'
import axios from 'axios';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Loading from '../../../../../assets/Loading/Loading';
export default function Card(props) {
  const userData = JSON.parse(localStorage.getItem('user_data'))
  const [isEdit, setIsEdit] = useState(false)
  const [textArea, setTextArea] = useState(JSON.parse(localStorage.getItem('user_data')).bio)
  const [isLoading, setIsLoading] = useState(false)
  function changeHandler(event) {
    setTextArea(prevText => event.target.value)
  }

  async function saveHandler() {
    setIsLoading(true)
    const user = JSON.parse(localStorage.getItem('user_data'))
    const body = {...user, bio: textArea}
    await axios.put(`${process.env.REACT_APP_SERVER_URL}userinformtion/${user.id}`, body)
    localStorage.setItem('user_data', JSON.stringify(body))
    setIsEdit(false)
    setIsLoading(false)
  }

  function cancleHandler() {
    setTextArea(JSON.parse(localStorage.getItem('user_data')).bio)
    setIsEdit(false)
  }

  return (
    <>
      <div className={`user-card ${props.darkMode ? "dark" : ""}`}>
          <img
            width='100px'
            src={userData.gender === 'male' ? "https://www.w3schools.com/howto/img_avatar.png" : "https://www.w3schools.com/howto/img_avatar2.png"}
            alt="profile-img"
            />
          <h2>{`${userData.fname[0].toUpperCase() + userData.fname.substring(1)} ${userData.lname[0].toUpperCase() + userData.lname.substring(1)}`}</h2>
          <p>{userData.role[0].toUpperCase() + userData.role.substring(1)}</p>
          <div className={`bio ${props.darkMode ? "dark" : ""}`}>
            <h3>Bio</h3>
            <BorderColorRoundedIcon onClick={() => {
              setIsEdit(true)}}/>
          </div>
          {!isEdit && <div
              className={`bio-text ${ props.darkMode ? "dark" : ""}`}
              >
              {userData.bio}
              </div>}
          {isEdit &&
            <>
              <textarea
                className={`${props.darkMode ? "dark" : ""}`}
                value={textArea}
                name='textarea'
                maxlength="300"
                onChange={(event) => {changeHandler(event)}}>
              </textarea>
              <div className='card-buttons-container'>
                <button
                  onClick={() => {saveHandler()}}
                >{isLoading ? <Loading/> : 'Save'}</button>
                <button
                  onClick={() => {cancleHandler()}}
                  >Cancel</button>
              </div>
            </>
          }
      </div>
    </>
  )
}