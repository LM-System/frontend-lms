import './Profile.css'
import Card from './Card/Card'
import Account from './Account/Account'
export default function Profile(props) {
  return (
    <div className='profile-container'>
      <Account {...props}/>
      <Card {...props}/>
    </div>
  )
}