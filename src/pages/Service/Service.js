import { useHistory } from 'react-router';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
	const { id, name, description, img } = service;

	const history = useHistory();

	const handleDetailsClick = () => {
		history.push(`/singleservice/${id}`);
	};

	return (
		<Container className="service-container">
			<Col>
				<Card className="service text-center">
					<Card.Img variant="top" src={img} className="card-img" />
					<Card.Body>
						<Card.Title>{name}</Card.Title>

						<Card.Text>{description}</Card.Text>
						<Link to={`/singleservice/${service?.id}`}>
							<button onClick={handleDetailsClick} className="btn btn-secondary">
								More Details
							</button>
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Service;
