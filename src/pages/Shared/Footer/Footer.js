import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Container>
			<footer class=" text-center text-dark footer">
				<img className="footer-logo" src={logo} alt="" />
				<div class="container p-4 pb-0">
					<section class="mb-4">
						<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i class="fab fa-facebook-f"></i>
						</a>

						<Link className="ms-3 cart" to="/cart">
							Cart <FontAwesomeIcon icon={faCartPlus} />
						</Link>

						<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i class="fab fa-google"></i>
						</a>

						<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i class="fab fa-instagram"></i>
						</a>

						<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i class="fab fa-linkedin-in"></i>
						</a>

						<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
							<i class="fab fa-github"></i>
						</a>
					</section>
				</div>

				<div class="text-center p-3">© 2020 Copyright:dghghslkgjsdh</div>
			</footer>
		</Container>
	);
};

export default Footer;
