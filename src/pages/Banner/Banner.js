import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
	return (
		<Container>
			<div className="banner-image">
				<h4 className="text-center">Our Commitment to Safe Care</h4>
				<div className="banner-text">
					<p>We're here when you need us. For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.</p>
				</div>

				<CardGroup className="advantage">
					<Card className="card">
						<Card.Body>
							<Card.Title>0ur Doctors</Card.Title>

							<Card.Text>Choose by name, specialty, city and more</Card.Text>

							<button>Find Doctor</button>
						</Card.Body>
					</Card>
					<Card className="card">
						<Card.Body>
							<Card.Title>Locations & Directions</Card.Title>
							<Card.Text>Find maps and more for all locations</Card.Text>
							<button>Find a Location</button>
						</Card.Body>
					</Card>
					<Card className="card">
						<Card.Body>
							<Card.Title>Appointments</Card.Title>
							<Card.Text>More ways than ever to get the care you need</Card.Text>
							<button>Appointments & Access</button>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</Container>
	);
};

export default Banner;
