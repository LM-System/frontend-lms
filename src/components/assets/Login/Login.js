import './Login.css'
import './Login.scss'
import LoginBg from './LoginBg';
import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {
const malek=
{
	courses:[
		{
			title:"Life Skills",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",
			level:"",
			
		},
		{
			title:"JavaScript fundementals",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",			
			level:"",

		}
		,
		{
			title:"Web Design / HTML && CSS",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",			
			level:"",

		}
		,
		{
			title:"English L1",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",			
			level:"",

		},
		{
			title:"English L2",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",			
			level:"",

		}
		,
		{
			title:"Career",
			description:"",
			image_path:"",
			start_date:"22-5-2022",			
			end_date:"22-5-2022",			
			level:"",

		}
	]
}

	const navigate = useNavigate()
	const [signInData, setSignInData] = useState(
		{
				email: "",
				password: "",
		}
	)
	function signInHandleChange(event) {
		console.log(event.target.value)
			const {name, value} = event.target
			setSignInData(prevFormData => {
					return {
							...prevFormData,
							[name]: value,
					}
			})
	}
	const [signUp, setSignUp] = useState(false)
	// https://lms-qxvm.onrender.com/
	function signInHandler(event) {
		event.preventDefault()
		axios.post(`${process.env.REACT_APP_SERVER_URL}signin`, signInData).then(result => {
			if(result.data.message === 'success'){
				props.setIsLogin(true)
				localStorage.setItem('user_data', JSON.stringify(result.data.rows[0]))
				const user = JSON.parse(localStorage.getItem('user_data'))
				const body = { status: "on"}
				axios.put(`${process.env.REACT_APP_SERVER_URL}updatestatues/${user.id}`, body)
				.then(userData => localStorage.setItem('user_data', JSON.stringify(userData.data[0])))
				navigate('/')
			}
		})
	}

  return (
		<>
			<LoginBg/>
			<div className='login-page-container'>
				<div className={`container ${signUp ? "right-panel-active" : ""}`} id="container">
				<div className="form-container sign-up-container">
					<form>
						<h1>Create Account</h1>
						<input type="text" placeholder="First name" />
						<input type="text" placeholder="Last name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={signInHandler}>
						<h1>Sign in</h1>
						<input
							type="email"
							placeholder="Email"
							name='email'
							value={signInData.email}
							onChange={signInHandleChange}
							/>
						<input
							type="password"
							placeholder="Password"
							name='password'
							value={signInData.password}
							onChange={signInHandleChange}
							/>
						<Link href="#">Forgot your password?</Link>
						<button>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn"  onClick={() => setSignUp(false)}>Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp" onClick={() => setSignUp(true)}>Sign Up</button>
						</div>
					</div>
				</div>
		</div>
		</div>
		</>
  )
}