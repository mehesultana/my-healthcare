import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './blog.css';

const Blog = ({ blog }) => {
	// const { blog } = props;
	const { name, date, description, img } = blog;

	return (
		<Container className="blog-container">
			<Col>
				<Card className="blog">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<p>{date}</p>
						<Card.Text>{description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Blog;
