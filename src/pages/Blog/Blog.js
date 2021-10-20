import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { IoIosArrowDropright } from 'react-icons/io';
import './blog.css';

const Blog = ({ blog }) => {
	// const { blog } = props;
	const { name, date, description, img } = blog;

	return (
		<Container className="blog-container">
			<Col>
				<Card className="blog">
					<Card.Img variant="top" src={img} className="blog-img" />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<p>{date}</p>
						<Card.Text>{description}</Card.Text>
						<Button className="btn-info">
							Read More
							<IoIosArrowDropright className="w-8 h-8" />
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Blog;
