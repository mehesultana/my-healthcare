import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetail = () => {
	const { id } = useParams();
	const history = useHistory();

	const backHome = () => {
		history.push(`/home`);
	};
	const [service, setService] = useState([]);
	useEffect(() => {
		setService('/services.json'[id]);
		console.log('/services.json'[id]);
	}, [id]);

	const { name, price, description, img } = service;

	return (
		<Container className="details">
			<Card>
				<Card.Img variant="top" className="details-img" src={img} />
				<Card.Body>
					<h1>{name}</h1>

					<p>service Fee : ${price}</p>
					<p>{description}</p>
				</Card.Body>
				<Button className="mb-4" variant="warning" onClick={backHome}>
					Add To Cart
				</Button>
			</Card>
			<Button variant="success" onClick={backHome}>
				Back Home
			</Button>
		</Container>
	);
};

export default ServiceDetail;
