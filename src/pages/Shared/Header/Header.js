import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { BsArrowBarRight } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<Container className="header">
			<Navbar sticky="top" collapseOnSelect expand="lg">
				<Link to="/home">
					<img to="/home" className="logo" src={logo} alt="" />
				</Link>

				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Link className="ms-3 home" to="/home">
						Home
					</Link>
					<Link className="ms-3 " to="/service">
						Services
					</Link>
					<Link className="ms-3 " to="/blog">
						Blog
					</Link>
					<Link className="ms-3 " to="/aboutus">
						About Us
					</Link>
					{user?.email && (
						<Navbar.Text>
							Signed in as: <a href="#login">{user.displayName}</a>
						</Navbar.Text>
					)}
					{user?.email ? (
						// <button className="btn-warning" onClick={logOut}>
						// 	Logout
						// </button>
						<Button className="btn btn-warning" onClick={logOut}>
							Log Out
							<BsArrowBarRight className="w-6 h-6" />
						</Button>
					) : (
						<div>
							<Link to="/login">Login</Link>
							<Link className="ms-3 signUp" to="/signup">
								Sign up
							</Link>
						</div>
					)}
					{/* <Link className="ms-3 " to="/login">
							login
						</Link> */}
					{/* <Link className="ms-3 cart" to="/cart">
							Cart <FontAwesomeIcon icon={faCartPlus} />
						</Link> */}
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Header;
