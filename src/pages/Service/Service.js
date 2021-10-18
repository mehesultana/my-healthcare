import { useHistory } from 'react-router';
import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
	const { id, name, price, description, img } = service;

	const history = useHistory();

	const handleDetailsClick = () => {
		history.push(`/servicedetail/${id}`);
	};

	return (
		<Container className="service-container">
			<Col>
				<Card className="service text-center">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<h2 className="text-center">${price}</h2>
						<Card.Text>{description}</Card.Text>
						<Link to={`/servicedetail/${id}`}>
							<button onClick={handleDetailsClick} className="btn btn-warning">
								Book {name.toLowerCase()}
							</button>
						</Link>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Service;
