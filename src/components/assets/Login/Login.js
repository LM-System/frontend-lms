import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Login.css'

export default function Login() {

	const [signUp, setSignUp] = useState(false)

  return (
    <div className='login-page-container'>
			<div className={`container ${signUp ? "right-panel-active" : ""}`} id="container">
			<div className="form-container sign-up-container">
				<form>
					<h1>Create Account</h1>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form>
					<h1>Sign in</h1>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
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
  )
}