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
					<Nav.Link className="ms-3 home" as={Link} to="/home">
						Home
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/service">
						Services
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/blog">
						Blog
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/aboutus">
						About Us
					</Nav.Link>
					{user?.email && (
						<Navbar.Text>
							Signed in as: <a href="#login">{user.displayName}</a>
						</Navbar.Text>
					)}
					{user?.email ? (
						<Button className="btn btn-warning" onClick={logOut}>
							Log Out
							<BsArrowBarRight className="w-6 h-6" />
						</Button>
					) : (
						<div>
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
							<Nav.Link className="ms-3 signUp" as={Link} to="/signup">
								Sign up
							</Nav.Link>
						</div>
					)}
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Header;
