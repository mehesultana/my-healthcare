import React from 'react';
import { Container } from 'react-bootstrap';
import notfound from '../../images/notfound.png';

const NotFound = () => {
	return (
		<Container>
			<h1>404</h1>
			<img src={notfound} alt="" />
		</Container>
	);
};

export default NotFound;
