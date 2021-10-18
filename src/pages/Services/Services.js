import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(`services.json`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<Container>
			<div className="text-center mt-5 mb-5">
				<h1>Available Services</h1>
				<p>
					My Health Care offers a complete continuum of healthcare services. <br />
					From primary care to emergency/trauma and advanced medical specialty care, My Health Care is dedicated to the <br /> healthcare needs of Oklahoma families. My Health Care offers a wide variety of medical specialties at locations throughout eastern Oklahoma
				</p>
			</div>
			<Row xs={1} md={3} className="g-4 ">
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</Row>
		</Container>
	);
};

export default Services;
