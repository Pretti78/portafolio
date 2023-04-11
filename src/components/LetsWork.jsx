import React from 'react';
import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
import avatar from '../assets/images/contacto.png';

const LetsWork = () => {
	const { register, handleSubmit, reset } = useForm();

	const defaultValues = { email: '', textArea: '' };

	const submit = (data) => {
		console.log(data);
		// emailjs
		// 	.sendForm(
		// 		'service_2s1kki6',
		// 		'template_5qb17s9',
		// 		data.current,
		// 		'fjs3dsAlgawymKo_5'
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result);
		// 		},
		// 		(error) => {
		// 			console.log(error);
		// 		}
		// 	);
		reset(defaultValues);
	};

	return (
		<Container id="contactame">
			<h1 className="title-section">Contacto</h1>
			<Row lg={2}>
				<Col lg={7}>
					<Form
						style={{ marginTop: '6rem', fontSize: '2rem' }}
						onSubmit={handleSubmit(submit)}
					>
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								type="email"
								name="user_email"
								placeholder="ingresa tu email..."
								{...register('email', {
									required: true,
									pattern:
										/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
								style={{
									fontSize: '1.5rem',
								}}
							/>
						</Form.Group>
						<FloatingLabel
							controlId="floatingTextarea2"
							label="escribeme..."
							htmlFor="textArea"
						>
							<Form.Control
								as="textarea"
								name="message"
								placeholder="Leave a comment here"
								{...register('textArea', { required: true })}
								style={{
									height: '10rem',
									maxHeight: '20rem',
									fontSize: '2rem',
								}}
							/>
						</FloatingLabel>
						<Button style={{ fontSize: '2rem' }} type="submit">
							Enviar
						</Button>
					</Form>
				</Col>
				<Col lg={5}>
					<img src={avatar} alt="" />
				</Col>
			</Row>
		</Container>
	);
};

export default LetsWork;
