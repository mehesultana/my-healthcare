import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/lastpart.jpg';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(`services.json`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			<Banner />

			{/* services  */}
			<Container>
				<div className="services-part">
					<h1 className="text-center mb-5">Our Popular services</h1>

					<Row xs={1} md={3} className="g-4 ">
						{services.slice(0, 6).map((service) => (
							<Service key={service.id} service={service}></Service>
						))}
					</Row>
				</div>
				<br />
				<div className="text-center">
					<Link to="/services">
						<button type="button" className="btn btn-info ">
							Explore More <FontAwesomeIcon icon={faArrowAltCircleRight} />
						</button>
					</Link>
				</div>
				<div className="last-part">
					<Row>
						<Col md={4}>
							<Card>
								<Card.Img variant="top" src={img} />
							</Card>
						</Col>
						<Col md={5}>
							<h2>Virtual Visits: Expert Care at Your Fingertips</h2>
							<p>See the doctors and specialists you trust from the comfort of your home. My Healthcare Virtual Visits allow our providers to diagnose and treat a variety of conditions using simple video chat. Contact your My Healthcare provider to request your appointment today!</p>
							<Link to="/aboutus">
								Learn More <FontAwesomeIcon icon={faArrowAltCircleRight} />
							</Link>
						</Col>
					</Row>
				</div>
				<CardGroup className="advantage">
					<Card className="advantage-card">
						<Card.Body>
							<Card.Title>0ur Doctors</Card.Title>

							<Card.Text>Choose by name, specialty, city and more</Card.Text>

							<button>Find Doctor</button>
						</Card.Body>
					</Card>
					<Card className="advantage-card">
						<Card.Body>
							<Card.Title>Locations & Directions</Card.Title>
							<Card.Text>Find maps and more for all locations</Card.Text>
							<button>Find a Location</button>
						</Card.Body>
					</Card>
					<Card className="advantage-card">
						<Card.Body>
							<Card.Title>Appointments</Card.Title>
							<Card.Text>More ways than ever to get the care you need</Card.Text>
							<button>Appointments & Access</button>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
};

export default Home;
