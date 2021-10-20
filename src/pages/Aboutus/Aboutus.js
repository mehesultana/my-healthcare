import React from 'react';
import { Container } from 'react-bootstrap';
import './Aboutus.css';

const Aboutus = () => {
	return (
		<Container className=" about">
			<div>
				<h1 className="text-center">ABOUT US</h1>
				<p>
					My Health Care has been founded with the vision to be the nation’s leading community-based mental health institute dedicated to promoting mental health as a pivotal of overall wellness. Through advocacy, education, research, and assistance services we dream of a change as a beacon of hope
					for society. Believing in the social integration of mental health services and a gender-inclusive approach – our programs and strategies are committed to promote mental health awareness, to remove the social stigmas, and to ensure the accessibility of mental health services whenever and
					wherever needed. My Health Care is committed to flourishing the overall mental health perspectives in Bangladesh. We hope and pursue to continue this journey witnessing the creation of thousands of beautiful narratives by healing hearts and transforming lives.
				</p>
			</div>
			<div>
				<h3 className="text-center">Mission</h3>
				<p>Our programs and initiatives fulfill our mission of promoting mental health, preventing mental disorders, and achieving victory over mental illness through advocacy, education, research, and services.</p>
			</div>
			<div>
				<h3 className="text-center">Vision</h3>
				<p>Team My Health Care hopes and pursues to continue its journey, witnessing the creation of thousands of beautiful narratives by healing hearts and transforming the lives of individuals of the nation.</p>
			</div>
			<div>
				<h3 className="text-center">Our Team</h3>
				<p>
					“WITH A TEAM OF EXPERTS BELIEVING IN INCLUSIVE WORK”
					<br />
					My Health Care is a multidisciplinary team of professionals with relevant training, specialization, and skills. To provide a holistic approach to mental health care services we proudly introduce our team of dedicated senior and junior Psychiatrists, Psychologists, Psychosocial workers, and
					Psychotherapists. Comprising more than 200 mental health professionals, with the vision to provide mental and behavioral health services to all – we believe in inclusive work and social integration of mental health care services.
				</p>
			</div>
		</Container>
	);
};

export default Aboutus;
