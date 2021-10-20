import React from 'react';
import './Footer.css';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail, ImYoutube } from 'react-icons/im';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className=" text-center text-dark footer">
			<img className="footer-logo" src={logo} alt="" />
			<div className="container p-4 pb-0">
				<h6>Get Connected</h6>
				<section className="mb-4">
					<Link className="ms-3 cart">
						<ImFacebook2 />
					</Link>
					<Link className="ms-3 cart">
						<ImTwitter />
					</Link>
					<Link className="ms-3 cart">
						<ImLinkedin />
					</Link>
					<Link className="ms-3 cart">
						<ImMail />
					</Link>
					<Link className="ms-3 cart">
						<ImYoutube />
					</Link>
				</section>
			</div>

			<div className="text-center p-3">Copyright © 2021 My Health Care</div>
		</footer>
	);
};

export default Footer;
