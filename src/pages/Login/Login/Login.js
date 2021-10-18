import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import './Login.css';

const Login = () => {
	const { signInUsingGoogle } = useAuth();

	return (
		<Container className="login-form background-image">
			<div>
				<h2>Login</h2>
				<form>
					<input type="email" name="" id="" placeholder="Your Email" />
					<br />
					<input type="password" name="" id="" />
					<br />
					<input type="submit" value="Submit" />
				</form>
				<p>
					new to ? <Link to="/signup">Create Account</Link>
				</p>
				<div>-------or----------</div>
				<Button onClick={signInUsingGoogle} className="btn btn-secondary">
					<FcGoogle className="w-6 h-6" />
					Sign In With Google
				</Button>
				<br />
				<br />

				<Button className="btn btn-info">
					<FaFacebookF className="w-6 h-6" />
					Sign In With Facebook
				</Button>
			</div>
		</Container>
	);
};

export default Login;
