import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
	const { handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error, handleResetPassword, isLogin } = useAuth();

	return (
		<Container className="text-center signup-form mt-5 mb-5 background-image">
			<form onSubmit={handleRegistration}>
				<img className="logo  mb-5" src={logo} alt="" />
				<br />
				<input type="name" name="" id="" placeholder="Your Name" onBlur={handleNameChange} />
				<br />
				<input type="email" name="" id="" placeholder="Your Email" onBlur={handleEmailChange} />
				<br />
				<input type="password" name="" id="" placeholder="Your Password" onBlur={handlePasswordChange} />
				<br />
				<br />
				{error}
				<button type="submit" className="btn btn-success">
					{isLogin ? 'Login' : 'Signup'}
				</button>

				<br />
				<br />
				<h5>
					Have an account ? <Link to="/login">Login</Link>
				</h5>
				<br />
				<br />
				<div className="row mb-3 text-danger">Forgot password?</div>

				<button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">
					Reset Password
				</button>
			</form>
		</Container>
	);
};

export default Signup;
