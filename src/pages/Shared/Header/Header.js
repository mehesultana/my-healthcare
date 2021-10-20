import logo from '../../../images/logo.png';
import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { HiOutlineBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Header.css';
import { BsArrowBarRight } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<div className="header">
			<Navbar sticky="top" collapseOnSelect expand="lg">
				<Link to="/home">
					<img to="/home" className="logo" src={logo} alt="" />
				</Link>

				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link className="ms-3 home" as={Link} to="/home">
						<ImHome className="w-8 h-8" />
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/services">
						Services
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/blog">
						Blogs
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/aboutus">
						About Us
					</Nav.Link>
					<Nav.Link className="ms-3 " as={Link} to="/home">
						<HiOutlineBell className="w-8 h-8" />
					</Nav.Link>

					{user?.email && (
						<Navbar.Text>
							<a href="#login">{user.displayName}</a>
						</Navbar.Text>
					)}
					<br />
					<br />
					{user?.email ? (
						<Button className="btn btn-warning" onClick={logOut}>
							Log Out
							<BsArrowBarRight className="w-6 h-6" />
						</Button>
					) : (
						<>
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
							<Nav.Link className="ms-3 signUp" as={Link} to="/signup">
								Sign up
							</Nav.Link>
						</>
					)}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
