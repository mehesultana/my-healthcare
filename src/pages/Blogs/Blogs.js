import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch(`blog.json`)
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<Container className="blogs">
			<div className="text-center">
				<h1>Must Read Blogs</h1>
				<p>At My Healthcare, our goal is help you make daily choices that improve your life. Hear from our amazing patients, meet our providers and experts, get wellness and prevention tips, and learn about health topics relevant to northern Michigan.</p>
			</div>
			<div className="blog-part">
				<Row xs={2} md={3} className="g-4 ">
					{blogs.map((blog) => (
						<Blog key={blog.id} blog={blog}></Blog>
					))}
				</Row>
			</div>
		</Container>
	);
};

export default Blogs;
