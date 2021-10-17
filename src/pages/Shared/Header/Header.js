import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<>
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
						<Link className="ms-3 cart" to="/cart">
							Cart <FontAwesomeIcon icon={faCartPlus} />
						</Link>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
};

export default Header;
