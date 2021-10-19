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
		// .then((data) => console.log(data.service));
	}, [id]);

	useEffect(() => {
		const foundService = serviceDetail.find((service) => service.id === id);
		setSingleService(foundService);
	}, [serviceDetail]);

	return (
		<Container>
			<h1>{id}</h1>
			<Row>
				<Col md={6}>
					<Card>
						<Card.Img variant="top" src={serviceDetail?.img} />
					</Card>
				</Col>
				<Col md={6}>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>{singleService?.name}</Card.Title>
							<h4>Cost: ${singleService?.price}</h4>
							<p>{singleService?.description}</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleService;
