import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
	return (
		<Container>
			<div className="text-white footer">
				<img className="logo" src={logo} alt="" />
				<div className="col-lg-6 justify-content-center justify-content-lg-end d-flex">
					<ul className="detail">
						<li>About My Health Care</li>
						<li>Read our blog</li>
						<li>Get Help</li>
					</ul>
				</div>

				<p className="text-center text-white py-3 m-0 detail">© Copyright 2021 || My Health Care All Rights Reserved</p>
			</div>
		</Container>
	);
};

export default Footer;
