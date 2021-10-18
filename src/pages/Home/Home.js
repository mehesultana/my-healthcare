import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
					<h1>Our Popular services</h1>

					<Row xs={1} md={3} className="g-4 ">
						{services.slice(0, 6).map((service) => (
							<Service key={service.id} service={service}></Service>
						))}
					</Row>
				</div>
				<br />
				<Link to="/service">
					<button type="button" className="btn btn-warning">
						Explore More <FontAwesomeIcon icon={faArrowAltCircleRight} />
					</button>
				</Link>
			</Container>
		</div>
	);
};

export default Home;
