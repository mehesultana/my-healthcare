import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
	let { id } = useParams();

	const [serviceDetail, setServiceDetail] = useState([]);
	const [singleService, setSingleService] = useState({});

	useEffect(() => {
		fetch('/serviceDetail.json')
			.then((res) => res.json())
			.then((data) => setServiceDetail(data.service));
	}, []);

	useEffect(() => {
		const foundService = serviceDetail.find((service) => service.id === id);
		setSingleService(foundService);
	}, [serviceDetail]);

	return (
		<Container>
			<Row>
				<Col md={4}>
					<Card>
						<Card.Img variant="top" src={singleService?.img} />
					</Card>
				</Col>
				<Col md={5}>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{singleService?.name}</Card.Title>
							<Card.Text>{singleService?.description}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleService;
