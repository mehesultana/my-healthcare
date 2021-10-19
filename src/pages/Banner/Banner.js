import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FcSearch, FcNightPortrait } from 'react-icons/fc';
import './Banner.css';

const Banner = () => {
	return (
		<Container>
			<div className="banner-image">
				<h1 className="text-center">Welcome to My Health Care</h1>
				<h1 className="text-center">Our Commitment to Safe Care</h1>

				<Row>
					<Col md={6}>
						<Card className="banner-card">
							<Button className="btn-secondary">Need Appointment?</Button>
						</Card>
					</Col>
					<Col md={6}>
						<Card className="banner-card">
							<Button className="btn-secondary">
								<FcNightPortrait />
								Search Professionals <FcSearch />
							</Button>
						</Card>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Banner;
