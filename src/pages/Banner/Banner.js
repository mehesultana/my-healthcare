import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
	return (
		<Container>
			<div className="banner-image">
				<h1 className="text-center">Welcome to My Home Care</h1>
				<h1 className="text-center">Our Commitment to Safe Care</h1>
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
				<div></div>
			</div>
		</Container>
	);
};

export default Banner;
