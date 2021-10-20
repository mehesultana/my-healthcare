import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
	let { id } = useParams();

	const [serviceDetail, setServiceDetail] = useState([]);
	const [singleService, setSingleService] = useState({});

	useEffect(() => {
		fetch(`/serviceDetail.json`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.detail);
				setServiceDetail(data.detail);
			});
	}, [id]);

	useEffect(() => {
		const foundService = serviceDetail?.find((service) => service.id == id);
		setSingleService(foundService);
		console.log('foundService', foundService);
	}, [serviceDetail]);

	return (
		<Container className="mt-5 mb-5">
			<Row>
				<Col md={6}>
					<Card>
						<Card.Img variant="top" src={singleService?.img} />
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Body>
							<Card.Title>{singleService?.name}</Card.Title>
							<h4>Cost: ${singleService?.price}</h4>
							<p>{singleService?.description}</p>
							<h5>Contact Number: {singleService?.number}</h5>
						</Card.Body>
						<Button className=" btn-info">Book An Appointment</Button>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleService;
